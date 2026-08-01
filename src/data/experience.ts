export type ExperienceItem = {
  id: number
  type: 'Pendidikan' | 'Organisasi' | 'Pelatihan' | 'Sertifikat' | 'Magang'
  title: string
  place: string
  period: string
  description: string
}

export const experience: ExperienceItem[] = [
  {
    id: 1,
    type: 'Pendidikan',
    title: 'S1 Sistem Informasi',
    place: 'Universitas Contoh Indonesia',
    period: '2022 — Sekarang',
    description: 'Fokus pada pengembangan perangkat lunak, basis data, dan interaksi manusia-komputer.',
  },
  {
    id: 2,
    type: 'Magang',
    title: 'Frontend Developer Intern',
    place: 'PT Teknologi Contoh',
    period: 'Jun 2025 — Agu 2025',
    description: 'Membangun komponen UI reusable dengan React dan Tailwind untuk dashboard internal perusahaan.',
  },
  {
    id: 3,
    type: 'Organisasi',
    title: 'Koordinator Divisi Teknologi',
    place: 'Himpunan Mahasiswa Sistem Informasi',
    period: '2024 — 2025',
    description: 'Mengelola tim pengembang untuk membangun dan memelihara situs resmi himpunan.',
  },
  {
    id: 4,
    type: 'Pelatihan',
    title: 'Bootcamp Full-Stack Web Development',
    place: 'Dicoding Indonesia',
    period: '2024',
    description: 'Pelatihan intensif pengembangan aplikasi web full-stack menggunakan JavaScript modern.',
  },
]
