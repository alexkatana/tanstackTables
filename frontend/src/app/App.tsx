import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../widgets/layout';
import { EntitiesPage } from '../pages/EntitiesPage';
import { EntityEditPage } from '../pages/EntityEditPage';

export const App = () => {
  return (

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<EntitiesPage />} />
            <Route path="/edit" element={<EntityEditPage />} />
            <Route path="/edit/:id" element={<EntityEditPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>

  );
};