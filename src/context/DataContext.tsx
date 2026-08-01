import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { api, Profile, Skill, Project, Experience, Achievement, TechStack, Contact } from '../services/api';

interface DataContextType {
  profile: Profile | null;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  achievements: Achievement[];
  techStack: TechStack[];
  contact: Contact | null;
  loading: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DataContextType>({
    profile: null,
    skills: [],
    projects: [],
    experience: [],
    achievements: [],
    techStack: [],
    contact: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const [profile, skills, projects, experience, achievements, techStack, contact] = await Promise.all([
          api.getProfile(),
          api.getSkills(),
          api.getProjects(),
          api.getExperience(),
          api.getAchievements(),
          api.getTechStack(),
          api.getContact(),
        ]);

        setData({
          profile,
          skills: skills.sort((a, b) => a.order - b.order),
          projects: projects.sort((a, b) => a.order - b.order),
          experience: experience.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()),
          achievements: achievements.sort((a, b) => a.order - b.order),
          techStack: techStack.sort((a, b) => a.order - b.order),
          contact,
          loading: false,
          error: null,
        });
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Failed to fetch data';
        console.error('Data fetch error:', err);
        setData((prev) => ({
          ...prev,
          loading: false,
          error: errorMsg,
        }));
      }
    }

    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within DataProvider');
  }
  return context;
}
