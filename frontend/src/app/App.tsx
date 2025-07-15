import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from '../widgets/Layout/ui/Layout';
import { EntitiesPage } from '../pages/EntitiesPage';
import { EntityEditPage } from '../pages/EntityEditPage';

export const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<EntitiesPage />} />
          <Route path="/edit" element={<EntityEditPage />} />
          <Route path="/edit/:id" element={<EntityEditPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};