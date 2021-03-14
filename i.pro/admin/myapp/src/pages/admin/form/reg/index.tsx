import  React,{FC,useState} from "react"
// import {} from "umi"
import moment from 'moment';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Card,
  Radio,
  InputNumber,
  Switch,
  DatePicker
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
const dateFormat = 'YYYY-MM-DD';
const { Option } = Select;


const Index:FC = () => {

  const [value, setValue] = React.useState(1);

  
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24   },
      sm: { span: 10 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  

    const [form] = Form.useForm();
  
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
    };
  
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      </Form.Item>
    );
  
    const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);
  
    const onWebsiteChange = (value: string) => {
      if (!value) {
        setAutoCompleteResult([]);
      } else {
        setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
      }
    };
  
    const websiteOptions = autoCompleteResult.map(website => ({
      label: website,
      value: website,
    }));


  return (
    <Card title="Default size card" extra={<a href="#">More</a>} >
      <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
      >
      <Form.Item
        name="用户名"
        label="用户名"
        rules={[
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="密码"
        label="密码"
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="性别"
        label="性别"
       
      >
          <Radio.Group>
            <Radio value="男" defaultChecked>男</Radio>
            <Radio value="女">女</Radio>
          </Radio.Group>
      </Form.Item>

      <Form.Item
        name="年龄"
        label="年龄"
        
      >
        <InputNumber min={1} max={1000} defaultValue={18}  />
      </Form.Item>

      <Form.Item
        name="当前状态"
        label="当前状态"
        >
        <Select defaultValue="lucy" style={{ width: 120 }} >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Form.Item>
      
      <Form.Item
        name="是否已婚"
        label="是否已婚"
        
      >
        <Switch defaultChecked  />,
      </Form.Item>
      <Form.Item
        name="生日"
        label="生日"
        
      >
        <DatePicker  defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('Should accept agreement'),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          注册
        </Button>
      </Form.Item>
    </Form>
  </Card>
  );
}

export default Index;