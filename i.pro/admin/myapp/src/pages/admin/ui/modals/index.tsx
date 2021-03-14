import react, {FC,useState} from "react"
import { Button,Modal } from 'antd';
import { Space } from 'antd';
import { } from '@ant-design/icons';
import Card from "../component/Card"
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

const index:FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setloading] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  const  showConfirm =()=> {
        confirm({
          title: 'Do you Want to delete these items?',
          icon: <ExclamationCircleOutlined />,
          content: 'Some descriptions',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }


  return (
    
  
  <>
   <Space direction="vertical" style={{ width:" 100%"}}>
   <Card  title="模态框"  >
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      </Modal>
      <Button type="primary" onClick={showModal}>
          Open Modal with customized footer
      </Button>
        <Modal
          visible={isModalVisible}
          title="Title"
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ top: 20 }}
          footer={[
            <Button key="back" onClick={handleCancel}>
              算了
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
              Submit
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      
    </Card>
    <Card title="信息确认框">
    <Button onClick={showConfirm}>Confirm</Button>
    </Card>
   </Space>
  </>
   
  );
}

export default index;