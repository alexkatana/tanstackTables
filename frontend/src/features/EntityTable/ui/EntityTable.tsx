import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../../../shared/api/client';
import type { Entity } from '../../../entities/BookCrawler/model/types';
import { Button, Input, Select, Space, Table } from 'antd';
import type { TableColumnsType } from 'antd';

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
      width: 150,
      render: (_, record) => editingId === record.id ? (
        <Space>
          <Button
            type="primary"
            size="small"
            onClick={() => updateEntity({ ...record, ...editForm })}
          >
            Save
          </Button>
          <Button size="small" onClick={() => setEditingId(null)}>
            Cancel
          </Button>
        </Space>
      ) : (
        <Button size="small" onClick={() => {
          setEditingId(record.id);
          setEditForm({ name: record.name, status: record.status });
        }}>
          Edit
        </Button>
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