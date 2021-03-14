
import { Layout, Menu } from 'antd';
import {IRouteComponentProps } from "umi"

import "./layout.less"
import Menua from "./component/Menu"
import Title from "./component/Title"
import Header from "./component/Header"


const {  Content,  Sider } = Layout;
const Index = (props:IRouteComponentProps) => {
  return (
    <>
    <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        width:"92px"
      }}
    >
      <div className="logo" >
        <h1>Imooc MS</h1>
      </div>
      <Menua></Menua>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
    <Header></Header>
    <Title></Title>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div>
          {
            props.children
          }
        </div>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      

    </Layout>
  </Layout>,

    </>
  );
}
  Index.wrappers = ['@/wrappers/auth']
export default Index;