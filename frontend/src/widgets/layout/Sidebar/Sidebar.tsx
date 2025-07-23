import { Layout, Menu, Button, Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeOutlined, 
  EditOutlined,
  LeftOutlined,
  RightOutlined 
} from '@ant-design/icons';
import styles from './styles.module.scss';
import { useState } from 'react';

const { Sider } = Layout;
const { Title } = Typography;

export const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const selectedKey = location.pathname === "/edit" ? "2" : "1";

  const handleCollapse = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCollapsed(!collapsed);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <Sider
      width={200}
      className={styles.sider}
      collapsible
      collapsed={collapsed}
      trigger={null}
    >
      <div className={styles.logoContainer}>
        {!collapsed ? (
          <div className={styles.logo}>
            <Title level={3} className={styles.logoText}>ET</Title>
            <span className={styles.logoSubtext}>EntityTable</span>
          </div>
        ) : (
          <Title level={3} className={styles.collapsedLogo}>ET</Title>
        )}
      </div>

      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        className={styles.menu}
        items={[
          {
            key: '1',
            label: <Link to="/" className={styles.menuLink}>Главная</Link>,
            icon: <HomeOutlined />,
          },
          {
            key: '2',
            label: <Link to="/edit" className={styles.menuLink}>Редактировать</Link>,
            icon: <EditOutlined />,
          },
        ]}
      />

      <div className={styles.collapseButtonWrapper}>
        <Button
          type="text"
          icon={collapsed ? 
            <RightOutlined className={`${styles.collapseIcon} ${isAnimating ? styles.rotate : ''}`} /> : 
            <LeftOutlined className={`${styles.collapseIcon} ${isAnimating ? styles.rotate : ''}`} />
          }
          onClick={handleCollapse}
          className={styles.collapseButton}
        />
      </div>
    </Sider>
  );
};