/**
 * Single source of truth for portfolio content and links.
 * Update contact/social URLs here — they flow through the whole site.
 */

const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const site = {
  name: 'Waseem Qamar',
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
  languages: ['English (Professional)', 'Urdu (Native)'],
  social: {
    github: 'https://github.com/waseemqamardev',
    fiverr: 'https://www.fiverr.com/pro_qamar/buying?source=avatar_menu_profile',
    linkedin: 'https://linkedin.com/in/waseem-qamar-b02b41183',
  },
} as const

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
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

export const projects = [
  {
    title: 'TaxFormFinder',
    subtitle: 'IRS Tax Form Advisor',
    description:
      'Tax recommendation application with PDF export functionality and a structured form-selection flow.',
    image: asset('images/projects/taxformfinder.jpg'),
    tags: ['Flutter', 'PDF Export'],
  },
  {
    title: 'Medifinders',
    subtitle: 'Healthcare Appointment Platform',
    description: 'Healthcare appointment system with real-time booking features.',
    image: asset('images/projects/medifinders.jpg'),
    tags: ['Flutter', 'Healthcare'],
  },
  {
    title: 'ET Bank',
    subtitle: 'Digital Banking Suite',
    description:
      'Digital banking application for mobile and web platforms (User App, Business App, Website).',
    image: asset('images/projects/et-bank.jpg'),
    tags: ['Flutter', 'Fintech', 'Web'],
  },
  {
    title: 'QR Pay',
    subtitle: 'Digital Wallet & Payment App',
    description: 'QR-based payment system with transaction tracking.',
    image: asset('images/projects/qr-pay.png'),
    tags: ['Flutter', 'Payments'],
  },
  {
    title: 'Promenics',
    subtitle: 'Workforce Attendance Management',
    description:
      'Attendance management system with offline support and data synchronization.',
    image: asset('images/projects/promenics.png'),
    tags: ['Flutter', 'Offline Sync'],
  },
  {
    title: 'Drop App',
    subtitle: 'Shopify Mobile Storefront',
    description: 'E-commerce application integrated with Shopify APIs.',
    image: asset('images/projects/drop-app.jpg'),
    tags: ['Flutter', 'Shopify'],
  },
  {
    title: 'Tekkers',
    subtitle: 'Sports & Event Organizing App',
    description: 'Sports event management platform for users and organizers.',
    image: asset('images/projects/tekkers.jpg'),
    tags: ['Flutter', 'Events'],
  },
  {
    title: 'MakeUp Match',
    subtitle: 'Beauty Service Booking App',
    description: 'Beauty service booking application with scheduling features.',
    image: asset('images/projects/makeup-match.jpg'),
    tags: ['Flutter', 'Booking'],
  },
  {
    title: 'Notyred',
    subtitle: 'News Aggregation App',
    description: 'News aggregation application with real-time updates.',
    image: asset('images/projects/notyred.jpg'),
    tags: ['Flutter', 'News'],
  },
  {
    title: 'Traveefree',
    subtitle: 'Location-Based Resources Platform',
    description: 'Location-based resource sharing platform.',
    image: asset('images/projects/traveefree.jpg'),
    tags: ['Flutter', 'Maps'],
  },
  {
    title: 'Paybox',
    subtitle: 'E-Commerce App',
    description: 'Full-featured e-commerce shopping application.',
    image: asset('images/projects/paybox.png'),
    tags: ['Flutter', 'E-Commerce'],
  },
  {
    title: 'PetCare',
    subtitle: 'Pet Health Care App',
    description:
      'Pet care application with appointment scheduling and vaccination/health tracking features.',
    image: asset('images/projects/petcare.jpg'),
    tags: ['Flutter', 'Healthcare'],
  },
  {
    title: 'AI Life Coach',
    subtitle: 'Personal Growth & Wellness App',
    description:
      'AI-powered life coaching app delivering personalized goal tracking, habit reminders, and conversational guidance.',
    image: asset('images/projects/ai-life-coach.jpg'),
    tags: ['Flutter', 'AI'],
  },
  {
    title: 'AI Resume Builder',
    subtitle: 'Smart Resume Creator',
    description:
      'AI-assisted resume builder with guided section editing and polished PDF export for job applications.',
    image: asset('images/projects/ai-resume-builder.jpg'),
    tags: ['Flutter', 'AI', 'PDF'],
  },
  {
    title: 'Job Finder',
    subtitle: 'Job Search Platform',
    description:
      'Job-seeking mobile app with profile building, resume management, and messaging for recruiters and candidates.',
    image: asset('images/projects/job-finder.jpg'),
    tags: ['Flutter', 'Jobs'],
  },
]

export const profileImage = asset('images/profile.jpg')

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'University of Agriculture, Peshawar',
  period: '2018 – 2022',
}
