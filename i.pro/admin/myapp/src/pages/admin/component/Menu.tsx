import {FC,useCallback} from "react"
import {useHistory } from "umi"
import { Menu } from 'antd';
import { 
  MailOutlined, 
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
const { SubMenu } = Menu;
const menuList = [
  {
    title: '首页',
    key: '/admin/welcome',
    icon: <MailOutlined />
  },
  {
    title: 'UI',
    key: '/admin/ui',
    icon: <AppstoreOutlined />,
    children: [
      {
        title: '按钮',
        key: '/admin/ui/buttons',
      },
      {
        title: '弹框',
        key: '/admin/ui/modals',
      },
      {
        title: 'Loading',
        key: '/admin/ui/loadings',
      },
      {
        title: '通知提醒',
        key: '/admin/ui/notification',
      },
      {
        title: '全局Message',
        key: '/admin/ui/messages',
      },
      {
        title: 'Tab页签',
        key: '/admin/ui/tabs',
      },
      {
        title: '图片画廊',
        key: '/admin/ui/gallery',
      },
      {
        title: '轮播图',
        key: '/admin/ui/carousel',
      }
    ]
  },
  {
    title: '表单',
    key: '/admin/form',
    icon: <BarChartOutlined />,
    children: [
      {
        title: '登录',
        key: '/admin/form/login',
      },
      {
        title: '注册',
        key: '/admin/form/reg',
      }
    ]
  },
  {
    title: '表格',
    key: '/admin/table',
    icon: <CloudOutlined />,
    children: [
      {
        title: '基础表格',
        key: '/admin/table/basic',
      },
      {
        title: '高级表格',
        key: '/admin/table/high',
      }
    ]
  },
  {
    title: '富文本',
    key: '/admin/rich',
    icon: <ShopOutlined />,
  },
  {
    title: '城市管理',
    key: '/admin/city',
    icon: <TeamOutlined />,
  },
  {
    title: '订单管理',
    key: '/admin/order',
    icon: <UserOutlined />,
    children: [
      {
        title: '订单详情',
        key: '/admin/order/detail'
      },
      {
        title: '结束订单',
        key: '/admin/order/finish'
      }
    ]
  },
  {
    title: '员工管理',
    key: '/admin/user',
    icon: <UploadOutlined />,
  },
  {
    title: '车辆地图',
    key: '/admin/bikeMap',
    icon: <VideoCameraOutlined />,
  },
  {
    title: '图标',
    key: '/admin/charts',
    icon: <UploadOutlined />,
  },
  {
    title: '权限设置',
    key: '/admin/permission',
    icon: <MailOutlined />,
  },
];
const Menua:FC = () => {
  const history=useHistory()
  const handleClick=useCallback((e:any)=>{
    console.log('click', e);
    // console.log(history)
    let path=e.key
    history.push(path)
  },[])


  return  <Menu onClick={handleClick} theme="dark"  style={{ width: 180 }} mode="vertical">
          {
            menuList.map(item=>{
            if(item.children){
            return <SubMenu key={item.key} icon={item.icon} title={item.title}>
                 {
                   item.children.map(i=>{
                   return <Menu.Item key={i.key}>{i.title}</Menu.Item> 
                   })
                 }
              </SubMenu>
             }else{
              return <Menu.Item key={item.key}  icon={item.icon}>{item.title}</Menu.Item>
             }
            })
          }
      </Menu>
 
}

export default Menua;