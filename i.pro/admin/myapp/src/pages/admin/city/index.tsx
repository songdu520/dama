import  {FC,useEffect,useState} from "react"
import { Card,Form, Input, Button,Select,Table} from 'antd';

const { Option } = Select;
import {getCitiesList,getManageList} from "@/utils/api"
const index:FC = () => {
  const [cities,setcities]=useState([]) 
  const [manageList,setManageList]=useState([])
  const [now,setnow]=useState([]) 
  const [form] = Form.useForm();
  //获取管理城市的数据
  useEffect(()=>{
   (async ()=>{
      const res=await  getManageList()
      console.log(res)
    const list=res.result.map(
      (item:any)=>{
        return {...item,key:item._id} 
      }
    )
     setManageList(list)
     setnow(list)
     }
   )()
  },[])
 
//管理城市的数据
  
  const columns: any = [
    {
      title: '城市ID',
      dataIndex: '_id',
    },
    {
      title: '城市名称',
      dataIndex: 'city',
    },
    {
      title: '用车模式',
      dataIndex: 'useCar',
      render: (value: string) => value === '1' ? '禁停区' : '停车点'
    },
    {
      title: '营运模式',
      dataIndex: 'operating',
      render: (value: string) => value === '1' ? '加盟' : '自营'
    },
    {
      title: '城市管理员',
      dataIndex: 'admin',
    },
    {
      title: '城市开通时间',
      dataIndex: 'openTime',
      // render: (value: string) => format(value)
    }
  ]
  let dataSource=now


 //表单提交
  const onFinish = (values: any) => {
    console.log('Success:', values);
    let list=[...manageList]
    if(values.city){
     let newlist=list.filter((item:any)=>{
    return values.city===item.city
    })
      setnow(newlist)
    }
    else if(values.operating){
        let newlist=list.filter((item:any)=>{
      return values.operating===item.operating
      })
      setnow(newlist)
    }
    else if(values.useCar ){
        let newlist=list.filter((item:any)=>{
      return values.useCar===item.useCar
      })
      setnow(newlist)
      }
  };
  //获取城市
  const getCities= async (values: any)=>{
    if(values){
      const res=await getCitiesList()
      console.log(res)

       setcities(res.cts)
    }
  }
  return (
    <>
    <Card title="登录行内表单"  >
    <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
      <Form.Item
        name="city"
        label="城市"
      >
      <Select  style={{ width: 120 }} onDropdownVisibleChange={getCities}>
        {
          cities.map((item: any) => {
          return <Option value={item.nm}  key={item.id}>{item.nm}</Option>
        })
      }
      </Select>
      </Form.Item>
      
      <Form.Item
        name="useCar"
        label="用车模式"
      >
      <Select  style={{ width: 120 }}>
         
         <Option value="1">指定停车</Option>
        <Option value="2">禁停车</Option>
      </Select>
      </Form.Item>
      <Form.Item
        name="operating"
        label="营运模式"
      >
      <Select  style={{ width: 120 }}>
         <Option value="1">加盟</Option>
         <Option value="2">自营</Option>
      </Select>
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {() => (
        <>
          <Button
            type="primary"
            htmlType="submit">
           查询
          </Button>
          <Button
            htmlType="reset">
           重置
          </Button>
        </>
        )}
      </Form.Item>
    </Form>
    </Card>
    < Card>
      <Table dataSource={dataSource} columns={columns} />
    </Card>
    </>
  );
}

export default index;