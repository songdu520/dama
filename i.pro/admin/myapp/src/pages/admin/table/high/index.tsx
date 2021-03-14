import  {FC,useState,useEffect} from "react"
import { Card,Table,Space ,Modal, Button } from 'antd';
import {getHightablesList} from "@/utils/api"
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;
interface columnsType {
  
  title:string;
  dataIndex: string;
  width: number;
  [props:string]:any;
}
 const showDeleteConfirm=(id: string)=>{
   return ()=>{
    confirm({
      title:` Are you sure delete this ${id}?`,
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
   }
  
}

const columns:columnsType[] = [
  {
    title: 'id',
    dataIndex: 'id',
    width: 120,
    fixed: 'left',
  },
  {
    title: 'username',
    dataIndex: 'username',
    width: 120,
    fixed: 'left',
  },
  {
    title: 'sex',
    dataIndex: 'sex',
    width: 120,
    render: (v:number) =>v===1?"男":"女"
  },
  {
    title: 'state',
    dataIndex: 'state',
    width: 120,
    render: (v:number) =>{
      let state:any={
        1:"风华浪子",
        2:"创业者",
        3:"北大才子",
        4:"百度FE",
        5:"咸鱼一条"
      }
      return state[v]
    }
  },
  
  {
    title: 'interest',
    dataIndex: 'interest',
    width: 120,
  }, 
{
    title: 'birthday',
    dataIndex: 'birthday',
    width: 120
  },
  {
    title: 'isMarried1',
    dataIndex: 'isMarried1',
    width: 120,
  },
  {
    title: 'isMarried2',
    dataIndex: 'isMarried2',
    width: 120,
  },

  {
    title: 'isMarried3',
    dataIndex: 'isMarried3',
    width: 120,
  },
  {
    title: 'isMarried4',
    dataIndex: 'isMarried4',
    width: 120,
  },
  {
    title: 'isMarried5',
    dataIndex: 'isMarried5',
    width: 120,
  },
  {
    title: 'isMarried6',
    dataIndex: 'isMarried6',
    width: 120,
  },
  {
    title: 'isMarried7',
    dataIndex: 'isMarried7',
    width: 120,
  },
  {
    title: 'isMarried8',
    dataIndex: 'isMarried8',
    width: 120,
  },
  {
  title: 'Address',
  dataIndex: 'address',
  width: 120,
}, 
  {
    title: 'time',
    dataIndex: 'time',
    width: 120, 
    fixed: 'right',
  },
  {
    title: '操作',
    dataIndex: '',
    width: 120,
    fixed: 'right',
    render: (v:any) =>{return (<Button onClick={showDeleteConfirm(v._id)} type="dashed"> Delete</Button>)}
  }, ];

const columns1:columnsType[] = [
    {
      title: 'Address',
      dataIndex: 'address',
      width: 120,
      
    },  
    {
        title: 'birthday',
        dataIndex: 'birthday',
        width: 120,
        
      },
      {
        title: 'id',
        dataIndex: 'id',
        width: 120,
        sorter: {
          compare:(a:any, b:any) => b.id-a.id,
          multiple: 3,
        },
      },
      {
        title: 'isMarried1',
        dataIndex: 'isMarried1',
        width: 120,
      },
      
      {
        title: 'sex',
        dataIndex: 'sex',
        width: 120,
      },
      {
        title: 'state',
        dataIndex: 'state',
        width: 120,
      },
      {
        title: 'time',
        dataIndex: 'time',
        width: 120, 
      },
    
      {
        title: 'username',
        dataIndex: 'username',
        width: 120,
        
      }];

const index:FC = () => {
  const [hightablesList,setHightablesList]=useState([])
  useEffect(()=>{
      (async()=>{
          let res=await getHightablesList()
          if(res.status===0){
            console.log(res. result)
            // setHightablesList(res. result)
            const tablesList=res. result.map(
              (item:any)=>{
                return {...item,key:item.id}}
            )
            setHightablesList(tablesList)
            
          }
        }
      )()
    },[])
  return (
  <Space direction="vertical" style={{ width: "100%" }} >
    <Card title=" 头部固定"  >
    <Table columns={columns} dataSource={hightablesList}  scroll={{ y: 500 }} />
    </Card>
    <Card title=" 表格排序"  >
    <Table columns={columns1} dataSource={hightablesList}   />
    </Card>

  </Space>
  )
}

export default index;