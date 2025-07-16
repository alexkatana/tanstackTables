import React, { useState, useEffect } from 'react';
import { ConfigProvider, theme } from 'antd';
import { ThemeContext } from './ThemeContext';

const { darkAlgorithm, defaultAlgorithm } = theme;

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(prev => !prev);

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#141414' : '#f5f5f5';
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ConfigProvider
        theme={{
          algorithm: isDark ? darkAlgorithm : defaultAlgorithm,
          token: {
            colorPrimary: '#7e22ce',
          },
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};