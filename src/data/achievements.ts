export type Achievement = {
  id: number
  type: 'Beasiswa' | 'Sertifikat' | 'Kompetisi' | 'Workshop'
  title: string
  issuer: string
  year: string
}

export const achievements: Achievement[] = [
  { id: 1, type: 'Beasiswa', title: 'Beasiswa Prestasi Akademik', issuer: 'Universitas Contoh Indonesia', year: '2024' },
  { id: 2, type: 'Kompetisi', title: 'Finalis Hackathon Nasional', issuer: 'Kemendikbudristek', year: '2025' },
  { id: 3, type: 'Sertifikat', title: 'Front-End Web Developer', issuer: 'Dicoding Indonesia', year: '2024' },
  { id: 4, type: 'Workshop', title: 'UI/UX Design Fundamentals', issuer: 'Google Developer Student Club', year: '2023' },
  { id: 5, type: 'Sertifikat', title: 'JavaScript Algorithms and Data Structures', issuer: 'freeCodeCamp', year: '2023' },
  { id: 6, type: 'Kompetisi', title: 'Juara 2 Lomba UI/UX Design', issuer: 'Universitas Contoh Indonesia', year: '2024' },
]
