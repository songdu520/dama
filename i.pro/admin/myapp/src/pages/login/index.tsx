import { Form, Input, Button, Checkbox ,message} from 'antd';
import {useEffect} from "react"
import {useHistory} from "umi"
import {loginApi} from "@/utils/api"
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const index = () => {
  const history=useHistory()
    const onFinish =async  (values: any) => {
    console.log('Success:', values);
    
    const res=await loginApi(values)
    if (res.status === 0) {
      localStorage.setItem('token', res.result[0]._id);
      localStorage.setItem('auth', JSON.stringify(res.result[0].auth));
      history.push('/admin/welcome');
    } else {
      message.error(res.msg);
    }
    
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
   <div style={{width:600,margin:"80px auto"}}>
         <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
   </div>
  );
};

export default index