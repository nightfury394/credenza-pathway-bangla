export const mockUniversityMatches = [
  {
    id: '1',
    universityName: 'University of Warsaw',
    programTitle: 'Computer Science and Intelligent Systems',
    country: 'Poland',
    city: 'Warsaw',
    tuitionMin: 3000,
    tuitionMax: 4000,
    language: 'English',
    deadline: 'May 31, 2024',
    matchType: 'safe' as const,
    isPartner: true,
    logoUrl: null,
    admissionDifficulty: 3,
    rationale: 'Strong match based on your CGPA and English proficiency. Warsaw offers excellent tech opportunities with affordable living costs.'
  },
  {
    id: '2',
    universityName: 'Technical University of Munich',
    programTitle: 'Data Engineering and Analytics',
    country: 'Germany',
    city: 'Munich',
    tuitionMin: 0,
    tuitionMax: 500,
    language: 'German/English',
    deadline: 'July 15, 2024',
    matchType: 'match' as const,
    isPartner: false,
    logoUrl: null,
    admissionDifficulty: 4,
    rationale: 'Great program alignment with your interests. Consider German language preparation for better integration and scholarship opportunities.'
  },
  {
    id: '3',
    universityName: 'ETH Zurich',
    programTitle: 'Master in Computer Science',
    country: 'Switzerland',
    city: 'Zurich',
    tuitionMin: 1500,
    tuitionMax: 1500,
    language: 'English',
    deadline: 'December 15, 2023',
    matchType: 'dream' as const,
    isPartner: false,
    logoUrl: null,
    admissionDifficulty: 5,
    rationale: 'Highly competitive program at world-renowned institution. Your profile shows potential, but consider strengthening research experience.'
  },
  {
    id: '4',
    universityName: 'University of Amsterdam',
    programTitle: 'Artificial Intelligence',
    country: 'Netherlands',
    city: 'Amsterdam',
    tuitionMin: 2200,
    tuitionMax: 2200,
    language: 'English',
    deadline: 'April 1, 2024',
    matchType: 'match' as const,
    isPartner: true,
    logoUrl: null,
    admissionDifficulty: 4,
    rationale: 'Excellent AI program with strong industry connections. Your background aligns well with admission requirements.'
  },
  {
    id: '5',
    universityName: 'Barcelona Tech',
    programTitle: 'Innovation and Entrepreneurship',
    country: 'Spain',
    city: 'Barcelona',
    tuitionMin: 1800,
    tuitionMax: 2400,
    language: 'English',
    deadline: 'June 30, 2024',
    matchType: 'safe' as const,
    isPartner: true,
    logoUrl: null,
    admissionDifficulty: 2,
    rationale: 'Perfect for combining technology with business skills. Barcelona offers vibrant startup ecosystem and affordable Mediterranean lifestyle.'
  },
  {
    id: '6',
    universityName: 'Politecnico di Milano',
    programTitle: 'Computer Science and Engineering',
    country: 'Italy',
    city: 'Milan',
    tuitionMin: 3900,
    tuitionMax: 3900,
    language: 'English',
    deadline: 'March 31, 2024',
    matchType: 'match' as const,
    isPartner: false,
    logoUrl: null,
    admissionDifficulty: 3,
    rationale: 'Strong engineering program with excellent job prospects in Northern Italy\'s industrial hub. Good match for your technical background.'
  }
];

export const mockProfileSteps = [
  { title: 'Basic Information', completed: true },
  { title: 'Educational Background', completed: true },
  { title: 'English Test Scores', completed: true },
  { title: 'Study Preferences', completed: false },
  { title: 'Budget Planning', completed: false },
  { title: 'Additional Information', completed: false }
];

export const mockNotifications = [
  {
    id: '1',
    type: 'DEADLINE',
    title: 'Application Deadline Approaching',
    body: 'ETH Zurich application deadline is in 5 days',
    read: false,
    createdAt: new Date('2024-01-10')
  },
  {
    id: '2',
    type: 'UPDATE',
    title: 'New Scholarship Available',
    body: 'DAAD scholarship now open for German universities',
    read: false,
    createdAt: new Date('2024-01-09')
  },
  {
    id: '3',
    type: 'TASK',
    title: 'Document Upload Required',
    body: 'Please upload your statement of purpose',
    read: true,
    createdAt: new Date('2024-01-08')
  }
];

export const mockScholarships = [
  {
    id: '1',
    name: 'DAAD Scholarship for German Universities',
    country: 'Germany',
    field: 'Computer Science',
    degreeLevel: 'Masters',
    amountType: 'fixed',
    avgAward: 850,
    eligibility: 'CGPA 3.0+, IELTS 6.5+',
    deadline: new Date('2024-03-31'),
    url: 'https://daad.org'
  },
  {
    id: '2',
    name: 'Erasmus Mundus Joint Masters',
    country: 'EU',
    field: 'Data Science',
    degreeLevel: 'Masters',
    amountType: 'fixed',
    avgAward: 1400,
    eligibility: 'Bachelor degree, English proficiency',
    deadline: new Date('2024-01-15'),
    url: 'https://erasmusplus.org'
  }
];