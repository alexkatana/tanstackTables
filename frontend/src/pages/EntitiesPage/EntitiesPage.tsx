import { EntityTable } from "../../entities/EntityTable/index.ts";
import styles from "./styles.module.scss"

export const EntitiesPage = () => (
  <div className={styles.page}>
    <h1>Таблица сущностей</h1>
    <EntityTable/>
  </div>
);