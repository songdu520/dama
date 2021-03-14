import  {FC} from "react"
import { Space,Card } from 'antd';
import {IRouteComponentProps} from "umi"
const index:FC<IRouteComponentProps> = (props) => {
  return (
    <>
      <Card size="small" title={props.title}  >
     <Space>
          {props.children}
      </Space>
    </Card>
    </>
  );
}

export default index;