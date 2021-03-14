import  {FC,useState} from "react"
import { Card,Table,Space } from 'antd';
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    sex: '男',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    sex: '女',
    age: 42,
    address: '西湖区湖底公园2号',
  },
  {
    key: '11',
    name: '胡彦斌',
    sex: '男',
    age: 32,
    address: '西湖区湖底公园3号',
  },
  {
    key: '22',
    name: '胡彦祖',
    sex: '女',
    age: 42,
    address: '西湖区湖底公园4号',
  },
  {
    key: '111',
    name: '胡彦斌',
    sex: '男',
    age: 32,
    address: '西湖区湖底公园5号',
  },
  {
    key: '222',
    name: '胡彦祖',
    sex: '女',
    age: 42,
    address: '西湖区湖底公园6号',
  },
  {
    key: '1111',
    name: '胡彦斌',
    sex: '男',
    age: 32,
    address: '西湖区湖底公园7号',
  },
  {
    key: '2222',
    name: '胡彦祖',
    sex: '女',
    age: 42,
    address: '西湖区湖底公园8号',
  },
  {
    key: '11111',
    name: '胡彦斌',
    sex: '男',
    age: 32,
    address: '西湖区湖底公园9号',
  },
  {
    key: '22222',
    name: '胡彦祖',
    sex: '女',
    age: 42,
    address: '西湖区湖底公园10号',
  },
  {
    key: '111111',
    name: '胡彦斌',
    sex: '男',
    age: 32,
    address: '西湖区湖底公园11号',
  },
  {
    key: '222222',
    name: '胡彦祖',
    sex: '女',
    age: 42,
    address: '西湖区湖底公园12号',
  },
  {
    key: '1a',
    name: '胡彦斌',
    sex: '男',
    age: 32,
    address: '西湖区湖底公园13号',
  },
  {
    key: '2a',
    name: '胡彦祖',
    sex: '女',
    age: 42,
    address: '西湖区湖底公园14号',
  },
  {
    key: '1s',
    name: '胡彦斌',
    sex: '男',
    age: 32,
    address: '西湖区湖底公园15号',
  },
  {
    key: '2s',
    name: '胡彦祖',
    sex: '女',
    age: 42,
    address: '西湖区湖底公园16号',
  },
  {
    key: '1d',
    name: '胡彦斌',
    sex: '男',
    age: 32,
    address: '西湖区湖底公园17号',
  },
  {
    key: '2d',
    name: '胡彦祖',
    sex: '女',
    age: 42,
    address: '西湖区湖底公园18号',
  },
  {
    key: '1f',
    name: '胡彦斌',
    sex: '男',
    age: 32,
    address: '西湖区湖底公园19号',
  },
  {
    key: '2f',
    name: '胡彦祖',
    sex: '女',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '1g',
    name: '胡彦斌',
    sex: '男',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2g',
    name: '胡彦祖',
    sex: '女',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '1h',
    name: '胡彦斌',
    sex: '男',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2h',
    name: '胡彦祖',
    sex: '女',
    age: 42,
    address: '西湖区湖底公园1号',
  }
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
const index:FC = () => {
  return (
  <Space direction="vertical" style={{ width: "100%" }} >
    <Card title=" 基础表格"  >
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </Card>
    <Card title=" Mock-单选"  >
      <Table dataSource={dataSource} columns={columns} rowSelection={{ type: "radio", ...rowSelection}}  
      pagination={{  
        defaultCurrent:3,
        total:24 ,
        showQuickJumper:true,
        showTotal:(total, range) => `${range[0]}-${range[1]} of ${total} items`        
        }}/>
    </Card>


  </Space>
  )
}

export default index;