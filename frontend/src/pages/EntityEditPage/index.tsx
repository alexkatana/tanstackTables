import { useParams } from 'react-router-dom';
import { Button } from 'antd'; 
import { useNavigate } from 'react-router-dom';
import { EntityForm } from '../../features/EntityForm/ui/EntityForm';
import { useEntity } from '../../entities/entity/model/api';
import styles from './styles.module.scss';

export const EntityEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: entity, isLoading } = useEntity(id ? Number(id) : undefined);
  
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className={styles.page}>
      <Button onClick={() => navigate(-1)} style={{ marginBottom: 16 }}>
        ← Back to list
      </Button>
      <h1>{id ? 'Edit Entity' : 'Create Entity'}</h1>
      <EntityForm entity={entity} />
    </div>
  );
};