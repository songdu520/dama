import  {FC} from "react"
import { Button } from 'antd';
import { Space } from 'antd';
import { DownloadOutlined ,SearchOutlined} from '@ant-design/icons';
import Card from "../component/Card"

const index:FC = () => {
  return (
  
  <>
   <Space direction="vertical" style={{ width:" 100%"}}>
   <Card  title="按钮"  >
     <Button type="primary">Primary Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="primary" disabled>
        Primary(disabled)
      </Button>
    </Card>
    <Card  title="图形按钮"  >
      <Button  icon={<DownloadOutlined />} >
            Download
      </Button>
      <Button  shape="circle" icon={<SearchOutlined />} />

    </Card>
    <Card  title="loding按钮"  >
        <Button type="primary" loading>
          Loading
        </Button>

    </Card>
   </Space>
  </>
   
  );
}

export default index;