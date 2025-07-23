import { useParams } from 'react-router-dom';
import { useEntity } from '../../entities/BookCrawler/model/api';
import { EntityForm } from '../../entities/EntityForm/index';
import useHeader from '../../shared/lib/useHeader';
import { useEffect } from 'react';
import styles from './styles.module.scss';

export const EntityEditPage = () => {
  const { id } = useParams();
  const { data: entity, isLoading } = useEntity(id ? Number(id) : undefined);
  const { setTitle } = useHeader();

  useEffect(() => {
    if (entity) {
      setTitle(`Entity Tables/${entity.name}`);
    } else {
      setTitle('Entity Tables');
    }

    return () => {
      setTitle('EntityTable app by Alex');
    };
  }, [entity, setTitle]);

  if (isLoading) return <div>Загрузка</div>;

  return (
    <div className={styles.page}>
      <h1>{id ? 'Edit Entity' : 'Create Entity'}</h1>
      <EntityForm entity={entity} />
    </div>
  );
};