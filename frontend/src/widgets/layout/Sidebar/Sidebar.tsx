import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, EditOutlined } from '@ant-design/icons';
import { useTheme } from '../../../app/providers/ThemeProvider';
import styles from './styles.module.scss';

const { Sider } = Layout;

export const Sidebar = () => {
  const { isDark } = useTheme();

  return (
    <Sider
      width={200}
      className={styles.sider}
      style={{
        boxShadow: isDark ? '2px 0 8px rgba(0, 0, 0, 0.45)' : '2px 0 8px rgba(0, 0, 0, 0.15)'
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
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
    </Sider>
  );
};