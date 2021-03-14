import  {FC} from "react"
import { Button,notification } from 'antd';
import { Space,Spin,Alert } from 'antd';
import {SmileOutlined } from '@ant-design/icons';
import Card from "../component/Card"


const index:FC = () => {
  
  const  openNotificationWithIcon = (type:"success"|"info"|"warning"|"error") => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  const openNotification =( placement:"topLeft",type:"success"|"info"|"warning"|"error") => {
    // notification.info({
    //   message: `Notification ${placement}`,
    //   description:
    //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    //   placement,
    // });
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement,
    });
  };


  return (
  <>
   <Space direction="vertical" style={{ width:" 100%"}}>
   <Card  title="Spin用法"  >
      <Button type="primary" onClick={() => openNotificationWithIcon('success')}>Success</Button>
      <Button type="primary" onClick={() => openNotificationWithIcon('info')}>Info</Button>
      <Button type="primary" onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
      <Button type="primary" onClick={() => openNotificationWithIcon('error')}>Error</Button>
   </Card>
  <Card title="内容遮罩"  >
      <Button type="primary" onClick={() => openNotification('topLeft','success')} >Success</Button>
      <Button type="primary" onClick={() => openNotificationWithIcon('info')}>Info</Button>
      <Button type="primary" onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
      <Button type="primary" onClick={() => openNotificationWithIcon('error')}>Error</Button>
  
  </Card>
   </Space>

  </>
   
  );
}

export default index;