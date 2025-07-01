import type { Entity } from '../../../entities/entity/model/types';
export interface TableColumn {
  id: keyof Entity | string;
  header: string;
  accessor?: (row: Entity) => React.ReactNode;
  width?: number | string;
  sortable?: boolean;
}

export type TableColumns = TableColumn[];