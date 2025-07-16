import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Content } from './Content';

export const AppLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header />
        <Content>
          {children || <Outlet />}
        </Content>
      </Layout>
    </Layout>
  );
};