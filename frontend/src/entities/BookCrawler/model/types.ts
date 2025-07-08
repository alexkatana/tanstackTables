export type Entity = {
  id: number;
  name: string;
  description?: string;
  status: 'active' | 'pending' | 'inactive';
  createdAt: string;
  updatedAt?: string;
};

export type EntityFormValues = Omit<Entity, 'id' | 'createdAt' | 'updatedAt'>;

export type EntitiesResponse = {
  data: Entity[];
  total: number;
  page?: number;
  pageSize?: number;
};

export type EntitiesQueryParams = {
  page?: number;
  pageSize?: number;
  search?: string;
  status?: Entity['status'];
};

export type EntityFormErrors = {
  name?: string;
  description?: string;
  status?: string;
};