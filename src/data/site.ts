/**
 * Single source of truth for portfolio content and links.
 * Update contact/social URLs here — they flow through the whole site.
 */

const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const site = {
  name: 'Waseem Qamar',
  firstName: 'WASEEM',
  role: 'Flutter Developer | Mobile App Developer | Dart & Cross-Platform Specialist',
  shortRole: 'Flutter Developer',
  location: 'Islamabad, Pakistan',
  email: 'imwasim902@gmail.com',
  phone: '+92-342-8169902',
  phoneHref: 'tel:+923428169902',
  summary:
    'Flutter Developer with 3+ years of experience designing, building, and shipping cross-platform mobile applications for Android, iOS, and Web. Skilled in Dart, Flutter SDK, RESTful API integration, Firebase, and state management with GetX and Provider. Delivered 10+ production applications spanning e-commerce, fintech, healthcare, and workforce management, consistently improving performance, reliability, and user experience.',
  heroIntro:
    'Building polished cross-platform apps for Android, iOS, and Web — with clean architecture, Firebase, and a sharp eye for performance.',
  heroTags: ['FLUTTER', 'DART', 'APPS', 'MOBILE'],
  languages: ['English (Professional)', 'Urdu (Native)'],
  social: {
    github: 'https://github.com/waseemqamardev',
    fiverr: 'https://www.fiverr.com/pro_qamar/buying?source=avatar_menu_profile',
    linkedin: 'https://linkedin.com/in/waseem-qamar-b02b41183',
  },
  stats: [
    { value: '3+', label: 'Years of Experience' },
    { value: '10+', label: 'Apps Shipped' },
    { value: '8+', label: 'Enterprise Deliveries' },
  ],
} as const

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Work' },
  { href: '#contact', label: 'Contact' },
] as const

export const services = [
  {
    num: '01',
    title: 'Flutter Apps',
    description: 'Ship polished Android, iOS, and Web apps from one Dart codebase.',
  },
  {
    num: '02',
    title: 'Clean Architecture',
    description: 'Modular, testable code that stays fast as features grow.',
  },
  {
    num: '03',
    title: 'Firebase & APIs',
    description: 'Auth, Firestore, notifications, and REST wired for production.',
  },
  {
    num: '04',
    title: 'Performance',
    description: 'Load times under pressure — less jank, more retention.',
  },
] as const

export const processSteps = [
  {
    title: 'UNDERSTAND',
    description: 'Clarify goals, users, and constraints before a single screen ships.',
  },
  {
    title: 'ARCHITECT',
    description: 'Map clean layers, state, and data flow so the app can scale.',
  },
  {
    title: 'BUILD',
    description: 'Craft responsive UI and solid integrations across platforms.',
  },
  {
    title: 'SHIP',
    description: 'Test, polish performance, and deliver production-ready builds.',
  },
] as const

export const skillGroups = [
  {
    title: 'Core Development',
    accent: 'cyan' as const,
    items: [
      'Dart',
      'Flutter SDK',
      'Cross-Platform Apps (Android, iOS, Web)',
      'GetX',
      'Provider',
    ],
  },
  {
    title: 'Architecture & Code Quality',
    accent: 'violet' as const,
    items: [
      'Clean Architecture',
      'SOLID Principles',
      'Unit Testing',
      'Widget Testing',
      'Performance Optimization',
      'Code Reviews',
    ],
  },
  {
    title: 'Backend & Data',
    accent: 'burgundy' as const,
    items: [
      'Firebase (Authentication, Firestore, Cloud Messaging)',
      'Supabase',
      'RESTful API Integration',
      'JSON',
      'Hive',
      'Local & Remote Caching',
    ],
  },
  {
    title: 'Third-Party Integrations',
    accent: 'cyan' as const,
    items: [
      'Stripe Payments',
      'Shopify',
      'Google Maps',
      'AdMob',
      'Push Notifications',
      'In-App Purchases',
      'Social Login',
    ],
  },
  {
    title: 'Tools & Workflow',
    accent: 'violet' as const,
    items: ['Git', 'GitHub', 'Android Studio', 'VS Code', 'Agile/Scrum'],
  },
  {
    title: 'Collaboration',
    accent: 'burgundy' as const,
    items: [
      'Cross-Functional Team Communication',
      'Client-Facing Delivery',
      'Problem-Solving',
      'UI/UX Sensibility',
    ],
  },
]

