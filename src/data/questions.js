export const assessmentQuestions = [
  {
    id: 1,
    category: "Introduction to ICT",
    question: "What does ICT stand for?",
    options: [
      "Internet Communication Technology",
      "Information Communication Technology",
      "Integrated Computer Technology",
      "Interactive Communication Tools"
    ],
    correct: 1
  },
  {
    id: 2,
    category: "Introduction to ICT",
    question: "Which of the following is NOT a component of ICT?",
    options: ["Hardware", "Software", "Data", "Furniture"],
    correct: 3
  },
  {
    id: 3,
    category: "Introduction to ICT",
    question: "What is the primary purpose of ICT in education?",
    options: [
      "To replace teachers",
      "To enhance teaching and learning processes",
      "To eliminate textbooks",
      "To reduce school costs"
    ],
    correct: 1
  },
  {
    id: 4,
    category: "Introduction to ICT",
    question: "Which device is considered an input device?",
    options: ["Monitor", "Printer", "Keyboard", "Speaker"],
    correct: 2
  },
  {
    id: 5,
    category: "Introduction to ICT",
    question: "What type of network covers a small geographical area like a school or office building?",
    options: [
      "WAN (Wide Area Network)",
      "LAN (Local Area Network)",
      "MAN (Metropolitan Area Network)",
      "PAN (Personal Area Network)"
    ],
    correct: 1
  },
  {
    id: 6,
    category: "Introduction to ICT",
    question: "Which of the following is an example of system software?",
    options: [
      "Microsoft Word",
      "Google Chrome",
      "Windows Operating System",
      "Adobe Photoshop"
    ],
    correct: 2
  },
  {
    id: 7,
    category: "Introduction to ICT",
    question: "What does \"digital divide\" refer to?",
    options: [
      "A mathematical operation in computers",
      "The gap between those who have access to ICT and those who don't",
      "A type of computer virus",
      "A method of data storage"
    ],
    correct: 1
  },
  {
    id: 8,
    category: "Ethics on the Internet",
    question: "What is digital citizenship?",
    options: [
      "Having an online passport",
      "Responsible and ethical use of technology and the internet",
      "Being a citizen of a digital country",
      "Owning multiple digital devices"
    ],
    correct: 1
  },
  {
    id: 9,
    category: "Ethics on the Internet",
    question: "Which practice helps protect your online privacy?",
    options: [
      "Sharing passwords with friends",
      "Using the same password for all accounts",
      "Using strong, unique passwords for different accounts",
      "Posting personal information publicly"
    ],
    correct: 2
  },
  {
    id: 10,
    category: "Ethics on the Internet",
    question: "What is cyberbullying?",
    options: [
      "Physical bullying in schools",
      "Harassment or intimidation using digital technology",
      "A type of computer game",
      "A cybersecurity threat"
    ],
    correct: 1
  },
  {
    id: 11,
    category: "Ethics on the Internet",
    question: "Which action violates copyright laws?",
    options: [
      "Citing sources in your research",
      "Using images with Creative Commons license",
      "Downloading and sharing copyrighted movies without permission",
      "Creating original content"
    ],
    correct: 2
  },
  {
    id: 12,
    category: "Ethics on the Internet",
    question: "What is a digital footprint?",
    options: [
      "A type of computer virus",
      "The trail of data you leave when using the internet",
      "A method of online payment",
      "A social media platform"
    ],
    correct: 1
  },
  {
    id: 13,
    category: "Ethics on the Internet",
    question: "Which is the best practice for email security?",
    options: [
      "Opening all email attachments",
      "Clicking on links from unknown senders",
      "Verifying sender identity before clicking suspicious links",
      "Sharing email passwords with colleagues"
    ],
    correct: 2
  },
  {
    id: 14,
    category: "Ethics on the Internet",
    question: "What should you do if you encounter inappropriate content online?",
    options: [
      "Share it with friends",
      "Report it to appropriate authorities or platform moderators",
      "Ignore it completely",
      "Download it for evidence"
    ],
    correct: 1
  },
  {
    id: 15,
    category: "Advanced Spreadsheet Skills",
    question: "Which function would you use to find the average of a range of cells in a spreadsheet?",
    options: ["=SUM()", "=AVERAGE()", "=COUNT()", "=MAX()"],
    correct: 1
  },
  {
    id: 16,
    category: "Advanced Spreadsheet Skills",
    question: "What is a pivot table used for?",
    options: [
      "Creating charts only",
      "Summarizing and analyzing large amounts of data",
      "Formatting text",
      "Creating formulas"
    ],
    correct: 1
  },
  {
    id: 17,
    category: "Advanced Spreadsheet Skills",
    question: "Which feature allows you to automatically fill a series of data (like dates or numbers) in adjacent cells?",
    options: ["AutoSum", "AutoFill", "AutoFormat", "AutoFilter"],
    correct: 1
  },
  {
    id: 18,
    category: "Advanced Spreadsheet Skills",
    question: "What does the VLOOKUP function do?",
    options: [
      "Counts the number of cells in a column",
      "Searches for a value in the first column and returns a corresponding value from another column",
      "Calculates the total of selected cells",
      "Changes text to uppercase"
    ],
    correct: 1
  },
  {
    id: 19,
    category: "Advanced Spreadsheet Skills",
    question: "Which feature would you use to highlight cells that meet specific criteria (like values above 90)?",
    options: [
      "Data Validation",
      "Conditional Formatting",
      "Cell Protection",
      "AutoFilter"
    ],
    correct: 1
  },
  {
    id: 20,
    category: "Advanced Spreadsheet Skills",
    question: "What is the purpose of data validation in spreadsheets?",
    options: [
      "To format cells automatically",
      "To control the type of data that can be entered in specific cells",
      "To create charts and graphs",
      "To calculate mathematical formulas"
    ],
    correct: 1
  }
];

export const timerOptions = [
  { value: 0, label: "No Timer" },
  { value: 30, label: "30 seconds per question" },
  { value: 60, label: "1 minute per question" },
  { value: 90, label: "1.5 minutes per question" },
  { value: 120, label: "2 minutes per question" },
  { value: 180, label: "3 minutes per question" },
  { value: 300, label: "5 minutes per question" }
];