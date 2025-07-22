import { Layout, Menu, Button, Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, EditOutlined, MenuFoldOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';
import { useState } from 'react';

const { Sider } = Layout;
const { Title } = Typography;

export const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const selectedKey = location.pathname === "/edit" ? "2" : "1";

  return (
    <Sider
      width={200}
      className={styles.sider}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
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
            label: <Link to="/">Главная</Link>,
            icon: <HomeOutlined />,
          },
          {
            key: '2',
            label: <Link to="/edit">Редактировать</Link>,
            icon: <EditOutlined />,
          },
        ]}
      />

      <div className={styles.collapseButtonWrapper}>
        <Button
          type="text"
          icon={<MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className={styles.collapseButton}
        >
          {!collapsed && 'Свернуть'}
        </Button>
      </div>
    </Sider>
  );
};