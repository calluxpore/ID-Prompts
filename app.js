// Challenge categories
const categories = {
    toyDesign: [
        "Design a soft plush toy for preschoolers in Japan, emphasizing interactive storytelling and safety standards.",
        "Create a wooden puzzle for elementary students in Brazil, focusing on cultural relevance and motor skills.",
        "Develop a science-themed construction kit for middle-schoolers in Germany, promoting hands-on STEM exploration.",
        "Design a puzzle ball for toddlers in Canada, ensuring safe materials and vibrant color combinations.",
        "Create a musical toy for infants in France, highlighting intuitive play and gentle sound features.",
        "Develop a craft-based DIY kit for creative teenagers in Australia, encouraging artistic expression and reusable components.",
        "Design a role-play toy for preschoolers in the US, fostering early social skills and imaginative scenarios.",
        "Create an interactive board game for families in India, integrating cultural trivia and cooperative gameplay.",
        "Develop an outdoor sports set for children in Mexico, enhancing teamwork and physical activity in open spaces.",
        "Design a magnet-based building kit for curious minds in China, encouraging spatial reasoning and modular expansions.",
        "Create a pretend cooking kit for young chefs in Italy, celebrating local cuisine and safety considerations.",
        "Develop a robotics starter toy for tech-savvy kids in Singapore, promoting coding basics and problem-solving.",
        "Design a nature-themed exploration toy for kindergarteners in Kenya, emphasizing wildlife conservation and tactile learning.",
        "Create a multicultural doll collection for children in Sweden, fostering inclusivity and global awareness.",
        "Develop an eco-friendly clay modeling kit for schools in the UK, highlighting biodegradable materials and creative fun.",
        "Design a language-learning card game for bilingual households in Canada, blending vocabulary practice with lively interaction.",
        "Create a musical instrument set for preschool music programs in Thailand, inspiring rhythmic exploration and cultural pride.",
        "Develop a storybook-building toy for budding writers in Nigeria, merging narrative creation with assembly pieces.",
        "Design a puzzle cube for early learners in Russia, promoting problem-solving through colorful rotating segments.",
        "Create an augmented reality toy for tech-oriented teens in Japan, merging physical play with digital enhancements.",
        "Develop a cultural craft box for families in Morocco, highlighting local artisanship and hands-on creativity.",
        "Design a memory-matching toy for toddlers in Spain, using regional imagery and friendly illustrations.",
        "Create a shape-sorting bus for children in Norway, focusing on sturdy design and playful Scandinavian aesthetics.",
        "Develop a STEM puzzle set for after-school clubs in Egypt, encouraging teamwork and scientific curiosity.",
        "Design a large-scale building block kit for kindergartens in China, supporting collaborative play and basic engineering.",
        "Create a water play set for beach-loving families in Brazil, emphasizing durability and aquatic fun.",
        "Develop a balance board toy for preschool gymnastics in the US, enhancing motor control and confidence.",
        "Design a pop-up storytelling book for early readers in France, blending tactile surprises with language skills.",
        "Create a magnet maze for toddler classrooms in Italy, improving hand-eye coordination and puzzle logic.",
        "Develop a plush robot friend for nighttime comfort in Australia, combining soft textures with gentle light effects.",
        "Design a cross-cultural puzzle set for international exchange programs in the Netherlands, merging language practice with global themes.",
        "Create a light-up tracing board for preschoolers in South Africa, promoting early writing skills and creative exploration.",
        "Develop a coding puzzle toy for elementary students in Poland, introducing algorithmic thinking through playful scenarios.",
        "Design a dance-based interactive plush for preteens in Brazil, encouraging physical movement and self-expression.",
        "Create a collaborative story-building game for families in Spain, combining imaginative prompts with engaging group play.",
        "Develop a VR-based adventure kit for middle-schoolers in the US, bridging virtual exploration with real-world problem solving.",
        "Design an ocean conservation toy set for children in the Maldives, raising awareness of marine ecosystems and sustainability.",
        "Create a bilingual storytelling puppet show kit for families in Canada, encouraging language practice and theatrical fun.",
        "Develop a build-your-own solar car toy for kids in the UAE, illustrating renewable energy concepts and hands-on engineering basics.",
        "Design a cultural dance board game for children in Mexico, celebrating folk traditions and active participation.",
        "Create a bug-hunting kit for nature enthusiasts in Germany, featuring child-safe tools and educational insect cards.",
        "Develop a finger-painting pad for toddlers in Italy, emphasizing washable materials and fine motor development.",
        "Design a puzzle-based yoga mat for children in India, blending physical wellness with cognitive challenges.",
        "Create a crocheting starter pack for teens in Norway, combining textiles, patterns, and step-by-step tutorials.",
        "Develop an immersive space exploration playset for aspiring astronauts in Russia, focusing on planetary scales and STEM fundamentals.",
        "Design a quiet-time sensory bin for kindergartens in Australia, incorporating soft textures and calming elements.",
        "Create a 3D printing pen for young designers in Japan, expanding creativity while teaching safe usage and technique.",
        "Develop a cultural board game for families in the UK, highlighting historical landmarks and local customs.",
        "Design a mini gardening kit for preschoolers in France, fostering an early appreciation for nature and plant care.",
        "Create a language-themed scavenger hunt toy for children in the US, mixing vocabulary building with adventure-based activities."
    ],
    furnitureDesign: [
        "Design a compact sofa for tiny apartments in Hong Kong, emphasizing comfort and easy reconfiguration.",
        "Create an adjustable standing desk for remote workers in Germany, focusing on ergonomic well-being and durability.",
        "Develop a child-friendly table for preschools in Australia, ensuring playful aesthetics and safe edges.",
        "Design a folding coffee table for urban living in Sweden, optimizing space and Scandinavian style.",
        "Create a modular bookshelf for shared student housing in Canada, enabling flexible layouts and easy assembly.",
        "Develop an outdoor lounge chair for tropical resorts in Bali, combining weatherproof materials and laid-back comfort.",
        "Design a minimalist dining set for modern households in Japan, emphasizing clean lines and space efficiency.",
        "Create a convertible bunk bed for growing families in Mexico, prioritizing safety, storage, and playful design.",
        "Develop a collaborative office bench for coworking spaces in the US, encouraging interaction and flexible seating.",
        "Design a sustainable wooden cabinet for eco-conscious homes in Denmark, highlighting responsible forestry and craftsmanship.",
        "Create a curvy lounge chair for upscale hotels in France, blending sculptural elegance with plush upholstery.",
        "Develop a minimalistic shoe rack for cramped hallways in Italy, maximizing vertical space and style.",
        "Design a reading-nook armchair for cozy libraries in the UK, emphasizing ergonomic support and timeless appeal.",
        "Create a collapsible side table for event venues in India, allowing quick setup and lightweight transport.",
        "Develop a height-adjustable children's study desk for families in Spain, supporting growth and multi-year usage.",
        "Design a multi-purpose storage bench for compact condos in Singapore, merging seating, organization, and style.",
        "Create an indoor-outdoor lounge set for villas in Greece, celebrating coastal aesthetics and sun-resistant materials.",
        "Develop an ergonomic rocking chair for elders in Sweden, enhancing circulation and gentle relaxation.",
        "Design a playful beanbag series for youth centers in Brazil, encouraging social interaction and flexible seating.",
        "Create a modular partition system for open-plan offices in China, facilitating privacy and dynamic reconfiguration.",
        "Develop a minimalist TV stand for contemporary apartments in Canada, prioritizing sleek lines and cable management.",
        "Design a convertible crib for newborns in the US, adapting to toddler beds and ensuring safety regulations.",
        "Create a versatile entryway shelf for modern homes in Finland, merging functional hooks and tidy organization.",
        "Develop a space-saving dining bench for family kitchens in the UK, supporting social gatherings and easy storage.",
        "Design a sculptural accent table for luxury residences in Dubai, fusing artistic form with subtle practicality.",
        "Create an office chair with lumbar support for corporate settings in Germany, prioritizing posture and adjustability.",
        "Develop a collapsible display shelf for pop-up shops in Australia, enabling rapid assembly and convenient storage.",
        "Design a plant stand with built-in lighting for apartments in Korea, fostering indoor greenery and ambiance.",
        "Create a family-friendly picnic table for public parks in Canada, balancing weather resistance and easy cleaning.",
        "Develop a bed frame with hidden drawers for minimal bedrooms in Japan, maximizing storage and visual simplicity.",
        "Develop a space-optimizing wall-mounted desk for home offices in Norway, combining minimalist form and hidden storage compartments.",
        "Design a kid-friendly bunk bed with built-in slides for imaginative play in Singapore, ensuring robust structure and safety details.",
        "Create a convertible sofa bed with integrated shelving for tight living rooms in Japan, offering seamless day-to-night transitions.",
        "Develop a multi-level cat-friendly shelf for pet owners in France, merging feline climbing features with tasteful design.",
        "Design an ergonomic craft station for artisans in the US, featuring adjustable heights, modular add-ons, and easy-clean surfaces.",
        "Create a transformable dining table for small studios in Hong Kong, pivoting from desk to a full dining setup.",
        "Develop a suspended hammock chair for indoor reading nooks in Sweden, highlighting airy aesthetics and gentle swaying.",
        "Design a flexible office pod for remote workers in Germany, delivering acoustic isolation and plug-and-play functionality.",
        "Create an accent bench with built-in planters for modern patios in Australia, combining seating and greenery in a single structure.",
        "Develop a minimalist wardrobe system for capsule collections in the UK, prioritizing streamlined organization and timeless style.",
        "Design a rollaway kitchen island for culinary enthusiasts in the Netherlands, ensuring easy movement and compact storage.",
        "Create a convertible coffee table with hidden ottomans for small lounges in Italy, maximizing functional seating.",
        "Develop a desk integrated with a treadmill for health-conscious offices in Canada, encouraging movement while working.",
        "Design an adjustable lounge sofa for entertainment rooms in the US, featuring modular cushions and reclining segments.",
        "Create a lockable toy storage bench for preschools in Brazil, ensuring safety, organization, and easy cleaning.",
        "Develop a minimal console table for entryways in Denmark, focusing on subtle lines, hidden drawers, and natural finishes.",
        "Design an elevated dog bed for pet-friendly households in Australia, merging comfort, style, and easy-clean materials.",
        "Create a collapsible craft table for hobbyists in Ireland, optimizing space usage and quick setup functionality.",
        "Develop a modular shoe bench for large families in Spain, featuring stackable tiers and individual compartments.",
        "Design a sleek corner cabinet for contemporary kitchens in China, incorporating rotating shelves and efficient corner usage."
    ],
    lightingDesign: [
        "Design a pendant lamp for modern lofts in New York, emphasizing industrial flair and adjustable brightness.",
        "Create a solar-powered garden lantern for eco-conscious homeowners in Spain, harnessing sustainable lighting and durability.",
        "Develop a minimalist floor lamp for Scandinavian interiors in Sweden, highlighting clean lines and ambient glow.",
        "Design a child-safe night light for bedrooms in France, featuring soft illumination and playful shapes.",
        "Create a LED reading lamp for college dorms in Canada, offering adjustable angles and energy efficiency.",
        "Develop a motion-sensing hallway light for seniors in the UK, enhancing nighttime safety and gentle ambiance.",
        "Design a decorative chandelier for upscale hotels in Dubai, integrating artistic crystal elements and dimmable features.",
        "Create a clip-on desk lamp for small apartments in Japan, maximizing workspace and minimal power consumption.",
        "Develop an outdoor string light set for festive celebrations in Mexico, adding color and weatherproof reliability.",
        "Design a shape-shifting wall sconce for avant-garde interiors in Germany, blending geometry and soft glow.",
        "Create a rechargeable camping lantern for hikers in Australia, focusing on portability, brightness, and rugged design.",
        "Develop a bedside lamp with wireless charging for tech-savvy homes in Korea, combining convenience and style.",
        "Design a ring light for beauty vloggers in the US, ensuring flattering illumination and adjustable temperatures.",
        "Create a color-changing ambient light panel for gaming setups in China, elevating immersion and customization.",
        "Develop an energy-saving ceiling fan light for humid climates in India, improving airflow and bright illumination.",
        "Design a holographic projection lamp for futuristic exhibitions in Singapore, captivating visitors with interactive displays.",
        "Create a sculptural table lamp for art galleries in France, merging statement aesthetics with subtle lighting effects.",
        "Develop a motion-activated staircase light for modern homes in Canada, preventing falls and saving electricity.",
        "Design a cluster pendant fixture for stylish kitchens in Italy, showcasing creative arrangements and warm glow.",
        "Create a portable reading lamp for travelers in the UK, featuring foldable design and USB recharging.",
        "Develop a tall arc lamp for contemporary living rooms in Brazil, offering dramatic reach and dimming capability.",
        "Design a floating LED disc for pool parties in Miami, adding vibrant colors and waterproof construction.",
        "Create a smart city streetlight for energy-efficient urban lighting in Denmark, integrating sensors and data analytics.",
        "Develop a minimal track lighting system for commercial showrooms in Japan, highlighting products with adjustable beams.",
        "Design a rotating projector lamp for children's bedtime stories in Australia, providing visuals and gentle brightness.",
        "Create a vintage-style lantern for heritage hotels in Morocco, blending traditional craftsmanship with modern illumination.",
        "Develop a solar walkway light for public parks in Kenya, emphasizing durability, autonomous operation, and sustainability.",
        "Design an artistic sconce for boutique restaurants in New York, merging sculptural form and adjustable warmth.",
        "Create a mirrored backlight fixture for makeup studios in Los Angeles, ensuring precise illumination and elegant design.",
        "Develop a desk lamp with built-in alarm for students in Germany, simplifying wake-up routines and night studying.",
        "Design a neon-inspired LED sign for modern cafes in Hong Kong, capturing attention with vivid color and dynamic effects.",
        "Create a bamboo-based table lamp for eco-friendly households in Indonesia, celebrating natural textures and warm diffusion.",
        "Develop a color-tunable ceiling light for wellness centers in the US, enhancing mood and therapy sessions through controllable ambience.",
        "Design a magnetic track lighting kit for flexible gallery installations in Germany, allowing quick repositioning and focused accents.",
        "Create a low-profile under-cabinet light for contemporary kitchens in Italy, improving visibility and minimal design presence.",
        "Develop a motion-activated closet rod light for homes in Japan, simplifying outfit selection with intuitive illumination.",
        "Design a handcrafted paper lantern for cultural festivals in China, blending traditional artistry with modern LED functionality.",
        "Create a portable solar reading lamp for remote communities in Africa, maximizing brightness and durability in off-grid environments.",
        "Develop a whimsical cloud-shaped ceiling fixture for kids' bedrooms in France, sparking imaginative skies and soft lighting.",
        "Design a contemporary wall lamp with built-in shelving for small apartments in the UK, integrating illumination and storage.",
        "Create a suspended LED wave fixture for aquatic-themed restaurants in Australia, invoking oceanic movement and shimmering reflections.",
        "Develop a layered pendant light for coworking lounge areas in the US, encouraging relaxed collaboration and visual intrigue.",
        "Design a floor lamp with integrated charging ports for tech-savvy living rooms in Dubai, merging convenience with sleek styling.",
        "Create a nature-inspired chandelier for resort lobbies in Bali, fusing organic shapes with subtle illumination.",
        "Develop a desk lamp with auto-dimming sensors for study spaces in Canada, optimizing brightness throughout the day.",
        "Design a reading corner sconce for libraries in Norway, featuring adjustable arms and glare-free illumination.",
        "Create a large-scale sculptural LED installation for city landmarks in Singapore, offering mesmerizing patterns and color transitions.",
        "Develop a minimal corner lamp for contemporary living rooms in Brazil, saving floor space and generating ambient glow.",
        "Design a garden trellis light for nighttime landscaping in Spain, combining plant support with gentle spot lighting.",
        "Create a futuristic table lamp with gesture controls for tech showrooms in Germany, highlighting interactive design and innovation."
    ],
    transportationDesign: [
        "Design a compact electric scooter for urban commutes in Tokyo, emphasizing portability and efficient battery usage.",
        "Create an autonomous shuttle concept for university campuses in the US, focusing on safety and easy boarding.",
        "Develop a cargo bike for eco-friendly deliveries in Denmark, maximizing load capacity and ergonomic pedaling.",
        "Design a futuristic rideshare sedan for tech-savvy drivers in California, featuring advanced infotainment and sleek aerodynamics.",
        "Create a high-speed train interior for business travelers in France, optimizing comfort, productivity, and aesthetics.",
        "Develop a family-friendly minivan concept for suburban drivers in Canada, emphasizing seating flexibility and safe materials.",
        "Design a foldable electric bike for space-saving storage in Singapore, targeting young professionals and seamless commuting.",
        "Create a modular bus for developing regions in Africa, ensuring robust construction and adaptable configurations.",
        "Develop a lightweight wheelchair for Europe's historic cities, prioritizing maneuverability and comfortable user experience.",
        "Design an electric tuk-tuk for sustainable tourism in Thailand, highlighting local style and zero-emission travel.",
        "Create a personal hovercraft concept for recreational lakes in Australia, focusing on stability and environmental respect.",
        "Develop an aerodynamic sports car body for performance enthusiasts in Italy, blending sculptural form and speed.",
        "Design a self-driving delivery van for e-commerce giants in Germany, integrating secure cargo systems and route optimization.",
        "Create a sleek urban bus stop shelter for metropolitan areas in Brazil, emphasizing shade, signage, and seating.",
        "Develop an amphibious rescue vehicle for flood-prone regions in India, enhancing navigation and emergency responsiveness.",
        "Design an off-road bicycle for adventurous riders in New Zealand, prioritizing durability, shock absorption, and traction.",
        "Create a commuter motorcycle concept for congested cities in Vietnam, combining agility, safety, and fuel efficiency.",
        "Develop a self-balancing one-wheeler for tech-savvy commuters in China, offering stability and futuristic appeal.",
        "Design a sustainable ferry for island communities in the Philippines, reducing emissions and improving passenger comfort.",
        "Create a skateboarding scooter hybrid for urban youth in the UK, merging trick potential with smooth cruising.",
        "Develop a personalized electric unicycle for riders in the Netherlands, streamlining last-mile commutes with minimal footprint.",
        "Design a space-efficient ride-hailing van for big families in Mexico, featuring foldable seats and child safety features.",
        "Create a modular travel trailer for nomadic lifestyles in the US, allowing customization and off-grid living.",
        "Develop a rolling suitcase scooter for frequent flyers in Dubai, cutting airport transit times with fun mobility.",
        "Design a futuristic cargo drone for remote deliveries in Norway, emphasizing autonomous flight and payload security.",
        "Create a pedal-assisted rickshaw for low-impact transportation in India, improving driver comfort and passenger experience.",
        "Develop a solar-powered autonomous boat for coastal tours in Greece, blending leisure cruising and eco-responsibility.",
        "Design a ride-share friendly family car for suburban drivers in Japan, featuring sliding doors and flexible seating.",
        "Create an e-kickboard for boardwalk enthusiasts in California, ensuring stable control and quick folding for storage.",
        "Develop a hyperloop capsule interior for intercity travel in Europe's busiest corridors, prioritizing seating and safety.",
        "Design a solar-assisted commuter bus for sunny routes in California, reducing fuel consumption and carbon footprint.",
        "Create an ultra-light electric skateboard for students in the UK, combining portability, safety features, and speed controls.",
        "Develop a shared electric scooter docking station for busy urban centers in Japan, simplifying recharging and parking management.",
        "Design a bulletproof security van for cash transit in South Africa, prioritizing driver safety and discreet protection.",
        "Create a modular e-bike conversion kit for existing bicycles in Italy, expanding electric mobility through retrofitting solutions.",
        "Develop a child-safe school bus concept for suburban routes in Germany, integrating advanced collision prevention and secure seating.",
        "Design an electric snowmobile for eco-tourism in Scandinavia, ensuring silent operation and minimal environmental impact.",
        "Create a zero-emission truck for logistics companies in China, featuring extended battery range and quick charging capabilities.",
        "Develop a supercar design for track enthusiasts in the UAE, blending futuristic lines with advanced aerodynamics.",
        "Design an autonomous cargo tram system for dense European cities, minimizing road congestion by utilizing existing rail networks.",
        "Create a futuristic flight taxi for short-distance urban air travel in South Korea, focusing on vertical takeoff and landing efficiency.",
        "Develop a hydrogen-powered sports motorcycle for eco-conscious riders in California, pushing performance with green credentials.",
        "Design an all-terrain wheelchair for nature parks in Australia, improving inclusivity for individuals with mobility challenges.",
        "Create a modular baby seat system for rideshare vehicles in France, ensuring universal compatibility and quick installation.",
        "Develop a rural medical ambulance concept for remote villages in Africa, featuring robust suspensions and onboard telemedicine modules.",
        "Design an electric sailboat for weekend cruising in the Mediterranean, optimizing solar-assisted battery systems and eco-friendly materials.",
        "Create a micro electric bus concept for narrow city streets in Vietnam, offering agile maneuverability and ample passenger space.",
        "Develop a last-mile delivery bike with integrated storage compartments for dense urban areas in Brazil, boosting efficiency for couriers.",
        "Design a transparent-roof convertible for scenic drives in Switzerland, featuring panoramic views and refined open-air engineering.",
        "Create a shared commuter car subscription concept for city dwellers in the Netherlands, emphasizing vehicle rotation and minimal ownership hassles."
    ],
    electronicsProductDesign: [
        "Design a wireless earbud set for gym-goers in the US, prioritizing sweatproof durability and immersive sound.",
        "Create a voice-controlled smart speaker for minimalistic homes in Japan, blending elegant aesthetics and advanced AI.",
        "Develop a foldable smartphone concept for tech enthusiasts in Korea, highlighting seamless multitasking and durable screens.",
        "Design a fitness smartwatch for health-conscious millennials in Germany, offering heart-rate tracking and personalized coaching.",
        "Create a portable gaming console for commuters in France, balancing performance, battery life, and ergonomic grips.",
        "Develop a kid-friendly tablet for elementary students in Brazil, including sturdy cases and parental control features.",
        "Design a digital camera with instant printing for travelers in Thailand, enabling memorable keepsakes on the go.",
        "Create a compact robotic vacuum for apartments in China, integrating smart navigation and slim design profiles.",
        "Develop a noise-canceling headphone set for remote workers in Canada, ensuring prolonged comfort and focused audio.",
        "Design a smart thermostat for energy-efficient homes in the UK, automating climate control and usage analytics.",
        "Create a wearable health tracker for seniors in Sweden, emphasizing emergency alerts and easy-to-read displays.",
        "Develop a portable projector for business presentations in the US, merging compact form and high-resolution output.",
        "Design an AI-powered coffee machine for busy cafes in Italy, delivering consistent brews and streamlined operation.",
        "Create a self-cleaning water bottle for hikers in Australia, relying on UV sterilization and robust battery life.",
        "Develop a multi-charging station for gadget enthusiasts in India, accommodating various ports and fast-charging standards.",
        "Design a screen-less music player for minimalist audiophiles in Denmark, enabling simple controls and hi-fi output.",
        "Create a wearable translation device for global travelers in Spain, offering real-time language conversion and comfort.",
        "Develop a paper-thin e-reader for on-the-go bibliophiles in the UK, merging lightweight design and glare-free screens.",
        "Design a noise-masking sleep device for insomniacs in Japan, combining soothing frequencies and sleep analytics.",
        "Create a pocket-sized drone for adventure vloggers in New Zealand, featuring high-quality video and stable flight.",
        "Develop a dual-screen laptop concept for multitaskers in the US, maximizing productivity through flexible display orientations.",
        "Design a personal air purifier for urban dwellers in China, reducing pollutants and tracking indoor air quality.",
        "Create a wearable glucose monitor for diabetic patients in India, offering continuous tracking and discreet alerts.",
        "Develop a VR headset for immersive educational programs in Canada, emphasizing ergonomic fit and interactive controls.",
        "Design a digital photo frame for family nostalgia in Mexico, simplifying image updates and dynamic slideshow settings.",
        "Create a discreet wireless microphone for public speakers in Germany, ensuring clear sound and minimal visual impact.",
        "Develop a solar-powered charging case for smartphones in Kenya, leveraging abundant sunlight and extending device usage.",
        "Design a customizable mechanical keyboard for enthusiasts in Poland, prioritizing modular key layouts and RGB backlighting.",
        "Create a portable Bluetooth speaker for beachgoers in Brazil, achieving water resistance and robust bass performance.",
        "Develop a biometric smart lock for shared apartments in France, enabling secure entry and app-based control.",
        "Design a foldable e-ink typewriter for focused writers in the UK, merging distraction-free composition with portable form.",
        "Create a palm-sized wearable camera for life-logging enthusiasts in Japan, emphasizing hands-free operation and subtle design.",
        "Develop an in-car air purifier for polluted city drives in India, integrating real-time air quality monitoring and auto ventilation control.",
        "Design a dedicated streaming console for casual gamers in Brazil, optimizing user-friendly UI and low-latency cloud connections.",
        "Create a voice-activated digital photo album for seniors in Italy, simplifying navigation through spoken commands and large displays.",
        "Develop a home-brewing beer machine for enthusiasts in Germany, featuring customizable recipes and step-by-step automation.",
        "Design a personal ultrasonic jewelry cleaner for fashion lovers in France, ensuring delicate care and easy operation.",
        "Create a wearable posture corrector with real-time alerts for office workers in the US, combining subtle haptics with app-based tracking.",
        "Develop a solar-powered Bluetooth headphone prototype for outdoorsy hikers in Canada, reducing the need for frequent charging.",
        "Design an AI-based grocery scanner for busy families in Australia, automating shopping list creation and offering nutritional suggestions.",
        "Create a mini smart mirror with daily reminders for compact bathrooms in Hong Kong, blending reflection with digital scheduling.",
        "Develop a remote baby monitor with biometric tracking for new parents in Sweden, ensuring peace of mind through real-time data.",
        "Design a height-sensing lamp for posture correction in home offices in Denmark, illuminating misalignment with gentle cues.",
        "Create a dual-brew tea and coffee maker for beverage aficionados in the UK, merging flavor-specific controls with a sleek interface.",
        "Develop a multi-functional digital assistant with attachable modules for customized tasks in China, maximizing adaptability and upgrade potential.",
        "Design a pocket translator with offline capabilities for travelers in Mexico, ensuring accurate voice and text conversions without connectivity.",
        "Create a micro LED projector for cinematic experiences at home in Spain, focusing on ultra-high resolution and immersive sound integration.",
        "Develop a phone case with an integrated pop-out wireless speaker for on-the-go music lovers in the US, ensuring convenience and robust audio.",
        "Design an interactive pet feeder with AI scheduling for households in Korea, tracking feeding habits and optimizing portion control.",
        "Create a wearable EKG patch for athletes in Russia, monitoring heart performance in real time and delivering data via a connected app."
    ]
};

