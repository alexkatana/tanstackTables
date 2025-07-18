import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EntitiesPage } from '../pages/EntitiesPage/index.ts';
import { EntityEditPage } from '../pages/EntityEditPage/index.ts'; // ../pages/EntityEditPage
// import { EntityEditPage } from '@/pages/EntityEditPage';
// первая попытка - не работает через алиас, пошел делать вторую попытку
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntitiesPage />} />
        <Route path="/edit/:id" element={<EntityEditPage />} />
        <Route path="/create" element={<EntityEditPage />} />
      </Routes>
    </BrowserRouter>
  );
};