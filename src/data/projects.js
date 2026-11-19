
export const projects = [
  {
    id: 'revelator',
    title: 'Revelator - Capstone Project',
    subtitle: 'AI-assisted document analysis',
    category: 'Web & mobile',
    cardDescription: 'An AI-assisted document verification system that analyzes uploaded documents for possible signs of forgery across 15 categories.',
    description: 'Revelator is an AI-assisted web and mobile application designed to help CCJE students, authorized users, and personnel identify possible document forgery. Using Google Gemini Vision, the system analyzes uploaded documents, detects suspicious details across 15 forgery categories, and provides explanations of possible alterations or inconsistencies. It also includes scan history and role-based access for users and administrators, supporting preliminary document verification while leaving final assessments to qualified forensic document examiners.',
    technologies: ['Python', 'SQLAlchemy', 'HTML', 'CSS', 'JavaScript', 'Google Gemini Flash API', 'Cloudflare'],
    images: [
      { src: '/assets/projects/Revelator/Primary.png', alt: 'Revelator primary interface' },
      { src: '/assets/projects/Revelator/Secondary.png', alt: 'Revelator document analysis view' },
      { src: '/assets/projects/Revelator/Admin.png', alt: 'Revelator administrator interface' }
    ],
    role: 'Prompt Engineering, Front-end, Testing',
    githubUrl: '',
    demoUrl: ''
  },
  {
    id: 'Ravager',
    title: 'Ravager',
    subtitle: 'Vampire Survivors-style action game',
    category: 'Game development',
    cardDescription: 'An action survival game where players take the role of a monster, defeat humans, collect resources, and evolve through upgrades.',
    description: 'Ravager is a Vampire Survivors-inspired action game that reverses the traditional survival concept by making the player the monster. Instead of surviving against enemies, players defeat humanity, collect resources, and level up to become stronger. The project combines Unity gameplay systems, pixel-art assets, account authentication, and cloud-connected features.',
    technologies: ['Unity', 'C#', 'Pixel Studio', 'HTML', 'CSS', 'Python', 'AWS', 'Firebase', 'Google Authentication', 'OTP'],
    images: [
      { src: '/assets/projects/Ravager/Menu.jpg', alt: 'Ravager game menu' },
      { src: '/assets/projects/Ravager/Gameplay.jpg', alt: 'Ravager gameplay' },
      { src: '/assets/projects/Ravager/LevelUp.jpg', alt: 'Ravager level-up screen' },
      { src: '/assets/projects/Ravager/GameOver.jpg', alt: 'Ravager game over screen' }
    ],
    role: 'Game development',
    githubUrl: 'https://github.com/cleevevro-dotcom/Ravager',
    demoUrl: ''
  },
  {
    id: 'bus-schedule-management',
    title: 'BookMyBus',
    subtitle: 'Bus scheduling and reservation system',
    category: 'Web development',
    cardDescription: 'A bus reservation platform for browsing routes, checking schedules, selecting seats, and processing online payments.',
    description: 'BookMyBus is a web-based bus scheduling and reservation system that allows passengers to browse available routes, check trip schedules, and reserve specific seats. It manages bus schedules and seat availability to prevent double bookings and integrates the PayMongo API for online payment processing. The system also provides administrative features for managing transportation schedules and reservations.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'PayMongo API', 'HTML', 'CSS', 'JavaScript'],
    images: [
      { src: '/assets/projects/BookMyBus/homePage.png', alt: 'BookMyBus home page' },
      { src: '/assets/projects/BookMyBus/SelectRoute.png', alt: 'BookMyBus route selection' },
      { src: '/assets/projects/BookMyBus/SelectBus.png', alt: 'BookMyBus bus selection' },
      { src: '/assets/projects/BookMyBus/Admin.png', alt: 'BookMyBus administrator page' }
    ],
    role: 'Academic project',
    githubUrl: 'https://github.com/cleevevro-dotcom/bus-schedule-management',
    demoUrl: ''
  },
  {
    id: 'docconnect-healthcare-portal',
    title: 'DocConnect',
    subtitle: 'Doctor-patient scheduling platform',
    category: 'Web development',
    cardDescription: 'A healthcare portal connecting patients, doctors, and administrators through appointment scheduling, doctor search, and messaging.',
    description: 'DocConnect is a web-based healthcare platform designed to connect patients with doctors through an organized appointment scheduling system. It supports three user roles: patients, doctors, and administrators. Patients can search for doctors by specialization, request appointments, and communicate with healthcare providers, while doctors manage their schedules and administrators oversee system activities.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    images: [
      { src: '/assets/projects/DocConnect/Screenshot%202026-11-05%20031508.png', alt: 'DocConnect portal screen' },
      { src: '/assets/projects/DocConnect/Screenshot%202026-11-05%20031538.png', alt: 'DocConnect portal screen' },
      { src: '/assets/projects/DocConnect/Screenshot%202026-11-05%20031712.png', alt: 'DocConnect portal screen' },
      { src: '/assets/projects/DocConnect/Screenshot%202026-11-05%20031854.png', alt: 'DocConnect portal screen' }
    ],
    role: 'Academic project',
    githubUrl: 'https://github.com/cleevevro-dotcom/docconnect-healthcare-portal',
    demoUrl: ''
  },
  {
    id: 'algorithm-simulation',
    title: 'Algorithm Simulation',
    subtitle: 'Sorting and data structure visualizer',
    category: 'Desktop application',
    cardDescription: 'A C# application for exploring sorting algorithms and common data structures through interactive operations and visual demonstrations.',
    description: 'Algorithm Simulation is an educational C# application designed to demonstrate how sorting algorithms and data structures work. It features Bubble Sort, Selection Sort, and Insertion Sort with step-by-step sorting animations. It also provides interactive demonstrations of linked lists, queues, stacks, and hash sets, helping users understand how these structures operate through practical examples.',
    technologies: ['C#', 'Console Application'],
    image: '/assets/projects/AlgoSimulation/ALGOsimulation.png',
    imageAlt: 'Algorithm Simulation application screen',
    role: 'Sorting Functions & Animation',
    githubUrl: 'https://github.com/cleevevro-dotcom/algorithm-simulation',
    demoUrl: ''
  },
  {
    id: 'perdshotel-reservation',
    title: 'PerdsHotel',
    subtitle: 'Hotel management and reservation website',
    category: 'Web development',
    cardDescription: 'A hotel website prototype featuring room browsing, reservation pages, and a simple booking interface.',
    description: 'PerdsHotel is a front-end hotel management and reservation website developed to demonstrate basic web development concepts. It allows visitors to explore available rooms, browse room details, and navigate through booking-related pages. The project focuses on website structure, visual presentation, navigation, and client-side interactivity using standard web technologies.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    images: [
      { src: '/assets/projects/PerdsHotel/Screenshot%202026-11-05%20032647.png', alt: 'PerdsHotel website screen' },
      { src: '/assets/projects/PerdsHotel/Screenshot%202026-11-05%20032707.png', alt: 'PerdsHotel reservation screen' }
    ],
    role: 'Academic project',
    githubUrl: 'https://github.com/cleevevro-dotcom/perdshotel-reservation',
    demoUrl: ''
  },
  {
    id: 'Descreet Fallout',
    title: 'Discrete FallOut',
    subtitle: 'Discrete mathematics quiz game',
    category: 'Console Application',
    cardDescription: 'An educational game where players solve logical operator problems before time runs out, featuring scoring, lives, and high scores.',
    description: 'Discrete FallOut is an educational console game based on discrete mathematics and logical operators. Players solve problems involving AND, OR, and NOT operations while racing against a time-pressure mechanic that causes unanswered problems to fall. The game combines logic-based challenges with answer checking, scoring, and gameplay progression to make practicing mathematical logic more interactive.',
    technologies: ['C#', 'Console Application'],
    images: [
      { src: '/assets/projects/DescreetFallO/Menu.png', alt: 'Discrete FallOut game menu' },
      { src: '/assets/projects/DescreetFallO/Game1.png', alt: 'Discrete FallOut gameplay' },
      { src: '/assets/projects/DescreetFallO/Game2.png', alt: 'Discrete FallOut gameplay challenge' },
      { src: '/assets/projects/DescreetFallO/GameOver.png', alt: 'Discrete FallOut game over screen' }
    ],
    role: 'Game Problem Creation, Sound & UI',
    githubUrl: 'https://github.com/cleevevro-dotcom/logic-equation-quiz-game',
    demoUrl: ''
  },
  {
    id: 'Quantum',
    title: 'Quantum Quandary',
    subtitle: 'Rock Paper Scissors with a Twist',
    category: 'Console Application',
    cardDescription: 'A strategic rock-paper-scissors game featuring Player vs Player and Player vs Bot modes, with five special actions: Charge, Gun, Mirror, Kamehameha, and Nuclear.',
    description: 'An academic game project that expands the classic rock-paper-scissors concept with additional strategic mechanics. Players can compete against another player or challenge an AI-controlled opponent. The game introduces five special actions (Charge, Gun, Mirror, Kamehameha, and Nuclear), making each round more unpredictable while applying fundamental programming concepts through interactive gameplay.',
    technologies: ['C#', 'Console Application'],
    images: [
      { src: '/assets/projects/QuantumQuandary/Menu.png', alt: 'Quantum Quandary main menu' },
      { src: '/assets/projects/QuantumQuandary/Selections.png', alt: 'Quantum Quandary game mode selection' },
      { src: '/assets/projects/QuantumQuandary/GamePlay.png', alt: 'Quantum Quandary gameplay with special actions' }
    ],
    projectType: 'Academic Project, 1st Year',
    githubUrl: '',
    demoUrl: ''
  },
  {
    id: 'ostrirun',
    title: 'OstriRun',
    subtitle: '3D endless runner game',
    category: 'Game development',
    cardDescription: 'A Unity endless runner featuring 3D-animated characters, procedurally generated environments, and an infinite gameplay loop.',
    description: 'OstriRun is an independent Unity game development project featuring 3D-animated characters and an endless runner gameplay experience. The game uses procedural world generation to create an ongoing level loop, allowing players to navigate continuously generated environments. The project also involves programming gameplay mechanics in C#, creating 3D assets and animations in Blender, and editing visual assets using GIMP.',
    technologies: ['Unity', 'C#', 'Blender', 'GIMP'],
    visual: 'runner',
    role: 'Independent project',
    githubUrl: '',
    demoUrl: 'https://play.unity.com/en/games/51382454-a56b-4218-93ee-6d78decc87ea/ostrirun'
  },
  {
    id: 'hungii-snikk',
    title: 'Hungii Snikk',
    subtitle: '3D snake game experiment',
    category: 'Game development',
    cardDescription: 'A small Unity game experiment featuring a snake-like character, collectible apples, and custom 3D game assets.',
    description: 'Hungii Snikk is an independent Unity game experiment that explores basic gameplay mechanics through a 3D snake-inspired experience. Players control a character within an enclosed arena and collect apples to increase their score. The project focuses on implementing game mechanics using C# and creating custom 3D assets in Blender.',
    technologies: ['Unity', 'C#', 'Blender'],
    visual: 'snake',
    role: 'Independent project',
    githubUrl: '',
    demoUrl: 'https://play.unity.com/en/games/eaf39b2c-cde8-4ae8-8f60-0f80a21b89be/hungii-snikk-testgame1'
  }
];
