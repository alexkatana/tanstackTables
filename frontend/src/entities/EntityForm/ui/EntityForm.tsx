import { Form, Input, Select, Button } from 'antd';
import { 
  CheckCircleOutlined, 
  ClockCircleOutlined, 
  StopOutlined 
} from '@ant-design/icons';
import type { EntityFormValues } from '../model/types';
import { apiClient } from '../../../shared/api/client';
import { signal } from '@preact/signals-react';

const loading = signal(false);

export const EntityForm = ({ entity }: { entity?: EntityFormValues & { id?: number } }) => {
  const [form] = Form.useForm();

  const onFinish = async (values: EntityFormValues) => {
    loading.value = true;
    try {
      if (entity?.id) {
        await apiClient.put(`api/entities/${entity.id}`, values);
      } else {
        await apiClient.post('api/entities', values);
      }
    } finally {
      loading.value = false;
    }
  };

  return (
    <Form form={form} initialValues={entity} onFinish={onFinish}>
      <Form.Item 
        name="name" 
        label="Name" 
        rules={[{ required: true }]}
        style={{ width: '13%' }} 
      >
        <Input />
      </Form.Item>

      <Form.Item 
        name="status" 
        label="Status" 
        rules={[{ required: true }]}
        style={{ width: '13%' }} 
      >
        <Select>
          <Select.Option value="active">
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Active
          </Select.Option>
          <Select.Option value="pending">
            <ClockCircleOutlined style={{ color: '#faad14', marginRight: 8 }} />
            Pending
          </Select.Option>
          <Select.Option value="inactive">
            <StopOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Inactive
          </Select.Option>
        </Select>
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={loading.value}>
        Save
      </Button>
    </Form>
  );
};