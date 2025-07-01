import { Form, Input, Select, Button } from 'antd';
import type { EntityFormValues } from '../model/types';
import { apiClient } from '../../../shared/api/client';
import { signal } from '@preact/signals-react';
const loading = signal(false)
export const EntityForm = ({ entity }: { entity?: EntityFormValues & { id?: number } }) => {
  const [form] = Form.useForm();

  const onFinish = async (values: EntityFormValues) => {
    loading.value = true;
    try {
      if (entity?.id) {
        await apiClient.put(`/entities/${entity.id}`, values);
      } else {
        await apiClient.post('/entities', values);
      }
    } finally {
      loading.value = false;
    }
  };
  return (
    <Form form={form} initialValues={entity} onFinish={onFinish}>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="status" label="Status" rules={[{ required: true }]}>
        <Select>
          <Select.Option value="active">Active</Select.Option>
          <Select.Option value="pending">Pending</Select.Option>
          <Select.Option value="inactive">Inactive</Select.Option>
        </Select>
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={loading.value}>
        Save
      </Button>
    </Form>
  );
};