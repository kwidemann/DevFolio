export type ResumeContactInfoItem = {
  label: string;
  value: string;
  href?: string;
};

export type ResumeSkillGroup = {
  title: string;
  skills: string[];
};

export type ResumeExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export type ResumeEducation = {
  school: string;
  location: string;
  degree: string;
  period: string;
};

export const resumeContactInfo: ResumeContactInfoItem[] = [
  { label: 'Ubicación', value: 'Valdivia, Chile' },
  { label: 'Teléfono', value: '+56 9 737 949 21' },
  { label: 'Email', value: 'kwidemann@gmail.com' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/klaus-widemann-774b9496',
    href: 'https://www.linkedin.com/in/klaus-widemann-774b9496',
  },
  { label: 'GitHub', value: 'github.com/kwidemann', href: 'https://github.com/kwidemann' },
];

export const resumeSummary =
  'Backend Engineer con más de 4 años construyendo y desplegando software de producción. Experiencia en ERP personalizado, automatización de procesos, despliegues Docker y pipelines de GitHub Actions. Enfoque en soluciones escalables, continuidad operativa y resultados medibles.';

export const resumeHighlightItems: string[] = [
  'ERP a medida en producción para escuela de conducción',
  'Despliegues Docker y CI/CD automatizado con GitHub Actions',
  'Infraestructura en Linux, monitoreo y soporte de producción',
];

export const resumeSkillGroups: ResumeSkillGroup[] = [
  {
    title: 'Lenguajes y frameworks',
    skills: ['Python', 'FastAPI', 'Flet', 'LaTeX', 'VBA', 'C# (Basic)'],
  },
  {
    title: 'Infra y DevOps',
    skills: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Cloud VMs', 'Oracle SQL'],
  },
  {
    title: 'Procesos y soporte',
    skills: ['Automatización', 'Reporting', 'Control de procesos', 'Data Validation', 'Workflow Optimization'],
  },
];

export const resumeExperience: ResumeExperienceItem[] = [
  {
    role: 'Backend Engineer / Head of Control & Procedures',
    company: 'Professional Driving School Todo Transporte Ltda.',
    location: 'Valdivia, Chile',
    period: 'May 2020 – September 2024',
    bullets: [
      'Diseñé y desarrollé un ERP personalizado con Python, FastAPI, Oracle SQL y Flet, centralizando administración, reportes y procesos operativos.',
      'Implementé y mantuve pipelines CI/CD con GitHub Actions para builds Docker repetibles en producción.',
      'Automatizé tareas administrativas y operativas, reduciendo tiempos manuales y mejorando la continuidad del negocio.',
      'Administré despliegues Docker en máquinas Linux, backups, correo corporativo y plataformas LMS.',
      'Coordiné con stakeholders para traducir requisitos de negocio en soluciones técnicas efectivas.',
    ],
  },
  {
    role: 'Operational Intern',
    company: 'Entel Ocean',
    location: 'Santiago, Chile',
    period: 'February 2020 – May 2020',
    bullets: [
      'Documenté procesos operativos de postventa y detecté oportunidades de mejora.',
      'Proporcioné análisis para propuestas de optimización y presenté resultados a stakeholders.',
    ],
  },
  {
    role: 'Marketing Intern',
    company: 'HATCH Ingenieros y Consultores Ltda.',
    location: 'Santiago, Chile',
    period: 'January 2018 – February 2018',
    bullets: [
      'Apoyé implementaciones de SAP Cloud for Customers y entrené a usuarios internos.',
      'Desarrollé soluciones VBA para mejorar procesos internos y la eficiencia operativa.',
    ],
  },
];

export const resumeAchievements: string[] = [
  'Implementé un ERP personalizado que permanece en operación activa más de 4 años.',
  'Integré despliegues Docker con GitHub Actions para entregas de producción confiables.',
  'Mejoré la eficiencia operativa mediante automatización y estructuración de datos de negocio.',
];

export const resumeEducation: ResumeEducation = {
  school: 'Universidad Técnica Federico Santa María',
  location: 'Valparaíso, Chile',
  degree: 'Ingeniería Civil Industrial',
  period: '2012 – 2020',
};

export const resumeLanguages: string[] = ['Español: Nativo', 'Inglés: C2 – Fluent', 'Alemán: C1 – Advanced'];

export const resumeIntroHighlights: string[] = [
  '4+ años desarrollando software de producción con Python y FastAPI.',
  'ERP personalizado operativo, con despliegues Docker y GitHub Actions.',
  'Foco en automatización, continuidad operativa y calidad de entrega.',
];
