import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EntitiesPage } from '../pages/EntitiesPage';
import { EntityEditPage } from '../pages/EntityEditPage';

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