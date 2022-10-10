import { Layout } from "antd";
import FooterPage from "./footer";
import Sidebar from "./sidebar";
import { Breadcrumb  } from "antd";
const { Header, Content } = Layout;

const PageLayout = ({children}:any) =>{
return(
  <Layout style={{ minHeight: "100vh" }}>
     <Sidebar/>
     <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360,height: "79vh" }}
          >
          {children}
          </div>
        </Content>
        <FooterPage/>
      </Layout>
     </Layout>

)
}

export default PageLayout;