import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Layout, Button, Checkbox, Form, Input, notification } from "antd";
import {
  FacebookFilled,
  LockOutlined,
  TwitterCircleFilled,
  UserOutlined,
} from "@ant-design/icons";
import { loginApi } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { setUserInfoAction } from "../../store/actions/userAction";
const { Sider, Content } = Layout;

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    passWord: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await loginApi(state);
      console.log(result);

      localStorage.setItem("USER_INFO_KEY", JSON.stringify(result.data.content));

      dispatch(setUserInfoAction(result.data.content));
      
      notification.success({
        message: "Đăng nhập thành công",
      });
      navigate("/");
    } catch (error) {
      notification.error({
        message: "Email hoặc mật khẩu không chính xác",
      });
    }
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const sider = {
    height: window.innerHeight,
    backgroundImage: "url(https://picsum.photos/800)",
  };
  const formLayout = {
    height: window.innerHeight,
  };
  return (
    <>
      <Layout>
        <Sider style={sider} width={window.innerWidth / 2}></Sider>
        <Content>
          <form onSubmit={handleSubmit}>
            <div
              style={formLayout}
              className="d-flex justify-content-center align-items-center flex-column"
            >
              <h3>Login</h3>
              <div className="mt-3">
                <Input
                  style={{ minWidth: 300 }}
                  size="large"
                  placeholder="Email"
                  prefix={<UserOutlined />}
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mt-3">
                <Input
                  style={{ minWidth: 300 }}
                  size="large"
                  placeholder="Password"
                  prefix={<LockOutlined />}
                  name="passWord"
                  onChange={handleChange}
                  required
                />
              </div>
              <Button
                style={{ minWidth: 300 }}
                type="primary"
                size="large"
                className="mt-3"
                htmlType="submit"
              >
                Login
              </Button>
              <div className="social mt-3"></div>
            </div>
          </form>

          {/* <Form
            name="normal_login"
            className="login-form w-50 mx-auto d-flex flex-column justify-content-center"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            style={formLayout}
            size="large"
          >
            <h3 className="text-center mb-4">Login</h3>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button w-100"
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form> */}
        </Content>
      </Layout>
    </>
  );
}