// Color mapping for categories
const categoryColors = {
    'toyDesign': 'toy',
    'furnitureDesign': 'furniture',
    'lightingDesign': 'lighting',
    'transportationDesign': 'transportation',
    'electronicsProductDesign': 'electronics'
};

// Cache DOM elements
const DOM = {
    challengeTitle: document.querySelector('.challenge-title'),
    newChallengeBtn: document.getElementById('newChallengeBtn'),
    downloadBtn: document.getElementById('downloadBtn'),
    categoryBtns: document.querySelectorAll('.category-btn')
};

// State
let currentCategory = 'toyDesign';

// Category display names
const categoryDisplayNames = {
    'toyDesign': 'Toy Design',
    'furnitureDesign': 'Furniture Design',
    'lightingDesign': 'Lighting Design',
    'transportationDesign': 'Transportation Design',
    'electronicsProductDesign': 'Electronics Design'
};

// Draw shapes function for download
function drawRandomShape(ctx, type, x, y, size) {
    ctx.beginPath();
    switch (type) {
        case 0: // Plus
            ctx.moveTo(x - size/2, y);
            ctx.lineTo(x + size/2, y);
            ctx.moveTo(x, y - size/2);
            ctx.lineTo(x, y + size/2);
            break;
        case 1: // Circle
            ctx.arc(x, y, size/2, 0, Math.PI * 2);
            break;
        case 2: // Square
            ctx.rect(x - size/2, y - size/2, size, size);
            break;
        case 3: // Triangle
            ctx.moveTo(x, y - size/2);
            ctx.lineTo(x + size/2, y + size/2);
            ctx.lineTo(x - size/2, y + size/2);
            ctx.closePath();
            break;
    }
    ctx.stroke();
}

