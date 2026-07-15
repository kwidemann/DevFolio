export interface ProjectRead {
  id: number;
  slug: string;
  title: string;
  short_description: string;
  description: string;
  thumbnail_url: string | null;
  images: string[];
  tech_stack: string[];
  category: string;
  featured: boolean;
  live_url: string | null;
  repo_url: string | null;
  case_study_url: string | null;
  start_date: string | null;
  end_date: string | null;
  is_current: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface ProjectListRead {
  projects: ProjectRead[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}

export interface BlogPostRead {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  tags: string[];
  published: boolean;
  published_at: string | null;
  reading_time: number;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface BlogPostListRead {
  posts: BlogPostRead[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}

export interface SkillRead {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  icon: string | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface ProfileRead {
  id: number;
  name: string;
  title: string;
  tagline: string;
  bio: string;
  short_bio: string;
  avatar_url: string | null;
  email: string;
  location: string | null;
  website: string | null;
  github_url: string | null;
  linkedin_url: string | null;
  twitter_url: string | null;
  cv_url: string | null;
  social_links: Record<string, unknown>[];
  created_at: string;
  updated_at: string;
}

export interface ContactMessageCreate {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactMessageRead {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  created_at: string;
  updated_at: string;
}

export interface HealthCheck {
  status: string;
  timestamp: string;
  version: string;
  environment: string;
}
