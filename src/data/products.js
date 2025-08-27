// concept car catalog (ids are strings for stable URLs)
export const CATEGORIES = ["electric", "luxury", "suv", "sports"];

export const PRODUCTS = [
  {
    id: "vx9",
    name: "Vision X9",
    price: 180000,
    category: "electric",
    rating: 4.8,
    image: "https://images.theconversation.com/files/127127/original/image-20160617-11101-1x7xhsf.jpg?ixlib=rb-4.1.0&rect=0%2C218%2C2000%2C970&q=45&auto=format&w=1356&h=668&fit=crop",
    description: "Folding aerodynamics and AI-assisted handling in a flagship electric hypercar.",
    specs: [
      "Battery: 120 kWh solid-state",
      "Range: 450 miles",
      "Top Speed: 220 mph",
      "0-60 mph: 1.9s",
      "Drive: Quad-Motor AWD",
      "Charging: 400 kW ultra-fast"
    ],
    about: "The Vision X9 represents the pinnacle of electric hypercar engineering. Designed with active aerodynamics that reshape in real time, it balances speed, efficiency, and control like no other. The AI-assisted handling system adapts instantly to road and track conditions, ensuring absolute precision. Inside, drivers are immersed in a minimalist, futuristic cabin powered by sustainable materials and intuitive interfaces. The Vision X9 isn’t just a car—it’s a glimpse into the future of high-performance mobility."
  },
  {
    id: "eclipse-one",
    name: "Eclipse One",
    price: 160000,
    category: "luxury",
    rating: 4.7,
    image: "https://hips.hearstapps.com/hmg-prod/images/22c0387-028-1670825222.jpg",
    description: "Electric luxury reimagined—silent cabin, adaptive comfort, ambient intelligence.",
    specs: [
      "Battery: 100 kWh",
      "Range: 400 miles",
      "Top Speed: 170 mph",
      "0-60 mph: 3.9s",
      "Interior: Adaptive ambient lighting",
      "Drive: Dual-Motor AWD"
    ],
    about: "The Eclipse One is crafted for those who demand refinement and serenity in motion. Its whisper-quiet electric powertrain pairs seamlessly with adaptive suspension to glide across any road. Inside, the cabin is a sanctuary of leather, wood, and recycled composites, illuminated by intelligent ambient lighting that responds to your mood. The Eclipse One’s AI concierge personalizes every journey, from seat temperature to navigation. With the Eclipse One, luxury isn’t just about arriving—it’s about how you feel along the way."
  },
  {
    id: "phantom-gt",
    name: "Phantom GT",
    price: 210000,
    category: "sports",
    rating: 4.9,
    image: "https://i.ytimg.com/vi/UjipsuTl9WY/maxresdefault.jpg",
    description: "Track-bred dynamics with road civility. A future built for speed.",
    specs: [
      "Engine: Hybrid Twin-Turbo V8 + Electric",
      "Horsepower: 950 hp combined",
      "Top Speed: 230 mph",
      "0-60 mph: 2.3s",
      "Chassis: Carbon fiber monocoque",
      "Drive: Rear-biased AWD"
    ],
    about: "The Phantom GT is a machine born from the racetrack but engineered for the open road. Its hybrid powertrain delivers savage acceleration while maintaining efficiency through regenerative systems. The sculpted carbon fiber body channels airflow with surgical precision, maximizing downforce without compromising elegance. Inside, drivers are greeted by a driver-centric cockpit, where tactile controls and immersive displays create a visceral connection to the road. The Phantom GT embodies pure adrenaline wrapped in sophistication."
  },
  {
    id: "nova-suv",
    name: "Nova SUV",
    price: 145000,
    category: "suv",
    rating: 4.6,
    image: "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/208726/vision-s-sub-4metre-suv-left-front-three-quarter.png?isig=0&q=80",
    description: "Power, comfort, and next-gen safety in a spacious electric SUV.",
    specs: [
      "Battery: 110 kWh",
      "Range: 380 miles",
      "Top Speed: 155 mph",
      "0-60 mph: 4.8s",
      "Seating: 7 adults",
      "Drive: Dual-Motor AWD"
    ],
    about: "The Nova SUV redefines what it means to travel with family in style. It blends commanding performance with safety-first design, offering space for seven without sacrificing agility. Its dual-motor AWD system ensures stability on highways and confidence on rugged terrain. Inside, every passenger is wrapped in premium comfort, with panoramic glass, climate-zoned seating, and next-gen infotainment that keeps everyone connected. The Nova SUV is proof that practicality and prestige can coexist in one stunning package."
  },
  {
    id: "aerox",
    name: "AeroX",
    price: 175000,
    category: "sports",
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZouZ7pr1fmqpdjAIy8vkLzThb34W2Z8tl9cGVm2YcclM-YyA4cX8qQLnRueeF3FTP5Y&usqp=CAU",
    description: "Sculpted for airflow efficiency. Aerodynamics meets elegance.",
    specs: [
      "Engine: Electric Tri-Motor",
      "Horsepower: 720 hp",
      "Top Speed: 210 mph",
      "0-60 mph: 2.7s",
      "Design: Active aerodynamic flaps",
      "Drive: RWD with torque vectoring"
    ],
    about: "The AeroX is a celebration of design and performance in perfect harmony. Every curve, vent, and line of its silhouette is optimized to slice through the air while captivating onlookers. With its tri-motor electric setup, the AeroX delivers breathtaking acceleration paired with razor-sharp handling. Inside, the cockpit reflects the same aerodynamic philosophy—sleek, minimalist, and intuitive. The AeroX proves that a sports car can be both efficient and exhilarating, pushing the limits of both form and function."
  },
  {
    id: "serene-luxe",
    name: "Serene Luxe",
    price: 168000,
    category: "luxury",
    rating: 4.4,
    image: "https://media.audiusa.com/assets/images/hero/4512-IMG0096.jpg",
    description: "A sanctuary on wheels—handcrafted interiors with sustainable materials.",
    specs: [
      "Battery: 95 kWh",
      "Range: 350 miles",
      "Top Speed: 160 mph",
      "0-60 mph: 4.5s",
      "Interior: Hand-stitched vegan leather",
      "Drive: Dual-Motor AWD"
    ],
    about: "The Serene Luxe is designed as a moving retreat for the modern traveler. Every surface and touchpoint inside the cabin is crafted from sustainable yet luxurious materials, creating an atmosphere of refined comfort. The serene silence of its drivetrain is enhanced by advanced acoustic insulation, offering peace even in bustling city streets. With its elegant proportions and refined technology suite, the Serene Luxe transforms every journey into a rejuvenating experience of calm and sophistication."
  },
  {
    id: "trail-e",
    name: "Trail-E",
    price: 138000,
    category: "suv",
    rating: 4.3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9odirZIHrO7xsDaVYMgPzlDYRvE-9bPMA1A&s",
    description: "Electric all-terrain capability with smart torque vectoring.",
    specs: [
      "Battery: 105 kWh",
      "Range: 340 miles",
      "Top Speed: 145 mph",
      "0-60 mph: 5.2s",
      "Off-road: Adjustable ground clearance",
      "Drive: Quad-Motor AWD"
    ],
    about: "The Trail-E is an SUV built for adventure without compromise. Its intelligent torque vectoring system distributes power precisely, ensuring stability across mud, snow, or sand. With rugged design elements, reinforced underbody protection, and adjustable ride height, it dominates trails yet remains refined enough for city commutes. Inside, passengers enjoy durable yet comfortable interiors, smart cargo solutions, and cutting-edge infotainment. The Trail-E ensures the road never ends—it simply transforms."
  },
  {
    id: "streamliner",
    name: "Streamliner",
    price: 152000,
    category: "electric",
    rating: 4.6,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/BMW_Gina_Museum.jpg/1200px-BMW_Gina_Museum.jpg",
    description: "Ultra-low drag design for unmatched highway efficiency.",
    specs: [
      "Battery: 100 kWh",
      "Range: 420 miles",
      "Top Speed: 180 mph",
      "0-60 mph: 3.6s",
      "Drag Coefficient: 0.19",
      "Drive: RWD"
    ],
    about: "The Streamliner is the ultimate expression of efficiency and design. With one of the lowest drag coefficients in the industry, it slices through air resistance, delivering incredible range and smooth performance. Its sleek silhouette hides a surprisingly spacious and comfortable cabin, designed for long journeys. Every element of the Streamliner speaks of thoughtful engineering, from its intelligent energy management to its futuristic user interface. It’s the car for those who value both elegance and endurance."
  },
  {
    id: "cobalt-gt",
    name: "Cobalt GT",
    price: 199000,
    category: "sports",
    rating: 4.7,
    image: "https://www.slashgear.com/img/gallery/10-coolest-ferrari-concept-cars-ever-made/l-intro-1683307749.jpg",
    description: "Carbon chassis, instant torque, and predictive traction control.",
    specs: [
      "Engine: Electric Dual-Motor",
      "Horsepower: 820 hp",
      "Top Speed: 215 mph",
      "0-60 mph: 2.5s",
      "Chassis: Full carbon fiber",
      "Drive: AWD with predictive control"
    ],
    about: "The Cobalt GT is engineered to thrill, with an uncompromising focus on performance and control. Its featherweight carbon chassis pairs with immense electric torque to deliver explosive acceleration. Predictive traction control systems analyze road grip in milliseconds, adapting to keep the driver in perfect command. Beyond raw performance, the Cobalt GT’s sculpted lines and aggressive stance make a bold statement. It’s not just a car—it’s a declaration of speed and power."
  },
  {
    id: "argentum",
    name: "Argentum",
    price: 172000,
    category: "luxury",
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS04PBwSsVzVbvyg8yyqwf2ABqF8pyKnZbww&s",
    description: "Luxury sedan with whisper-quiet cabin and level-3 assisted drive.",
    specs: [
      "Battery: 98 kWh",
      "Range: 370 miles",
      "Top Speed: 165 mph",
      "0-60 mph: 4.2s",
      "Autonomy: Level 3 assisted drive",
      "Interior: Executive lounge seating"
    ],
    about: "The Argentum is the epitome of modern luxury sedans. Its refined exterior is matched by an interior designed for ultimate comfort and sophistication. Level 3 assisted driving technology brings peace of mind to long journeys, while its quiet cabin ensures every conversation and note of music is crystal clear. Premium seating, soft-touch surfaces, and subtle lighting create a space of indulgence. With Argentum, the journey becomes as rewarding as the destination."
  },
  {
    id: "terra-x",
    name: "Terra X",
    price: 140000,
    category: "suv",
    rating: 4.2,
    image: "https://cdn.motor1.com/images/mgl/pb4e9V/s1/nissan-hyper-punk-concept.jpg",
    description: "Rugged design meets city comfort—adaptive suspension standard.",
    specs: [
      "Battery: 90 kWh",
      "Range: 310 miles",
      "Top Speed: 150 mph",
      "0-60 mph: 5.6s",
      "Suspension: Adaptive air ride",
      "Drive: Dual-Motor AWD"
    ],
    about: "The Terra X bridges rugged performance with urban sophistication. Its adaptive suspension system seamlessly shifts between city smoothness and off-road toughness. Designed with muscular styling and protective detailing, it feels at home both in mountain trails and city boulevards. Inside, Terra X emphasizes utility and comfort, with fold-flat seating, intelligent storage, and advanced connectivity. For those who want one SUV to do it all, Terra X is the perfect balance."
  },
  {
    id: "ion-s",
    name: "ION S",
    price: 130000,
    category: "electric",
    rating: 4.1,
    image: "https://www.stellantisandyou.co.uk/images/inline-cms/image/custom-page41/xs/1920x1080-New-Fiat-500-Electric@2x.jpg",
    description: "Compact electric coupe with playful dynamics and fast-charge.",
    specs: [
      "Battery: 75 kWh",
      "Range: 280 miles",
      "Top Speed: 140 mph",
      "0-60 mph: 5.0s",
      "Drive: RWD",
      "Charging: 250 kW fast-charge"
    ],
    about: "The ION S is built for urban explorers who crave style and agility. Its compact coupe design makes it playful in city streets while still capable on highways. With quick charging and nimble handling, it offers both convenience and fun. Inside, its youthful personality shines through bold interior design, smart tech features, and customizable displays. The ION S is proof that electric mobility can be affordable, dynamic, and exciting all at once."
  }
];
