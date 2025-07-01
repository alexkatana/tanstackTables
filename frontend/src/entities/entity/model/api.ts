import { apiClient } from '../../../shared/api/client';
import { useQuery } from '@tanstack/react-query';
import type { Entity } from './types';

export const useEntity = (id?: number) => {
  return useQuery({
    queryKey: ['entity', id],
    queryFn: async () => {
      const response = await apiClient.get<Entity>(`/entities/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

export const useEntities = () => {
  return useQuery({
    queryKey: ['entities'],
    queryFn: async () => {
      const response = await apiClient.get<{ data: Entity[] }>('/entities');
      return response.data;
    },
  });
};