import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import { 
  CheckCircleOutlined, 
  ClockCircleOutlined, 
  StopOutlined 
} from '@ant-design/icons';
import type { EntityFormValues } from '../model/types';
import { apiClient } from '../../../shared/api/client';
import { signal } from '@preact/signals-react';
import useHeader from '../../../shared/lib/useHeader'; 

const loading = signal(false);

export const EntityForm = ({ entity }: { entity?: EntityFormValues & { id?: number } }) => {
  const [form] = Form.useForm();
  const { setTitle } = useHeader(); 

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

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (entity?.id) {
      setTitle(`Entity Tables/${e.target.value}`);
    }
  };

  React.useEffect(() => {
    if (entity?.id && entity?.name) {
      setTitle(`Entity Tables/${entity.name}`);
    } else {
      setTitle('Entity Tables');
    }

    return () => {
      setTitle('EntityTable app by Alex');
    };
  }, [entity, setTitle]);

  return (
    <Form form={form} initialValues={entity} onFinish={onFinish}>
      <Form.Item 
        name="name" 
        label="Name" 
        rules={[{ required: true, message: 'Please input the name!' }]}
        style={{ width: '13%' }} 
      >
        <Input 
          onChange={handleNameChange} 
          placeholder="Enter entity name"
        />
      </Form.Item>

      <Form.Item 
        name="status" 
        label="Status" 
        rules={[{ required: true, message: 'Please select status!' }]}
        style={{ width: '13%' }} 
      >
        <Select placeholder="Select status">
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

      <Button 
        type="primary" 
        htmlType="submit" 
        loading={loading.value}
        style={{ marginTop: 16 }}
      >
        Save
      </Button>
    </Form>
  );
};