export const experience = [
  {
    role: 'Flutter Developer',
    company: 'Zippy Ecom Solutions',
    period: 'March 2026 – Present',
    points: [
      'Develop and maintain cross-platform e-commerce mobile applications using Flutter and Dart.',
      'Build product catalog, cart, checkout, and payment gateway features for online retail clients.',
      'Collaborate with backend and design teams to deliver responsive, high-performance shopping experiences.',
      'Apply clean architecture and reusable component patterns to accelerate feature delivery.',
    ],
  },
  {
    role: 'Flutter Developer',
    company: 'Codetive Lab',
    period: 'August 2025 – March 2026',
    points: [
      'Developed and maintained cross-platform mobile applications for international clients.',
      'Increased development efficiency by 15% using reusable components and modular architecture.',
      'Ensured application stability through rigorous code reviews and testing practices.',
      'Enhanced performance by reducing application load time to under 2 seconds.',
    ],
  },
  {
    role: 'Associate Flutter Developer',
    company: 'Aptechmedia',
    period: 'September 2023 – July 2025',
    points: [
      'Delivered 8+ mobile applications for enterprise clients across multiple industries.',
      'Improved data handling efficiency by 40% using Firebase caching techniques.',
      'Minimized UI issues by 50% through responsive design and cross-device testing.',
      'Consistently completed assigned features within Agile sprint timelines.',
    ],
  },
  {
    role: 'Flutter Developer Intern',
    company: 'Soltridge',
    period: 'May 2023 – July 2023',
    points: [
      'Resolved UI issues, reducing bugs by 30%.',
      'Improved application performance by optimizing state management.',
      'Fixed cross-platform compatibility issues for Android and iOS.',
    ],
  },
  {
    role: 'Flutter Developer Intern',
    company: 'Excellence Delivered',
    period: 'February 2023 – May 2023',
    points: [
      'Developed application modules following established coding standards.',
      'Reduced debugging time through structured issue resolution.',
      'Improved code reusability using shared components.',
    ],
  },
]

export type Project = {
  title: string
  subtitle: string
  description: string
  image: string
  tags: string[]
  highlights: string[]
  link?: { label: string; href: string }
}

const discuss = (title: string) =>
  ({
    label: 'Discuss this project',
    href: `mailto:imwasim902@gmail.com?subject=${encodeURIComponent(`Project inquiry: ${title}`)}`,
  }) as const

