const API_URL = 'https://portfolio-backend-26natnwde-nana-106f.vercel.app/api';

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  shortBio: string;
  aboutBio: string;
  university: string;
  semester: string;
  interest: string;
  projectsCount: number;
  yearsLearning: number;
  techCount: number;
  photoUrl: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  order: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  descriptionId?: string;
  descriptionEn?: string;
  technologies: string;
  imageUrl?: string;
  category: string;
  status: string;
  year: number;
  featured: boolean;
  order: number;
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  title: string;
  titleId?: string;
  titleEn?: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: string;
  descriptionId?: string;
  descriptionEn?: string;
  order: number;
}

export interface Achievement {
  id: string;
  title: string;
  titleId?: string;
  titleEn?: string;
  description: string;
  descriptionId?: string;
  descriptionEn?: string;
  issuer: string;
  issueDate: string;
  imageUrl?: string;
  order: number;
}

export interface TechStack {
  id: string;
  name: string;
  category: string;
  imageUrl?: string;
  order: number;
}

export interface Contact {
  email: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  whatsapp?: string;
  cv?: string;
}

class ApiClient {
  private async request<T>(url: string, options?: RequestInit): Promise<T> {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`Failed to fetch ${url}`);
    const json = await res.json();
    // Backend wraps response in { success, data, message }
    return json.data || json;
  }

  async getProfile(): Promise<Profile> {
    return this.request(`${API_URL}/profile`);
  }

  async getSkills(): Promise<Skill[]> {
    return this.request(`${API_URL}/skills`);
  }

  async getProjects(): Promise<Project[]> {
    return this.request(`${API_URL}/projects`);
  }

  async getExperience(): Promise<Experience[]> {
    return this.request(`${API_URL}/experiences`);
  }

  async getAchievements(): Promise<Achievement[]> {
    return this.request(`${API_URL}/achievements`);
  }

  async getTechStack(): Promise<TechStack[]> {
    return this.request(`${API_URL}/tech-stack`);
  }

  async getContact(): Promise<Contact> {
    return this.request(`${API_URL}/contacts`);
  }

  async submitMessage(data: {
    name: string;
    email: string;
    subject?: string;
    content: string;
  }): Promise<{ success: boolean }> {
    return this.request(`${API_URL}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject || '',
        content: data.content,
      }),
    });
  }
}

// Helper function to get content in specific language
export function getLocalizedContent(obj: any, field: string, language: 'id' | 'en'): string {
  if (!obj) return '';
  if (language === 'id') {
    return obj[`${field}Id`] || obj[field] || '';
  } else {
    return obj[`${field}En`] || obj[field] || '';
  }
}

export const api = new ApiClient();
