export interface Visit {
  id: string;
  organizationName: string;
  discipline: string;
  matchScore: 'High' | 'Medium' | 'Low';
  description: string;
  industryType: string;
  location: string;
  about: string;
  learningOutcomes: string[];
}

export const mockVisits: Visit[] = [
  {
    id: '1',
    organizationName: 'TechCorp Innovation Labs',
    discipline: 'Computer Science',
    matchScore: 'High',
    description: 'Explore cutting-edge software development practices, agile methodologies, and enterprise-scale system architecture in a Fortune 500 technology company.',
    industryType: 'Information Technology',
    location: 'Bangalore, Karnataka',
    about: 'TechCorp Innovation Labs is a leading technology research and development facility focused on enterprise software solutions, cloud computing, and artificial intelligence. With over 5,000 engineers, the lab drives innovation in scalable systems and digital transformation.',
    learningOutcomes: [
      'Understand enterprise software development lifecycle and DevOps practices',
      'Learn about scalable cloud architecture and microservices design patterns',
      'Explore real-world applications of machine learning in production systems',
      'Gain insights into collaborative software engineering in large teams',
      'Understand quality assurance and continuous integration processes',
    ],
  },
  {
    id: '2',
    organizationName: 'BioMed Research Institute',
    discipline: 'Biotechnology',
    matchScore: 'High',
    description: 'Experience pharmaceutical research, drug development processes, and biotechnology applications in a state-of-the-art research facility.',
    industryType: 'Healthcare & Pharmaceuticals',
    location: 'Hyderabad, Telangana',
    about: 'BioMed Research Institute is a premier pharmaceutical research organization specializing in drug discovery, clinical trials, and biotechnology innovation. The institute collaborates with global healthcare organizations to develop life-saving treatments.',
    learningOutcomes: [
      'Understand the drug discovery and development pipeline',
      'Learn about clinical trial design and regulatory compliance',
      'Explore biotechnology applications in modern medicine',
      'Gain knowledge of laboratory safety and research ethics',
      'Understand quality control in pharmaceutical manufacturing',
    ],
  },
  {
    id: '3',
    organizationName: 'GreenEnergy Solutions',
    discipline: 'Electrical Engineering',
    matchScore: 'Medium',
    description: 'Discover renewable energy systems, smart grid technologies, and sustainable power generation methods in an innovative clean energy company.',
    industryType: 'Renewable Energy',
    location: 'Pune, Maharashtra',
    about: 'GreenEnergy Solutions is a pioneering renewable energy company specializing in solar power systems, wind energy, and smart grid technologies. The organization is committed to sustainable energy solutions and reducing carbon footprint.',
    learningOutcomes: [
      'Understand renewable energy generation technologies',
      'Learn about smart grid systems and energy management',
      'Explore power electronics and energy storage solutions',
      'Gain insights into sustainable engineering practices',
      'Understand energy policy and environmental impact assessment',
    ],
  },
  {
    id: '4',
    organizationName: 'AutoTech Manufacturing',
    discipline: 'Mechanical Engineering',
    matchScore: 'High',
    description: 'Experience automotive design, manufacturing processes, and quality control systems in a modern automobile production facility.',
    industryType: 'Automotive Manufacturing',
    location: 'Chennai, Tamil Nadu',
    about: 'AutoTech Manufacturing is a leading automobile manufacturer with state-of-the-art production facilities. The company produces electric and hybrid vehicles, focusing on innovation, safety, and sustainable manufacturing practices.',
    learningOutcomes: [
      'Understand automotive design and engineering principles',
      'Learn about modern manufacturing processes and automation',
      'Explore quality control and testing procedures in production',
      'Gain knowledge of electric vehicle technology',
      'Understand supply chain management in manufacturing',
    ],
  },
  {
    id: '5',
    organizationName: 'DataViz Analytics',
    discipline: 'Data Science',
    matchScore: 'High',
    description: 'Learn data analytics, business intelligence, and predictive modeling techniques used to solve real-world business challenges.',
    industryType: 'Business Analytics',
    location: 'Mumbai, Maharashtra',
    about: 'DataViz Analytics is a data science consultancy firm specializing in business intelligence, predictive analytics, and data-driven decision making. The firm works with Fortune 500 companies to extract insights from complex datasets.',
    learningOutcomes: [
      'Understand data collection, cleaning, and preprocessing techniques',
      'Learn statistical analysis and predictive modeling methods',
      'Explore data visualization and business intelligence tools',
      'Gain insights into machine learning model deployment',
      'Understand ethical considerations in data science',
    ],
  },
  {
    id: '6',
    organizationName: 'CivilTech Infrastructure',
    discipline: 'Civil Engineering',
    matchScore: 'Medium',
    description: 'Examine large-scale infrastructure projects, construction management, and sustainable building practices in urban development.',
    industryType: 'Construction & Infrastructure',
    location: 'Delhi NCR',
    about: 'CivilTech Infrastructure is a major infrastructure development company specializing in highways, bridges, and urban development projects. The company employs modern construction technologies and sustainable building practices.',
    learningOutcomes: [
      'Understand project planning and construction management',
      'Learn about structural design and safety standards',
      'Explore sustainable building materials and techniques',
      'Gain knowledge of surveying and geotechnical engineering',
      'Understand regulatory compliance and quality assurance',
    ],
  },
];