export const projects: Project[] = [
  {
    title: 'TaxFormFinder',
    subtitle: 'IRS Tax Form Advisor',
    description:
      'Tax recommendation application with PDF export functionality and a structured form-selection flow.',
    image: asset('images/projects/taxformfinder.webp'),
    tags: ['Flutter', 'PDF Export'],
    highlights: [
      'Guided form-selection flow for IRS tax recommendations',
      'Polished PDF export for client-ready output',
    ],
    link: discuss('TaxFormFinder'),
  },
  {
    title: 'Medifinders',
    subtitle: 'Healthcare Appointment Platform',
    description: 'Healthcare appointment system with real-time booking features.',
    image: asset('images/projects/medifinders.webp'),
    tags: ['Flutter', 'Healthcare'],
    highlights: [
      'Real-time appointment booking for patients and clinics',
      'Cross-platform Flutter delivery for mobile access',
    ],
    link: discuss('Medifinders'),
  },
  {
    title: 'ET Bank',
    subtitle: 'Digital Banking Suite',
    description:
      'Digital banking application for mobile and web platforms (User App, Business App, Website).',
    image: asset('images/projects/et-bank.webp'),
    tags: ['Flutter', 'Fintech', 'Web'],
    highlights: [
      'Multi-surface suite: user app, business app, and website',
      'Fintech-ready Flutter architecture across platforms',
    ],
    link: discuss('ET Bank'),
  },
  {
    title: 'QR Pay',
    subtitle: 'Digital Wallet & Payment App',
    description: 'QR-based payment system with transaction tracking.',
    image: asset('images/projects/qr-pay.webp'),
    tags: ['Flutter', 'Payments'],
    highlights: [
      'QR payment flows with clear transaction tracking',
      'Wallet UX focused on speed and reliability',
    ],
    link: discuss('QR Pay'),
  },
  {
    title: 'Promenics',
    subtitle: 'Workforce Attendance Management',
    description:
      'Attendance management system with offline support and data synchronization.',
    image: asset('images/projects/promenics.webp'),
    tags: ['Flutter', 'Offline Sync'],
    highlights: [
      'Offline-first attendance capture for field teams',
      'Reliable sync when connectivity returns',
    ],
    link: discuss('Promenics'),
  },
  {
    title: 'Drop App',
    subtitle: 'Shopify Mobile Storefront',
    description: 'E-commerce application integrated with Shopify APIs.',
    image: asset('images/projects/drop-app.webp'),
    tags: ['Flutter', 'Shopify'],
    highlights: [
      'Shopify API-backed mobile storefront',
      'Catalog-to-checkout shopping experience',
    ],
    link: discuss('Drop App'),
  },
  {
    title: 'Tekkers',
    subtitle: 'Sports & Event Organizing App',
    description: 'Sports event management platform for users and organizers.',
    image: asset('images/projects/tekkers.webp'),
    tags: ['Flutter', 'Events'],
    highlights: [
      'Event tools for players and organizers',
      'Structured flows for scheduling and participation',
    ],
    link: discuss('Tekkers'),
  },
  {
    title: 'MakeUp Match',
    subtitle: 'Beauty Service Booking App',
    description: 'Beauty service booking application with scheduling features.',
    image: asset('images/projects/makeup-match.webp'),
    tags: ['Flutter', 'Booking'],
    highlights: [
      'Service booking with scheduling UX',
      'Client-friendly discovery and appointment flow',
    ],
    link: discuss('MakeUp Match'),
  },
  {
    title: 'Notyred',
    subtitle: 'News Aggregation App',
    description: 'News aggregation application with real-time updates.',
    image: asset('images/projects/notyred.webp'),
    tags: ['Flutter', 'News'],
    highlights: [
      'Aggregated news feed with timely updates',
      'Readable mobile reading experience',
    ],
    link: discuss('Notyred'),
  },
  {
    title: 'Traveefree',
    subtitle: 'Location-Based Resources Platform',
    description: 'Location-based resource sharing platform.',
    image: asset('images/projects/traveefree.webp'),
    tags: ['Flutter', 'Maps'],
    highlights: [
      'Map-driven resource discovery',
      'Location-aware sharing for travelers',
    ],
    link: discuss('Traveefree'),
  },
  {
    title: 'Paybox',
    subtitle: 'E-Commerce App',
    description: 'Full-featured e-commerce shopping application.',
    image: asset('images/projects/paybox.webp'),
    tags: ['Flutter', 'E-Commerce'],
    highlights: [
      'End-to-end shopping flows in Flutter',
      'Catalog, cart, and checkout oriented UX',
    ],
    link: discuss('Paybox'),
  },
  {
    title: 'PetCare',
    subtitle: 'Pet Health Care App',
    description:
      'Pet care application with appointment scheduling and vaccination/health tracking features.',
    image: asset('images/projects/petcare.webp'),
    tags: ['Flutter', 'Healthcare'],
    highlights: [
      'Appointment scheduling for pet care',
      'Vaccination and health tracking features',
    ],
    link: discuss('PetCare'),
  },
  {
    title: 'AI Life Coach',
    subtitle: 'Personal Growth & Wellness App',
    description:
      'AI-powered life coaching app delivering personalized goal tracking, habit reminders, and conversational guidance.',
    image: asset('images/projects/ai-life-coach.webp'),
    tags: ['Flutter', 'AI'],
    highlights: [
      'Personalized goals and habit reminders',
      'Conversational AI guidance for daily progress',
    ],
    link: discuss('AI Life Coach'),
  },
  {
    title: 'AI Resume Builder',
    subtitle: 'Smart Resume Creator',
    description:
      'AI-assisted resume builder with guided section editing and polished PDF export for job applications.',
    image: asset('images/projects/ai-resume-builder.webp'),
    tags: ['Flutter', 'AI', 'PDF'],
    highlights: [
      'Guided section editing with AI assistance',
      'Polished PDF export for applications',
    ],
    link: discuss('AI Resume Builder'),
  },
  {
    title: 'Job Finder',
    subtitle: 'Job Search Platform',
    description:
      'Job-seeking mobile app with profile building, resume management, and messaging for recruiters and candidates.',
    image: asset('images/projects/job-finder.webp'),
    tags: ['Flutter', 'Jobs'],
    highlights: [
      'Profile and resume management for candidates',
      'Messaging between recruiters and applicants',
    ],
    link: discuss('Job Finder'),
  },
]

export const profileImage = asset('images/profile.jpg')

export const portraits = {
  hero: asset('images/portraits/hero.png'),
  services: asset('images/portraits/services.png'),
  process: asset('images/portraits/process.png'),
  circle: asset('images/portraits/circle.png'),
  cutout: asset('images/portraits/cutout.png'),
} as const

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'University of Agriculture, Peshawar',
  period: '2018 – 2022',
}

