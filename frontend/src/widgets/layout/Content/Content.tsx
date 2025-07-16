import React from 'react';
import { Layout } from 'antd';
import { useTheme } from '../../../app/providers/ThemeProvider/index.ts';
import styles from './styles.module.scss';

const { Content: AntContent } = Layout;

export const LayoutContent = ({ children }: { children?: React.ReactNode }) => {
  const { isDark } = useTheme();

  return (
    <AntContent 
      className={styles.content}
      style={{
        background: isDark ? '#141414' : '#fff',
        boxShadow: isDark ? '0 2px 8px rgba(0, 0, 0, 0.45)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </AntContent>
  );
};