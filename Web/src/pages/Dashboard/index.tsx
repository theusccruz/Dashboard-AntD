import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { Switch, Route, Link, useLocation } from 'react-router-dom';

import './Ant.css';

import Clients from './pages/Clients';
import Users from './pages/Users';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname: currentRoute } = useLocation();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[currentRoute.replace('/', '')]}
          mode="vertical"
        >
          <Menu.Item key="clients" icon={<PieChartOutlined />}>
            <Link to="/clients">Clientes</Link>
          </Menu.Item>

          <Menu.Item key="users" icon={<DesktopOutlined />}>
            <Link to="/users">Usuários do sistema</Link>
          </Menu.Item>

          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>

          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />

        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>

          <Switch>
            <Route path="/clients" exact component={Clients} />
            <Route path="/users" component={Users} />
          </Switch>
        </Content>

        <Footer style={{ textAlign: 'center' }}>By Matheus Cruz using Ant Design🔥</Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
