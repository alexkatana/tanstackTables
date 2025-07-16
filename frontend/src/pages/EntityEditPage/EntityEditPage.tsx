import { useParams } from 'react-router-dom';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { EntityForm } from '../../entities/EntityForm/index';
import { useEntity } from '../../entities/BookCrawler/model/api';
import { ArrowLeftOutlined } from '@ant-design/icons'; 
import { Tooltip } from 'antd';
import styles from './styles.module.scss';

export const EntityEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: entity, isLoading } = useEntity(id ? Number(id) : undefined);
  
  if (isLoading) return <div>Загрузка</div>;
  return (
    <div className={styles.page}>
      <Tooltip title = "Back To List"></Tooltip> 
      <Button 
        onClick={() => navigate(-1)} 
        icon={<ArrowLeftOutlined />} 
        style={{ marginBottom: 16 }}
      >
        Back To List
      </Button>
      <h1>{id ? 'Edit Entity' : 'Create Entity'}</h1>
      <EntityForm entity={entity} />
    </div>
  );
};