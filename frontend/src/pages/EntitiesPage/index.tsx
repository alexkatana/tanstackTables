import { EntityTable } from "../../features/EntityTable/ui/EntityTable"
import styles from "./styles.module.scss"

export const EntitiesPage = () => (
  <div className={styles.page}>
    <h1>Entities List</h1>
    <EntityTable/>
  </div>
);