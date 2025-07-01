export interface Entity {
  id: number;
  name: string;
  description?: string;
  status: 'active' | 'pending' | 'inactive';
  createdAt: string;
  updatedAt?: string;
}

export type EntityFormValues = Omit<Entity, 'id' | 'createdAt' | 'updatedAt'>;

export interface EntitiesResponse {
  data: Entity[];
  total: number;
  page?: number;
  pageSize?: number;
}

export interface EntitiesQueryParams {
  page?: number;
  pageSize?: number;
  search?: string;
  status?: Entity['status'];
}

export interface EntityFormErrors {
  name?: string;
  description?: string;
  status?: string;
}