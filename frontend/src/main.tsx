import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from './app/App';
import './app/styles/index.scss';
import 'antd/dist/reset.css';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
// вот тут у меня сломался проект, я думал, почему  у меня не рендерятся компоненты, а потом спуся два часа я просто переустановил зависимости и все заработало
// я не знаю плакать мне или смеяться