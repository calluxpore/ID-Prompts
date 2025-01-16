// Configuration
const CONFIG = {
    NUM_SHAPES: 800,
    MAX_ATTEMPTS: 1000,
    SHAPE_TYPES: {
        PLUS: 0,
        CIRCLE: 1,
        SQUARE: 2,
        TRIANGLE: 3
    },
    SIZE: {
        SMALL: { MIN: 8, MAX: 15, CHANCE: 0.5 },
        MEDIUM: { MIN: 15, MAX: 25, CHANCE: 0.3 },
        LARGE: { MIN: 25, MAX: 30, CHANCE: 0.2 }
    },
    PHYSICS: {
        COLLISION_THRESHOLD: 0.6,
        FORCE_MULTIPLIER: 0.05,
        FRICTION: 0.98,
        GRAVITY: 0.5,
        BOUNCE: 0.8,
        MIN_VELOCITY: 0.1
    }
};

class Shape {
    constructor() {
        this.initializeSize();
        this.type = Math.floor(random(4));
        this.initializePosition();
        this.vx = 0;
        this.vy = 0;
        this.rotation = random(TWO_PI);
        this.rotationSpeed = random(-0.02, 0.02);
        this.isAnimating = false;
    }

    initializeSize() {
        const rand = random(1);
        if (rand < CONFIG.SIZE.LARGE.CHANCE) {
            this.size = random(CONFIG.SIZE.LARGE.MIN, CONFIG.SIZE.LARGE.MAX);
        } else if (rand < CONFIG.SIZE.LARGE.CHANCE + CONFIG.SIZE.MEDIUM.CHANCE) {
            this.size = random(CONFIG.SIZE.MEDIUM.MIN, CONFIG.SIZE.MEDIUM.MAX);
        } else {
            this.size = random(CONFIG.SIZE.SMALL.MIN, CONFIG.SIZE.SMALL.MAX);
        }
    }

    initializePosition() {
        this.x = random(this.size, width - this.size);
        this.y = height - 10 - random(20);
        this.originalX = this.x;
        this.originalY = this.y;
    }

    reset() {
        let attempts = 0;
        let found = false;

        while (!found && attempts < 100) {
            this.initializePosition();
            found = !this.checkOverlap();
            attempts++;
        }

        this.vx = 0;
        this.vy = 0;
        this.isAnimating = false;
    }

    checkOverlap() {
        for (let other of shapes) {
            if (other !== this) {
                const d = dist(this.x, this.y, other.x, other.y);
                if (d < (this.size + other.size) * CONFIG.PHYSICS.COLLISION_THRESHOLD) {
                    return true;
                }
            }
        }
        return false;
    }

    update() {
        // Check mouse interaction
        const d = dist(mouseX, mouseY, this.x, this.y);
        if (d < 100) {
            this.isAnimating = true;
            const angle = atan2(mouseY - this.y, mouseX - this.x);
            const force = map(d, 0, 100, 8, 0);
            this.vx -= cos(angle) * force;
            this.vy -= sin(angle) * force;
            this.vy -= CONFIG.PHYSICS.GRAVITY;
        }

        if (this.isAnimating) {
            // Apply physics
            this.vy += CONFIG.PHYSICS.GRAVITY;
            this.vx *= CONFIG.PHYSICS.FRICTION;
            this.vy *= CONFIG.PHYSICS.FRICTION;
            this.x += this.vx;
            this.y += this.vy;

            // Boundary collisions
            this.handleBoundaryCollisions();

            // Check if movement has stopped
            if (this.y >= this.originalY) {
                this.y = this.originalY;
                this.vy = 0;
                if (Math.abs(this.vx) < CONFIG.PHYSICS.MIN_VELOCITY && 
                    Math.abs(this.vy) < CONFIG.PHYSICS.MIN_VELOCITY) {
                    this.isAnimating = false;
                }
            }
        }

        // Update rotation
        this.rotation += this.rotationSpeed;
    }

    handleBoundaryCollisions() {
        const halfSize = this.size / 2;
        
        if (this.x < halfSize) {
            this.x = halfSize;
            this.vx *= -CONFIG.PHYSICS.BOUNCE;
        } else if (this.x > width - halfSize) {
            this.x = width - halfSize;
            this.vx *= -CONFIG.PHYSICS.BOUNCE;
        }
        
        if (this.y < halfSize) {
            this.y = halfSize;
            this.vy *= -CONFIG.PHYSICS.BOUNCE;
        }
    }

    display() {
        push();
        translate(this.x, this.y);
        rotate(this.rotation);
        stroke(255, 255, 255, 25);
        strokeWeight(3.5);
        noFill();

        switch (this.type) {
            case CONFIG.SHAPE_TYPES.PLUS:
                this.drawPlus();
                break;
            case CONFIG.SHAPE_TYPES.CIRCLE:
                circle(0, 0, this.size);
                break;
            case CONFIG.SHAPE_TYPES.SQUARE:
                rectMode(CENTER);
                rect(0, 0, this.size, this.size);
                break;
            case CONFIG.SHAPE_TYPES.TRIANGLE:
                this.drawTriangle();
                break;
        }
        pop();
    }

    drawPlus() {
        const halfSize = this.size / 2;
        line(-halfSize, 0, halfSize, 0);
        line(0, -halfSize, 0, halfSize);
    }

    drawTriangle() {
        const halfSize = this.size / 2;
        triangle(0, -halfSize, halfSize, halfSize, -halfSize, halfSize);
    }
}

let shapes = [];

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    initializeShapes();
}

function initializeShapes() {
    shapes = [];
    let attempts = 0;

    while (shapes.length < CONFIG.NUM_SHAPES && attempts < CONFIG.MAX_ATTEMPTS) {
        const newShape = new Shape();
        if (!newShape.checkOverlap()) {
            shapes.push(newShape);
        }
        attempts++;
    }
}

function draw() {
    clear();
    updateAndDrawShapes();
    handleCollisions();
}

function updateAndDrawShapes() {
    shapes.forEach(shape => {
        shape.update();
        shape.display();
    });
}

function handleCollisions() {
    for (let i = 0; i < shapes.length; i++) {
        for (let j = i + 1; j < shapes.length; j++) {
            const shape1 = shapes[i];
            const shape2 = shapes[j];
            
            if (shape1.isAnimating || shape2.isAnimating) {
                const dx = shape2.x - shape1.x;
                const dy = shape2.y - shape1.y;
                const distance = sqrt(dx * dx + dy * dy);
                const minDist = (shape1.size + shape2.size) * 0.7;
                
                if (distance < minDist) {
                    resolveCollision(shape1, shape2, dx, dy, distance, minDist);
                }
            }
        }
    }
}

function resolveCollision(shape1, shape2, dx, dy, distance, minDist) {
    const angle = atan2(dy, dx);
    const targetX = shape1.x + cos(angle) * minDist;
    const targetY = shape1.y + sin(angle) * minDist;
    
    const ax = (targetX - shape2.x) * CONFIG.PHYSICS.FORCE_MULTIPLIER;
    const ay = (targetY - shape2.y) * CONFIG.PHYSICS.FORCE_MULTIPLIER;
    
    if (shape1.isAnimating) {
        shape1.vx -= ax;
        shape1.vy -= ay;
    }
    if (shape2.isAnimating) {
        shape2.vx += ax;
        shape2.vy += ay;
    }
}

// Debounced window resize handler
const debouncedResize = debounce(() => {
    resizeCanvas(windowWidth, windowHeight);
    initializeShapes();
}, 250);

function windowResized() {
    debouncedResize();
}

// Helper function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
} 