'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getProjects,
  getProjectBySlug,
  getBlogPosts,
  getBlogPostBySlug,
  getBlogTags,
  getSkills,
  getSkillCategories,
  getProjectCategories,
  profile,
  submitContactMessage,
} from '@/data/content';
import type {
  ProjectRead,
  ProjectListRead,
  BlogPostRead,
  BlogPostListRead,
  SkillRead,
  ProfileRead,
  ContactMessageCreate,
  ContactMessageRead,
  HealthCheck,
} from '@/types';

export function useProjects(params?: { featured?: boolean; category?: string; page?: number; page_size?: number }) {
  return useQuery<ProjectListRead>({
    queryKey: ['projects', params],
    queryFn: () => Promise.resolve(getProjects(params)),
    staleTime: 1000 * 60 * 5,
  });
}

export function useFeaturedProjects(limit: number = 6) {
  return useQuery<ProjectRead[]>({
    queryKey: ['projects', 'featured', limit],
    queryFn: () => Promise.resolve(getProjects({ featured: true }).projects.slice(0, limit)),
    staleTime: 1000 * 60 * 10,
  });
}

export function useProject(slug: string) {
  return useQuery<ProjectRead | null>({
    queryKey: ['projects', slug],
    queryFn: () => Promise.resolve(getProjectBySlug(slug)),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Omit<ProjectRead, 'id' | 'created_at' | 'updated_at'>) =>
      Promise.resolve({
        ...data,
        id: Date.now(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      } as ProjectRead),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
}

export function useUpdateProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ slug, data }: { slug: string; data: Partial<ProjectRead> }) =>
      Promise.resolve({ slug, ...data } as ProjectRead),
    onSuccess: (_, { slug }) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['projects', slug] });
    },
  });
}

export function useDeleteProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (slug: string) => Promise.resolve(slug),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
}

export function useBlogPosts(params?: { page?: number; page_size?: number; tag?: string }) {
  return useQuery<BlogPostListRead>({
    queryKey: ['blog', params],
    queryFn: () => Promise.resolve(getBlogPosts(params)),
    staleTime: 1000 * 60 * 5,
  });
}

export function useBlogTags() {
  return useQuery<string[]>({
    queryKey: ['blog', 'tags'],
    queryFn: () => Promise.resolve(getBlogTags()),
    staleTime: 1000 * 60 * 30,
  });
}

export function useBlogPost(slug: string) {
  return useQuery<BlogPostRead | null>({
    queryKey: ['blog', slug],
    queryFn: () => Promise.resolve(getBlogPostBySlug(slug)),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateBlogPost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Omit<BlogPostRead, 'id' | 'created_at' | 'updated_at'>) =>
      Promise.resolve({
        ...data,
        id: Date.now(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      } as BlogPostRead),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog'] });
    },
  });
}

export function useUpdateBlogPost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ slug, data }: { slug: string; data: Partial<BlogPostRead> }) =>
      Promise.resolve({ slug, ...data } as BlogPostRead),
    onSuccess: (_, { slug }) => {
      queryClient.invalidateQueries({ queryKey: ['blog'] });
      queryClient.invalidateQueries({ queryKey: ['blog', slug] });
    },
  });
}

export function useDeleteBlogPost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (slug: string) => Promise.resolve(slug),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog'] });
    },
  });
}

export function useSkills(params?: { category?: string }) {
  return useQuery<SkillRead[]>({
    queryKey: ['skills', params],
    queryFn: () => Promise.resolve(getSkills(params)),
    staleTime: 1000 * 60 * 10,
  });
}

export function useSkillCategories() {
  return useQuery<string[]>({
    queryKey: ['skills', 'categories'],
    queryFn: () => Promise.resolve(getSkillCategories()),
    staleTime: 1000 * 60 * 30,
  });
}

export function useSkillsGrouped(featured_only: boolean = false) {
  return useQuery<Record<string, SkillRead[]>>({
    queryKey: ['skills', 'grouped', featured_only],
    queryFn: () => {
      const items = getSkills();
      const grouped = items.reduce((acc: Record<string, SkillRead[]>, skill) => {
        const category = skill.category || 'other';
        if (!acc[category]) acc[category] = [];
        acc[category].push(skill);
        return acc;
      }, {});
      return Promise.resolve(grouped);
    },
    staleTime: 1000 * 60 * 10,
  });
}

export function useProfile() {
  return useQuery<ProfileRead>({
    queryKey: ['profile'],
    queryFn: () => Promise.resolve(profile),
    staleTime: 1000 * 60 * 30,
  });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<ProfileRead>) => Promise.resolve({ ...profile, ...data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
}

export function useContactForm() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ContactMessageCreate) => submitContactMessage(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact'] });
    },
  });
}

export function useContactMessages() {
  return useQuery<ContactMessageRead[]>({
    queryKey: ['contact'],
    queryFn: () => Promise.resolve([]),
    staleTime: 1000 * 60 * 5,
  });
}

export function useHealthCheck() {
  return useQuery<HealthCheck>({
    queryKey: ['health'],
    queryFn: () =>
      Promise.resolve({
        status: 'ok',
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        environment: 'local',
      }),
    staleTime: 1000 * 60,
    refetchInterval: 1000 * 60 * 5,
  });
}

export function useProjectCategories() {
  return useQuery<string[]>({
    queryKey: ['projects', 'categories'],
    queryFn: () => Promise.resolve(getProjectCategories()),
    staleTime: 1000 * 60 * 30,
  });
}