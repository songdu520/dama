import  {FC} from "react"
import { Button,Modal } from 'antd';
import { Space,Spin,Alert } from 'antd';
import {SmileOutlined } from '@ant-design/icons';
import Card from "../component/Card"


const index:FC = () => {
  const antIcon = <SmileOutlined style={{ fontSize: 24 }} spin />

  return (
    
  
  <>
   <Space direction="vertical" style={{ width:" 100%"}}>
   <Card  title="Spin用法"  >
     
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
        <Spin indicator={antIcon} />
   </Card>
  <Card title="内容遮罩"  >
  <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
      style={{width:"100%"}}
    />
  <Spin >
  <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
      style={{width:"100%"}}
    />
  </Spin>
  <Spin tip="Loading...">
  <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
      style={{width:"100%"}}
    />
  </Spin>

  <Spin  indicator={antIcon}>
  <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
      style={{width:"100%"}}
    />
  </Spin>
  </Card>
   </Space>

  </>
   
  );
}

export default index;