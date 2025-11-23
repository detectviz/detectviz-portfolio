export interface Project {
  id: string;
  title: string;
  description: string;
  content: string;
  images: string[];
  repo?: string;
  site?: string;
  technologies: { name: string; icon: string }[];
  display: boolean;
  category: string;
  links?: { url: string; name: string }[];
}
