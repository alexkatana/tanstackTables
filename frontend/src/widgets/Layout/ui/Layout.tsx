import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { HomeOutlined, EditOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useTheme } from '../../../app/providers/ThemeProvider';

const { Header, Sider, Content } = Layout;

export const AppLayout = ({ children }: { children?: React.ReactNode }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width={200}
        style={{
          background: '#7e22ce',
          boxShadow: isDark ? '2px 0 8px rgba(0, 0, 0, 0.45)' : '2px 0 8px rgba(0, 0, 0, 0.15)'
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{
            height: '100%',
            borderRight: 0,
            background: 'transparent',
            color: 'white'
          }}
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
      <Layout>
        <Header style={{
          padding: '0 24px',
          background: '#7e22ce',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: isDark ? '0 2px 8px rgba(0, 0, 0, 0.45)' : '0 2px 8px rgba(0, 0, 0, 0.15)'
        }}>
          <h1 style={{
            color: 'white',
            margin: 0,
            fontSize: '20px',
            fontWeight: 500
          }}>
            EntityTable
          </h1>
          <Button
            type="text"
            icon={isDark ? <SunOutlined /> : <MoonOutlined />}
            onClick={toggleTheme}
            style={{
              color: 'white',
              fontSize: '16px',
              width: '48px',
              height: '48px'
            }}
          />
        </Header>
        <Content style={{
          margin: '24px',
          padding: isDark ? '24px' : '24px',
          background: isDark ? '#141414' : '#fff',
          borderRadius: '8px',
          boxShadow: isDark ? '0 2px 8px rgba(0, 0, 0, 0.45)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
          minHeight: 'calc(100vh - 112px)'
        }}>
          {children || <Outlet />}
        </Content>
      </Layout>
    </Layout>
  );
};