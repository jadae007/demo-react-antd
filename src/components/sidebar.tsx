import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
// import { Link } from "react-router-dom";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "1", <PieChartOutlined />),
  getItem("About", "2", <DesktopOutlined />),
  // getItem("User", "sub1", <UserOutlined />, [
  //   getItem("Tom", "3"),
  //   getItem("Bill", "4"),
  //   getItem("Alex", "5"),
  // ]),
  // getItem("Team", "sub2", <TeamOutlined />, [
  //   getItem("Team 1", "6"),
  //   getItem("Team 2", "8"),
  // ]),
  // getItem("Files", "9", <FileOutlined />),
];

console.log(items)
export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
    collapsible
    collapsed={collapsed}
    onCollapse={(value) => setCollapsed(value)}
    breakpoint="lg"
    onBreakpoint={broken => {
      console.log(broken);
    }}
  >
    <div className="logo" />
    <Menu
      theme="dark"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={items}
      style={{cursor:"pointer"}}
    />
  </Sider>
  )
}