// Generate Challenge
function generateChallenge() {
    const challenges = categories[currentCategory];
    const challenge = challenges[Math.floor(Math.random() * challenges.length)];
    
    requestAnimationFrame(() => {
        const titleElement = document.querySelector('.challenge-title');
        titleElement.classList.remove('fade-in');
        void titleElement.offsetWidth; // Trigger reflow
        titleElement.innerHTML = challenge;
        titleElement.classList.add('fade-in');
    });
}

// Download Prompt
function downloadPrompt() {
    const canvas = document.createElement('canvas');
    const size = 800;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    // Get current category color
    const colorName = categoryColors[currentCategory];
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue(`--${colorName}-color`);
    
    // Set background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, size, size);
    
    // Draw border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.strokeRect(20, 20, size - 40, size - 40);
    
    // Draw random shapes
    ctx.save();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 8;
    ctx.globalAlpha = 0.15;
    
    const numShapes = 8 + Math.floor(Math.random() * 3); // 8 to 10 shapes
    for (let i = 0; i < numShapes; i++) {
        const shapeType = Math.floor(Math.random() * 4);
        const x = 40 + Math.random() * (size - 80);
        const y = 40 + Math.random() * (size - 80);
        const shapeSize = 12 + Math.random() * 18;
        drawRandomShape(ctx, shapeType, x, y, shapeSize);
    }
    ctx.restore();

    // Get prompt text
    const prompt = document.querySelector('.challenge-title').textContent;
    ctx.fillStyle = 'white';
    
    // Calculate optimal font size
    let fontSize = 64; // Start with large font size
    const maxWidth = size - 80; // Maximum width for text
    const maxHeight = size - 280; // Maximum height for prompt text (leaving space for category and date)
    let lines = [];
    
    // Binary search for optimal font size
    let minFontSize = 24;
    let maxFontSize = 64;
    
    while (minFontSize <= maxFontSize) {
        fontSize = Math.floor((minFontSize + maxFontSize) / 2);
        ctx.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto`;
        
        // Calculate lines with current font size
        lines = [];
        let line = '';
        const words = prompt.split(' ');
        
        for (let word of words) {
            const testLine = line + (line ? ' ' : '') + word;
            const metrics = ctx.measureText(testLine);
            
            if (metrics.width > maxWidth && line) {
                lines.push(line);
                line = word;
            } else {
                line = testLine;
            }
        }
        lines.push(line);
        
        // Check if text fits within constraints
        const totalHeight = lines.length * (fontSize * 1.2);
        
        if (totalHeight > maxHeight) {
            maxFontSize = fontSize - 1;
        } else if (totalHeight < maxHeight / 2) {
            minFontSize = fontSize + 1;
        } else {
            break;
        }
    }
    
    // Draw prompt text with optimized size
    const lineHeight = fontSize * 1.2;
    const totalTextHeight = lines.length * lineHeight;
    let y = (size - totalTextHeight) / 2 - 40; // Center text vertically with offset
    
    ctx.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto`;
    lines.forEach(line => {
        ctx.fillText(line, 40, y);
        y += lineHeight;
    });
    
    // Draw category name
    ctx.font = '28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
    ctx.fillText(categoryDisplayNames[currentCategory], 40, size - 140);
    
    // Draw date
    const dateStr = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    ctx.font = '24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
    ctx.fillText(dateStr, 40, size - 80);
    
    // Download image
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `design-prompt_${timestamp}.png`;
    
    canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = filename;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
    }, 'image/png');
}

