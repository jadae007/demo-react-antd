import React from 'react'
import { Layout } from "antd";
const { Footer } = Layout;

type Props = {}

export default function FooterPage({}: Props) {
  return (
    <Footer style={{ textAlign: "center"}}>
    Ant Design ©2018 Created by Ant UED
  </Footer>
  )
}