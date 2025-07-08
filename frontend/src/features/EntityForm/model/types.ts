import type { Entity } from '../../../entities/BookCrawler/model/types';
export type EntityFormValues =Omit<Entity,'id'|'createdAt'>;
export interface EntityFormProps {
  initialValues?:Partial<EntityFormValues>;
  onSubmit: (values: EntityFormValues) => Promise<void>;
}