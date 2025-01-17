import React, {useState} from "react";
import {Button, Col, Layout} from "antd";
import {Logo} from "../../assets/constant";
import "./style.css";
import {RiUserLine} from "react-icons/ri";
import {Link, Outlet} from "react-router-dom";
const {Header, Content, Sider} = Layout;
const Main = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [mode, setMode] = useState("Leads");
  const handleLogout = () => {
    sessionStorage.removeItem('jwt'); // Remove the JWT token
    window.location.href = '/'; // Redirect to login page
  };
  
  return (
    <Layout>
      <Header class=" ant-header flex-row align-middle px-12">
        <Col span={10} className="px-12 py-3">
          <Link to="/">
            <Logo />
          </Link>
        </Col>
        <Col className="flex items-center ">
          <Button onClick={handleLogout} className="primary-btn-active btn-logout ">
            <span class="text-lg">
              <RiUserLine />
            </span>
            Logout
          </Button>
        </Col>
      </Header>
      <Layout className="h-dvh">
        <Sider
          breakpoint="lg"
          collapsed={collapsed}
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed) => {
            setCollapsed(collapsed);
          }}
          width={200}
          className="bg-white relative py-10 pr-5"
        >
          <div class="flex p-3  flex-col gap-4 rounded-lg  bg-[#99683033]">
            <Link to="/pannel/leads">
              <Button
                type="primary"
                className={mode === "Leads" ? "primary-btn-active w-full" : "primary-btn w-full"}
                onClick={() => setMode("Leads")}
              >
                Leads
              </Button>
            </Link>
            <Link to="/pannel/design">
              <Button
                type="primary"
                className={mode === "Design" ? "primary-btn-active w-full" : "primary-btn w-full"}
                onClick={() => setMode("Design")}
              >
                Design
              </Button>
            </Link>
            <Link to="/pannel/work">
              <Button
                type="primary"
                className={mode === "Work" ? "primary-btn-active w-full" : "primary-btn w-full"}
                onClick={() => setMode("Work")}
              >
                Work Progress
              </Button>
            </Link>
            <Link to="/pannel/activity">
              <Button
                type="primary"
                className={mode === "Activity" ? "primary-btn-active w-full" : "primary-btn w-full"}
                onClick={() => setMode("Activity")}
              >
                Activity Log
              </Button>
            </Link>
            <Link to="/pannel/architect">
              <Button
                type="primary"
                className={mode === "Architects" ? "primary-btn-active w-full" : "primary-btn w-full"}
                onClick={() => setMode("Architects")}
              >
                Architects
              </Button>
            </Link>
          </div>
        </Sider>
        <Content className="m-0 h-dvh overflow-scroll font-Outfit  px-10 bg-white ant-content">
          <Outlet />
        </Content>
      </Layout>
      {/* <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer> */}
    </Layout>
  );
};

export default Main;
