export type Project = {
  id: number
  name: string
  description: string
  tech: string[]
  year: string
  status: 'Selesai' | 'Berjalan' | 'Riset'
  category: 'Web' | 'Mobile' | 'Research' | 'UI/UX'
  thumbnail: string
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'LaundryKu',
    description:
      'Sistem manajemen laundry berbasis web untuk mencatat pesanan, status cucian, dan pembayaran pelanggan secara real-time.',
    tech: ['React', 'Node.js', 'MySQL', 'Tailwind CSS'],
    year: '2025',
    status: 'Selesai',
    category: 'Web',
    thumbnail: '/projects/laundryku.svg',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    name: 'Todo App',
    description:
      'Aplikasi manajemen tugas dengan autentikasi JWT, drag-and-drop task board, dan sinkronisasi data antar perangkat.',
    tech: ['React', 'TypeScript', 'Express', 'JWT'],
    year: '2025',
    status: 'Selesai',
    category: 'Web',
    thumbnail: '/projects/todoapp.svg',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    name: 'Portfolio CMS',
    description:
      'Website portofolio dengan dashboard admin untuk mengelola profil, proyek, dan sertifikat tanpa menyentuh kode.',
    tech: ['React', 'Express', 'JWT', 'PostgreSQL'],
    year: '2026',
    status: 'Berjalan',
    category: 'Web',
    thumbnail: '/projects/portfolio.svg',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 4,
    name: 'Analisis Kepuasan Pengguna Aplikasi Kampus',
    description:
      'Penelitian kuantitatif menggunakan metode UEQ untuk mengevaluasi pengalaman pengguna sistem akademik kampus.',
    tech: ['SPSS', 'Google Forms', 'UEQ'],
    year: '2024',
    status: 'Selesai',
    category: 'Research',
    thumbnail: '/projects/research.svg',
  },
  {
    id: 5,
    name: 'Redesign UI Aplikasi Perpustakaan',
    description:
      'Perancangan ulang antarmuka aplikasi perpustakaan digital kampus dengan pendekatan design thinking dan usability testing.',
    tech: ['Figma', 'Design Thinking'],
    year: '2024',
    status: 'Selesai',
    category: 'UI/UX',
    thumbnail: '/projects/library-ui.svg',
    demoUrl: '#',
  },
  {
    id: 6,
    name: 'Catatan Keuangan Mahasiswa',
    description:
      'Aplikasi mobile pencatat pengeluaran harian mahasiswa dengan ringkasan visual dan target menabung mingguan.',
    tech: ['React Native', 'Firebase'],
    year: '2023',
    status: 'Selesai',
    category: 'Mobile',
    thumbnail: '/projects/finance-app.svg',
    githubUrl: '#',
  },
]
