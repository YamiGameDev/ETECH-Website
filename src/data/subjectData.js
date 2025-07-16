export const subjectDescription = {
  title: "Empowerment Technology",
  description: "At the end of the course, the students must gain a solid understanding of how technology can be used for personal and professional growth.",
  aboutContent: {
    overview: "Empowerment Technology is a comprehensive educational framework designed to equip learners with essential 21st-century digital skills. Our curriculum bridges the gap between traditional education and the rapidly evolving technological landscape.",
    approach: "Through hands-on learning experiences, real-world projects, and industry-relevant applications, students develop not just technical competencies but also critical thinking skills necessary for digital citizenship and future career success.",
    methodology: "Our approach emphasizes practical application, ethical technology use, and innovative problem-solving to prepare students for an increasingly digital world."
  },
  objectives: [
    "Develop digital literacy skills essential for the 21st century",
    "Understand ethical implications of technology use",
    "Master advanced productivity applications",
    "Create and design digital content using web technologies",
    "Apply ICT tools for problem-solving and innovation"
  ]
};

export const lessonScope = {
  firstQuarter: {
    title: "First Quarter",
    topics: [
      {
        id: 1,
        topic: "Introduction to ICT",
        description: "Fundamentals of Information and Communication Technology",
        icon: "💻",
        duration: "2 weeks"
      },
      {
        id: 2,
        topic: "Ethics on the Internet",
        description: "Digital citizenship and responsible technology use",
        icon: "🛡️",
        duration: "2 weeks"
      },
      {
        id: 3,
        topic: "Advanced Spreadsheet Skills",
        description: "Complex formulas, data analysis, and visualization",
        icon: "📊",
        duration: "3 weeks"
      },
      {
        id: 4,
        topic: "Advanced Word Processing Application",
        description: "Document design, collaboration, and automation",
        icon: "📝",
        duration: "2 weeks"
      },
      {
        id: 5,
        topic: "Advanced Presentation Application",
        description: "Interactive presentations and multimedia integration",
        icon: "🎯",
        duration: "1 week"
      }
    ]
  },
  secondQuarter: {
    title: "Second Quarter",
    topics: [
      {
        id: 6,
        topic: "Online Platforms as tools for ICT Content",
        description: "Leveraging digital platforms for content creation and sharing",
        icon: "🌐",
        duration: "3 weeks"
      },
      {
        id: 7,
        topic: "Introduction to HTML",
        description: "Web structure and semantic markup fundamentals",
        icon: "🏗️",
        duration: "3 weeks"
      },
      {
        id: 8,
        topic: "Introduction to CSS",
        description: "Styling and layout design for web pages",
        icon: "🎨",
        duration: "4 weeks"
      }
    ]
  }
};

export const gradingSystem = {
  title: "Grading System",
  components: [
    {
      category: "Written Works",
      percentage: 25,
      description: "Activities / Quizzes",
      color: "#667eea",
      breakdown: [
        { item: "Quizzes", weight: "60%" },
        { item: "Activities", weight: "40%" }
      ]
    },
    {
      category: "Performance Task",
      percentage: 45,
      description: "Major PT 80%, Behavior 10%, Participation 10%",
      color: "#764ba2",
      breakdown: [
        { item: "Major Performance Tasks", weight: "80%" },
        { item: "Behavior", weight: "10%" },
        { item: "Participation", weight: "10%" }
      ]
    },
    {
      category: "Quarterly Exam",
      percentage: 30,
      description: "Comprehensive assessment",
      color: "#f093fb",
      breakdown: [
        { item: "Written Examination", weight: "100%" }
      ]
    }
  ],
  passingGrade: 75,
  gradingScale: [
    { range: "90-100", grade: "Outstanding", description: "Exceptional performance" },
    { range: "85-89", grade: "Very Satisfactory", description: "Above average performance" },
    { range: "80-84", grade: "Satisfactory", description: "Average performance" },
    { range: "75-79", grade: "Fairly Satisfactory", description: "Below average but passing" },
    { range: "Below 75", grade: "Did Not Meet Expectations", description: "Failing grade" }
  ]
};

export const professorInfo = {
  name: "Joshua C. Oriondo",
  title: "Professor - Empowerment Technology",
  image: "/src/assets/Oriondo_Grad.jpg", // You can update this path when you upload the actual image
  educationalBackground: [
    {
      degree: "BS Entertainment and Multimedia Computing",
      major: "Major in Game Development",
      level: "Undergraduate",
      icon: "🎮"
    },
    {
      degree: "Master in Information Technology",
      major: "",
      level: "Graduate",
      icon: "🎓"
    }
  ],
  expertise: [
    {
      skill: "Game Development",
      level: 95,
      icon: "🎮",
      description: "Expert in game design, mechanics, and interactive entertainment"
    },
    {
      skill: "Web Development",
      level: 90,
      icon: "🌐",
      description: "Full-stack development and modern web technologies"
    },
    {
      skill: "Animation",
      level: 85,
      icon: "🎬",
      description: "2D/3D animation and multimedia content creation"
    }
  ],
  achievements: [
    {
      title: "Game Development Master",
      description: "Expert in creating engaging interactive experiences",
      icon: "🏆",
      rarity: "legendary"
    },
    {
      title: "Tech Education Leader",
      description: "Inspiring the next generation of digital creators",
      icon: "🎯",
      rarity: "epic"
    },
    {
      title: "Innovation Catalyst",
      description: "Bridging technology and creative expression",
      icon: "⚡",
      rarity: "rare"
    }
  ],
  gamingQuote: "\"Technology is best when it brings people together and empowers creativity.\"",
  teachingPhilosophy: "Combining technical expertise with creative passion to guide students through their digital transformation journey."
};

export const courseExpectations = [
  {
    title: "Academic Excellence",
    description: "Strive for mastery of digital literacy skills and technological proficiency",
    icon: "🎓"
  },
  {
    title: "Digital Ethics",
    description: "Practice responsible and ethical use of technology in all activities",
    icon: "⚖️"
  },
  {
    title: "Innovation & Creativity",
    description: "Develop creative solutions using technology tools and platforms",
    icon: "💡"
  },
  {
    title: "Collaboration",
    description: "Work effectively with peers in digital environments and group projects",
    icon: "🤝"
  },
  {
    title: "Continuous Learning",
    description: "Adapt to emerging technologies and maintain a growth mindset",
    icon: "📈"
  }
];