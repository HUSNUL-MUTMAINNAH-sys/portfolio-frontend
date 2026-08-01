export type Skill = { name: string; level: number }
export type SkillGroup = { category: string; items: Skill[] }

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', level: 92 },
      { name: 'CSS', level: 88 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 78 },
      { name: 'React', level: 82 },
      { name: 'Tailwind CSS', level: 86 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 75 },
      { name: 'REST API', level: 78 },
      { name: 'JWT', level: 70 },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MySQL', level: 74 },
      { name: 'PostgreSQL', level: 66 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 84 },
      { name: 'GitHub', level: 84 },
      { name: 'Figma', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Postman', level: 76 },
    ],
  },
]
