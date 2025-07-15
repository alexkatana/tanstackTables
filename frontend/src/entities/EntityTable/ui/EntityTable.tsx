import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/shared/api/client';
import type { Entity } from '../../../entities/BookCrawler/model/types';
import { Button, Input, Select, Space, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { Link } from 'react-router-dom';

export const EntityTable: React.FC = () => {
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<Entity>>({});

  const { data, isLoading } = useQuery<{ data: Entity[] }>({
    queryKey: ['entities'],
    queryFn: () => apiClient.get('/entities').then(res => res.data),
  });

  const { mutate: updateEntity } = useMutation({
    mutationFn: (entity: Entity) => 
      apiClient.put(`/entities/${entity.id}`, entity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['entities'] });
      setEditingId(null);
    },
  });

  const columns: TableColumnsType<Entity> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => editingId === record.id ? (
        <Input
          value={editForm.name ?? text}
          onChange={e => setEditForm({...editForm, name: e.target.value})}
        />
      ) : text,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => editingId === record.id ? (
        <Select
          value={editForm.status ?? text}
          onChange={value => setEditForm({...editForm, status: value})}
          options={[
            { value: 'active', label: 'Active' },
            { value: 'pending', label: 'Pending' },
            { value: 'inactive', label: 'Inactive' },
          ]}
        />
      ) : (
        <span className={`status-${text}`}>{text}</span>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          {editingId === record.id ? (
            <>
              <Button 
                type="primary" 
                onClick={() => updateEntity({ ...record, ...editForm } as Entity)}
              >
                Save
              </Button>
              <Button onClick={() => setEditingId(null)}>Cancel</Button>
            </>
          ) : (
            <>
              <Button onClick={() => setEditingId(record.id)}>Edit</Button>
              <Link to={`/edit/${record.id}`}>
                <Button>Full Edit</Button>
              </Link>
            </>
          )}
        </Space>
      ),
    },
  ];

  if (isLoading) return <div>Loading...</div>;

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={data?.data}
      pagination={false}
      bordered
    />
  );
};