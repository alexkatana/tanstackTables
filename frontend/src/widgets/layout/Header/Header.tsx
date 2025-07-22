import { Layout, Button } from 'antd';
import { ThemeToggle } from '../ThemeToggle';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const { Header: AntHeader } = Layout;

export const LayoutHeader = () => {
  const navigate = useNavigate();

  return (
    <AntHeader className={styles.header}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Button 
          type="text" 
          icon={<ArrowLeftOutlined />} 
          onClick={() => navigate("/")}  
          className={styles.backButton}
        />
        <h1 className={styles.title}>EntityTable app by Alex</h1>
      </div>
      <ThemeToggle />
    </AntHeader>
  );
};