// Update background color
function updateBackgroundColor(category) {
    const colorName = categoryColors[category];
    const color = getComputedStyle(document.documentElement).getPropertyValue(`--${colorName}-color`);
    document.body.style.backgroundColor = color;
}

// Check for mobile/tablet devices
function checkMobileTablet() {
    if (window.innerWidth <= 1024) {
        // Completely prevent site access on mobile/tablet
        document.body.style.overflow = 'hidden';
        document.getElementById('mobileWarningModal').style.display = 'block';
        return false;
    }
    // Allow access on desktop
    document.body.style.overflow = '';
    document.getElementById('mobileWarningModal').style.display = 'none';
    return true;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Check for mobile/tablet on load
    if (!checkMobileTablet()) {
        return; // Stop initialization if on mobile/tablet
    }
    
    // Check on resize
    window.addEventListener('resize', checkMobileTablet);

    const categoryBtns = document.querySelectorAll('.category-btn');
    const newChallengeBtn = document.getElementById('newChallengeBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Set initial category and generate first challenge
    const initialCategoryBtn = document.querySelector(`[data-category="${currentCategory}"]`);
    if (initialCategoryBtn) {
        initialCategoryBtn.classList.add('active');
        updateBackgroundColor(currentCategory);
        generateChallenge();
    }
    
    // Category buttons
    categoryBtns.forEach(button => {
        button.addEventListener('click', function() {
            categoryBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            updateBackgroundColor(currentCategory);
            generateChallenge();
        });
    });
    
    // New challenge button
    newChallengeBtn.addEventListener('click', generateChallenge);
    
    // Download button
    downloadBtn.addEventListener('click', downloadPrompt);
    
    // Keyboard shortcut
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            generateChallenge();
        }
    });
});