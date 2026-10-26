// ============================================================================
// The Educatee Centre - Central Content & Asset Registry
// All text, contact details, course information, and image paths reside here.
// ============================================================================

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'English' | 'IELTS' | 'IT & Digital Skills';
  description: string;
  badge?: string;
  accentColor: 'blue' | 'pink' | 'teal' | 'yellow';
  image: string;
  imageAlt: string;
  targetAudience: string[];
  keyHighlights: string[];
  curriculumOutline: string[];
  // TODO: Update fee, duration, and batch schedule once finalized by administration
  duration: string;
  schedule: string;
  fee: string;
  features: string[];
}

export interface HighlightItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'calendar' | 'award' | 'users' | 'sparkles';
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  accent: 'blue' | 'pink' | 'teal' | 'yellow';
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
}

export interface SuccessStory {
  id: string;
  studentName: string;
  achievement: string;
  program: string;
  tag: string;
  image: string;
  imageAlt: string;
  quote: string;
  isPlaceholder?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  course: string;
  avatar: string;
  text: string;
  theme: string;
  isPlaceholder?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  category: 'Graduation' | 'Farewell' | 'Seminars' | 'Awards' | 'Classroom';
  dateDisplay: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'admission' | 'demo' | 'batches' | 'location' | 'contact';
}

