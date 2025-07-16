import { Layout } from 'antd';
import { ThemeToggle } from '../ThemeToggle';
import styles from './styles.module.scss';

const { Header: AntHeader } = Layout;

export const LayoutHeader = () => (
  <AntHeader className={styles.header}>
    <h1 className={styles.title}>EntityTable</h1>
    <ThemeToggle />
  </AntHeader>
);