export const siteContent = {
  brand: {
    name: "The Educatee Centre",
    establishedYear: 2022,
    tagline: "Overcome Your Fear of English. Build Your Global Future.",
    subtext: "Feni's premier institute for conversational English fluency, targeted IELTS preparation, and practical IT skills in a warm, motivating environment.",
    logoPath: "/logo.svg",
    logoPng: "/logo.png",
  },

  contact: {
    address: "Appayan Afroz Tower, Near Pourashava Gate, College Road, Feni",
    addressFloorNote: "5th floor (press the 4th floor button in the lift)",
    primaryPhone: "01874-232272",
    secondaryPhone: "01576-560505",
    whatsappNumber: "8801874232272",
    whatsappLink: "https://wa.me/8801874232272",
    facebookUrl: "https://www.facebook.com/TheEducatee.edu",
    email: "theeducatee.feni@gmail.com",
    openingHours: "Saturday - Thursday: 9:00 AM - 8:00 PM (Friday Closed / Special Batches Only)",
  },

  announcement: {
    active: true,
    text: "✨ Free Demo Classes starting this week! Special 50% discount on Girls' Batch and IELTS Foundation.",
    actionText: "Book Free Demo",
    actionLink: "#free-demo",
  },

  hero: {
    tag: "FENI'S TRUSTED LANGUAGE & IT INSTITUTE",
    headline: "Overcome Your Fear of English. Build Your Global Future.",
    subtext: "Master spoken English with zero hesitation, prepare for your target IELTS band with free mock tests in small groups of 16, and gain hands-on computer skills.",
    primaryCtaText: "Book a Free Demo Class",
    primaryCtaLink: "#free-demo",
    secondaryCtaText: "Explore Programs",
    secondaryCtaLink: "#programs",
    image: "/images/hero/hero.jpg",
    imageAlt: "Enthusiastic students practicing English and IT skills at The Educatee Centre",
  },

  highlights: [
    {
      id: "h1",
      title: "Established 2022",
      subtitle: "Dedicated to Feni's students",
      iconName: "calendar",
    },
    {
      id: "h2",
      title: "Expert Instructors",
      subtitle: "Personal mentorship & care",
      iconName: "award",
    },
    {
      id: "h3",
      title: "Friendly Learning",
      subtitle: "Zero judgment environment",
      iconName: "users",
    },
    {
      id: "h4",
      title: "Free Demo Classes",
      subtitle: "Experience before enrolling",
      iconName: "sparkles",
    },
  ] as HighlightItem[],

  aboutPreview: {
    tag: "ABOUT THE EDUCATEE CENTRE",
    title: "Towards a Confident & Globally Skilled Generation",
    lead: "Founded in 2022 in the heart of Feni, The Educatee Centre is built on a simple belief: every student can master English and modern digital tools when taught with patience, real practice, and genuine encouragement.",
    bullets: [
      "Friendly, fear-free atmosphere where asking questions is celebrated",
      "Separate Girls' Batch for comfortable, dedicated spoken English practice",
      "Interactive speaking sessions with small groups of maximum 16 students",
      "Dedicated hands-on computer room with individual workstations",
    ],
    ctaText: "Learn More About Us",
    ctaLink: "/about",
    image: "/images/facilities/spoken-room.jpg",
    imageAlt: "Inside The Educatee Centre interactive classroom",
  },

  programs: [
    {
      id: "spoken-english-girls",
      slug: "spoken-english-girls-batch",
      title: "SSC / Dakhil Spoken English",
      subtitle: "With dedicated separate Girls' Batch",
      category: "English",
      description: "Designed specifically for post-exam students to break the ice, overcome stage fright, and build spontaneous English speaking fluency in a supportive peer group.",
      badge: "50% Off Girls Batch",
      accentColor: "pink",
      image: "/images/programs/spoken-english.jpg",
      imageAlt: "Students practicing conversational English in a supportive group",
      targetAudience: [
        "SSC & Dakhil examination candidates awaiting results or starting college",
        "Female students seeking an exclusively female, comfortable learning setting",
        "Beginners with basic grammar knowledge who freeze when speaking English"
      ],
      keyHighlights: [
        "Separate comfortable Girls' batch",
        "Everyday situational roleplays & dialogues",
        "Phonetics & accurate pronunciation guidance",
        "Daily vocabulary builder in context"
      ],
      curriculumOutline: [
        "Overcoming Speaking Hesitation & Confidence Building",
        "Daily Routine & Conversational Sentence Structures",
        "Correct Pronunciation, Rhythm & Common Bengali Accents",
        "Public Speaking, Introductions & Group Discussions"
      ],
      // TODO: Update fee, duration, and schedule once confirmed for the upcoming semester
      duration: "To be announced",
      schedule: "To be announced",
      fee: "To be announced",
      features: ["Small batches", "Separate Girls batch", "Free speaking handouts", "Certificate on completion"]
    },
    {
      id: "spoken-english-professionals",
      slug: "spoken-english-working-professionals",
      title: "Spoken English for Professionals",
      subtitle: "Flexible evening batch for career growth",
      category: "English",
      description: "Polished workplace English, email etiquette, client communication, and interview mastery designed to fit the busy schedules of jobholders and entrepreneurs.",
      badge: "Evening Batch",
      accentColor: "blue",
      image: "/images/programs/spoken-english.jpg",
      imageAlt: "Working professionals in English communication training",
      targetAudience: [
        "Working professionals, corporate executives, and business owners",
        "University graduates preparing for corporate job interviews & BCS viva",
        "Anyone needing fluent corporate English for meetings and emails"
      ],
      keyHighlights: [
        "Convenient evening time slots",
        "Professional email, presentation & meeting skills",
        "Mock job interviews & resume screening",
        "Networking with fellow professionals in Feni"
      ],
      curriculumOutline: [
        "Corporate Communication & Meeting Etiquette",
        "Professional Email Writing & Formal Vocabulary",
        "Presentation Skills & Handling Q&A Confidently",
        "Job Interview Techniques & Body Language"
      ],
      // TODO: Update fee, duration, and schedule once confirmed for the upcoming semester
      duration: "To be announced",
      schedule: "To be announced",
      fee: "To be announced",
      features: ["Evening classes", "Interview simulation", "One-on-one feedback", "Certificate"]
    },
    {
      id: "ielts-preparation",
      slug: "ielts-preparation-mastery",
      title: "IELTS Preparation Masterclass",
      subtitle: "Foundation, Target-Based Complete & Crash Course",
      category: "IELTS",
      description: "Structured preparation across Listening, Reading, Writing, and Speaking with free authentic Cambridge mock tests. Classes strictly capped at 16 students.",
      badge: "Max 16 Students",
      accentColor: "yellow",
      image: "/images/programs/ielts.jpg",
      imageAlt: "IELTS study materials and small group preparation",
      targetAudience: [
        "Post-HSC students planning for higher study abroad (UK, USA, Canada, Australia)",
        "Job seekers applying for international visas or immigration",
        "Students aiming for Band 6.5 to 8.0+"
      ],
      keyHighlights: [
        "Post-HSC Foundation + Target-Based Complete + Crash Course options",
        "Strictly small groups: maximum 16 students per class",
        "Free authentic full-length mock tests with band evaluation",
        "Individual Task 1 & Task 2 writing assessments with detailed corrections"
      ],
      curriculumOutline: [
        "Diagnostic Band Assessment & Strategy Session",
        "Listening Module: Audio accents, note completion, multiple choice",
        "Reading Module: Skimming, scanning, True/False/Not Given mastery",
        "Writing Module: Task 1 academic report/letter & Task 2 band 7+ essays",
        "Speaking Module: 1-on-1 interview simulations with video feedback"
      ],
      // TODO: Update fee, duration, and schedule once confirmed for the upcoming semester
      duration: "To be announced",
      schedule: "To be announced",
      fee: "To be announced",
      features: ["Max 16 students/class", "Free mock tests", "Writing corrections", "Speaking 1-on-1s"]
    },
    {
      id: "computer-ms-office",
      slug: "basic-computer-and-ms-office",
      title: "Basic Computer & MS Office",
      subtitle: "100% practical in dedicated computer room",
      category: "IT & Digital Skills",
      description: "Hands-on mastery of Word, Excel, PowerPoint, Google Workspace, and internet navigation. Practice on your own individual machine in a quiet training lab.",
      badge: "Dedicated PC Lab",
      accentColor: "teal",
      image: "/images/programs/computer.jpg",
      imageAlt: "Students training on individual computer workstations in IT lab",
      targetAudience: [
        "School, college, and madrasah students needing essential computer literacy",
        "Office job applicants requiring Word typing and Excel formula skills",
        "Beginners with zero prior computer experience"
      ],
      keyHighlights: [
        "1 student per dedicated computer throughout the course",
        "Bangla (Bijoy & Avro) and English high-speed touch typing",
        "Microsoft Word (document formatting, official letters, tables)",
        "Microsoft Excel (formulas, sheets, basic accounting, payroll)",
        "PowerPoint presentations & cloud file management"
      ],
      curriculumOutline: [
        "Computer Fundamentals, Windows OS & File Management",
        "Touch Typing in English & Bangla",
        "MS Word: Professional Layouts, Formatting & Printing",
        "MS Excel: Mathematical Calculations, Formulas & Charts",
        "MS PowerPoint: Slide Design & Presentations",
        "Internet, Email, Cloud Storage & Cyber Safety"
      ],
      // TODO: Update fee, duration, and schedule once confirmed for the upcoming semester
      duration: "To be announced",
      schedule: "To be announced",
      fee: "To be announced",
      features: ["Individual PC for every student", "Quiet lab environment", "Practical assignments", "Certificate"]
    },
    {
      id: "social-media-marketing",
      slug: "social-media-marketing-freelancing",
      title: "Social Media Marketing",
      subtitle: "Practical digital campaigns & content skills",
      category: "IT & Digital Skills",
      description: "Learn how to build brands on Facebook, Instagram, and LinkedIn. Create high-converting ads, design graphics with Canva, and manage business pages.",
      badge: "High Demand",
      accentColor: "blue",
      image: "/images/programs/social-media-marketing.jpg",
      imageAlt: "Digital marketing campaign planning and social media strategy",
      targetAudience: [
        "Aspiring digital marketers, freelancers, and content creators",
        "Feni business owners looking to grow sales through Facebook marketing",
        "Youth eager to earn remotely through digital freelancing"
      ],
      keyHighlights: [
        "Meta (Facebook & Instagram) business page optimization",
        "Meta Ads Manager: Audience targeting, budgets & analytics",
        "Content writing for social media in English & Bangla",
        "Canva design fundamentals for eye-catching social posts"
      ],
      curriculumOutline: [
        "Social Media Fundamentals & Brand Strategy",
        "Page Setup, Verification & Organic Reach Tactics",
        "Meta Ads Manager: Campaign Creation, Pixel & Retargeting",
        "Content Marketing, Copywriting & Visual Design Tools"
      ],
      // TODO: Update fee, duration, and schedule once confirmed for the upcoming semester
      duration: "To be announced",
      schedule: "To be announced",
      fee: "To be announced",
      features: ["Live ad campaigns", "Canva design guide", "Business case studies", "Certificate"]
    },
    {
      id: "smart-handwriting",
      slug: "smart-handwriting-course",
      title: "Smart Handwriting Course",
      subtitle: "English & Bangla neat writing transformation",
      category: "English",
      description: "Transform illegible or slow handwriting into neat, beautiful, exam-ready script in both English and Bengali with scientific stroke and grip techniques.",
      badge: "Visible Results",
      accentColor: "yellow",
      image: "/images/programs/handwriting.jpg",
      imageAlt: "Neat handwriting transformation on practice notebook",
      targetAudience: [
        "School and college students losing exam marks due to untidy handwriting",
        "Candidates preparing for board exams, university admissions, and job exams",
        "Anyone who wants proud, clean handwriting"
      ],
      keyHighlights: [
        "Scientific pen grip and posture correction",
        "Letter formation, spacing, and stroke consistency",
        "Techniques for maintaining neatness under exam time pressure",
        "Both English (print & cursive) and Bangla handwriting modules"
      ],
      curriculumOutline: [
        "Finger Grip, Posture & Pressure Control",
        "English Alphabet Proportions & Baseline Alignment",
        "Bangla Matra, Kar & Letter Balance",
        "Speed Writing Drills for Exam Success"
      ],
      // TODO: Update fee, duration, and schedule once confirmed for the upcoming semester
      duration: "To be announced",
      schedule: "To be announced",
      fee: "To be announced",
      features: ["Special practice workbooks", "Personal stroke corrections", "Speed development", "Certificate"]
    }
  ] as Course[],

  whyChooseUs: [
    {
      id: "why-1",
      title: "Friendly Learning Environment",
      description: "We eliminate the intimidation of learning English. Our classroom is a warm, encouraging space where mistakes are welcomed as natural steps to fluency.",
      accent: "blue",
    },
    {
      id: "why-2",
      title: "Practical, Hands-on Teaching",
      description: "Less memorization, more action. Whether speaking in English or practicing on a dedicated computer workstation, you learn by doing every single day.",
      accent: "pink",
    },
    {
      id: "why-3",
      title: "Personal Mentorship & Care",
      description: "Led personally by Engineer Zahir Uddin Babar, each student receives close individual guidance, confidence boosting, and personalized study feedback.",
      accent: "teal",
    },
    {
      id: "why-4",
      title: "Regular Events & Celebrations",
      description: "Learning is exciting at Educatee. From Graduation Days to the prestigious CEO Award, we celebrate student milestones together like family.",
      accent: "yellow",
    },
  ] as FeatureCard[],

  founder: {
    name: "Engr. Zahir Uddin Babar",
    title: "Founder, CEO & Lead Instructor",
    credentials: "B.Sc. Engineering • Passionate Educator & Language Mentor",
    message: "At The Educatee Centre, our mission is to ensure that no student in Feni feels held back by their fear of English or lack of modern computer skills. When I started Educatee in 2022, I wanted to build more than just a training institute — I wanted a safe, uplifting community where every student feels valued, respected, and inspired to reach their full potential. Join us for a free demo class and discover the difference friendly mentorship can make.",
    image: "/images/founder/founder.jpg",
    imageAlt: "Engineer Zahir Uddin Babar, Founder and CEO of The Educatee Centre",
  },

  faculty: [
    {
      id: "fac-1",
      name: "Guest Language Instructor",
      role: "Faculty Member",
      specialty: "Spoken English & Pronunciation",
      image: "/images/faculty/faculty-1.jpg",
      imageAlt: "Faculty member at The Educatee Centre",
      isPlaceholder: true,
    },
    {
      id: "fac-2",
      name: "IT & Digital Skills Instructor",
      role: "Faculty Member",
      specialty: "Computer Applications & Marketing",
      image: "/images/faculty/faculty-2.jpg",
      imageAlt: "IT instructor at The Educatee Centre",
      isPlaceholder: true,
    },
  ],

  admissionSteps: [
    {
      number: "01",
      title: "Book a Free Demo Class",
      description: "Fill out the simple 30-second form on this page or WhatsApp us to reserve your free seat.",
    },
    {
      number: "02",
      title: "Attend the Live Demo",
      description: "Experience our engaging, friendly teaching style and interactive classroom first-hand.",
    },
    {
      number: "03",
      title: "Choose Your Batch",
      description: "Select the batch that fits your schedule (regular, girls-only, or evening professional batch).",
    },
    {
      number: "04",
      title: "Complete Admission",
      description: "Finalize your admission at our Feni campus office and collect your course materials.",
    },
  ] as StepItem[],

  facilities: [
    {
      id: "spoken-lab",
      title: "Interactive Spoken English Room",
      description: "A bright, acoustically treated room designed specifically for conversation circles, paired dialogues, and confidence-building roleplays in a quiet, distraction-free environment.",
      image: "/images/facilities/spoken-room.jpg",
      imageAlt: "Spoken English classroom with circle seating and collaborative discussion space",
      features: [
        "Quiet, focused academic environment",
        "Circle seating promoting natural eye contact and speaking",
        "Multimedia screen for interactive phonetics and audio exercises",
        "Air-conditioned comfort on the 5th floor"
      ]
    },
    {
      id: "computer-lab",
      title: "Dedicated Computer Training Lab",
      description: "A fully equipped IT room where every enrolled student works on their own dedicated PC workstation. No sharing, no rushing — 100% hands-on practical practice.",
      image: "/images/facilities/computer-room.jpg",
      imageAlt: "Dedicated IT computer room with individual workstations for practical training",
      features: [
        "1 student per dedicated modern PC workstation",
        "High-speed internet for web research and freelancing practice",
        "Licensed Office applications and design software",
        "Continuous instructor assistance during lab hours"
      ]
    }
  ] as FacilityItem[],

  testimonials: [
    {
      id: "t1",
      name: "Ayesha Siddiqua",
      role: "College Student",
      course: "Spoken English (Girls Batch)",
      avatar: "/images/testimonials/student-1.jpg",
      text: "I used to freeze whenever someone asked me a question in English. The separate Girls' Batch gave me a completely comfortable space to speak without any shame or fear. Within weeks, my hesitation was gone. Zahir sir treats every student like a caring mentor.",
      theme: "Friendly environment & gained confidence in speaking",
      isPlaceholder: true
    },
    {
      id: "t2",
      name: "Tanvir Ahmed",
      role: "Corporate Executive",
      course: "Spoken English for Professionals",
      avatar: "/images/testimonials/student-2.jpg",
      text: "The evening batch was exactly what I needed after office hours. The classes are clear, lively, and focused on real workplace conversations rather than boring grammar rules. My meeting communication and email drafting have improved dramatically.",
      theme: "Clear teaching & engaging practical classes",
      isPlaceholder: true
    },
    {
      id: "t3",
      name: "Nusrat Jahan",
      role: "Post-HSC Student",
      course: "IELTS Preparation",
      avatar: "/images/testimonials/student-3.jpg",
      text: "With only 16 students in our class, every single one of us got personal attention and feedback on our writing tasks. The regular free mock tests made the actual test atmosphere feel completely familiar.",
      theme: "Founder as mentor & small group care",
      isPlaceholder: true
    }
  ] as Testimonial[],

  successStories: [
    {
      id: "s1",
      studentName: "IELTS Target Band Achiever",
      achievement: "Target Band 7.5 Overall",
      program: "IELTS Complete Course",
      tag: "IELTS Success Spotlight",
      image: "/images/success/ielts-1.jpg",
      imageAlt: "IELTS success result spotlight at The Educatee Centre",
      quote: "Rigorous writing task evaluations and weekly mock tests at Educatee turned my weaknesses into my highest-scoring modules.",
      isPlaceholder: true
    },
    {
      id: "s2",
      studentName: "CEO Award Recipient",
      achievement: "Top Student Honor of the Year",
      program: "English & IT Diploma",
      tag: "CEO Award Honor",
      image: "/images/events/award-1.jpg",
      imageAlt: "CEO Award presentation celebrating student academic excellence",
      quote: "The CEO Award inspired me to believe in my capabilities. The Educatee Centre changed my perspective on learning.",
      isPlaceholder: true
    }
  ] as SuccessStory[],

  events: [
    {
      id: "ev-1",
      title: "Annual Graduation & Batch Celebration",
      category: "Graduation",
      dateDisplay: "Celebration Event",
      description: "Honoring our course graduates with certificates, batch memories, and inspiring speeches celebrating their language and IT transformations.",
      image: "/images/events/graduation-1.jpg",
      imageAlt: "Graduation celebration with certificates and caps at The Educatee Centre",
      badge: "Graduation Day"
    },
    {
      id: "ev-2",
      title: "The Prestigious CEO Award Ceremony",
      category: "Awards",
      dateDisplay: "Annual Honor",
      description: "The CEO Award is the highest student distinction at The Educatee Centre, awarded personally by Engr. Zahir Uddin Babar for extraordinary dedication and growth.",
      image: "/images/events/award-1.jpg",
      imageAlt: "CEO Award trophy and certificate ceremony",
      badge: "Top Student Honor"
    },
    {
      id: "ev-3",
      title: "Free English & Career Guidance Seminar",
      category: "Seminars",
      dateDisplay: "Open Community Event",
      description: "Empowering Feni's students with practical insights on conquering English speaking anxiety, IELTS strategies, and IT career pathways.",
      image: "/images/events/seminar-1.jpg",
      imageAlt: "Free educational seminar presented to enthusiastic students",
      badge: "Free Seminar"
    },
    {
      id: "ev-4",
      title: "Batch Farewell & Cultural Fellowship",
      category: "Farewell",
      dateDisplay: "Batch Event",
      description: "Heartfelt farewell ceremonies marking the completion of course batches with shared stories, tea, student performances, and lifelong friendships.",
      image: "/images/events/farewell-1.jpg",
      imageAlt: "Batch farewell ceremony and cultural fellowship",
      badge: "Farewell Day"
    }
  ] as EventItem[],

  faqs: [
    {
      id: "faq-1",
      category: "demo",
      question: "How do I attend a Free Demo Class?",
      answer: "You can book your demo seat online by filling out the form on this page, or simply send us a WhatsApp message at 01874-232272. We will confirm your demo schedule and room details immediately. There is no fee or obligation for the demo class."
    },
    {
      id: "faq-2",
      category: "batches",
      question: "Is there a separate batch for female students?",
      answer: "Yes! We run a dedicated, exclusive Girls' Batch for our Spoken English courses. It provides a relaxed, supportive environment where female students can practice speaking freely without any hesitation."
    },
    {
      id: "faq-3",
      category: "batches",
      question: "How many students are there in each IELTS class?",
      answer: "To ensure every student receives personal feedback and speaking time, our IELTS batches are strictly capped at a maximum of 16 students per class. Free authentic Cambridge mock tests are included."
    },
    {
      id: "faq-4",
      category: "location",
      question: "Where is The Educatee Centre located in Feni?",
      answer: "We are located at Appayan Afroz Tower, near the Pourashava Gate on College Road, Feni. We are on the 5th floor (important note: when taking the lift, please press the 4th floor button)."
    },
    {
      id: "faq-5",
      category: "admission",
      question: "What are the course fees and upcoming batch schedules?",
      answer: "Upcoming batch schedules and fee structures are announced before each intake. Please contact us via phone or WhatsApp at 01874-232272, or book a free demo class to receive the latest batch timeline and discount details."
    },
    {
      id: "faq-6",
      category: "contact",
      question: "How can I contact the institute directly?",
      answer: "You can call us directly at 01874-232272 or 01576-560505, chat with us on WhatsApp at 01874-232272, or visit our Facebook page at facebook.com/TheEducatee.edu. Our campus is open Saturday through Thursday from 9:00 AM to 8:00 PM."
    }
  ] as FAQItem[],
};
