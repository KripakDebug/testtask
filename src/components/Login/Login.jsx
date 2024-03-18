import { Button, Form, Input, message } from "antd";
import React from "react";
import "./Login.scss";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { useLogin } from "../../hooks/useLogin";
import { NavLink } from "react-router-dom";

function Login() {
	const [messageApi, contextHolder] = message.useMessage();
	const { login } = useLogin();
	return (
		<div className="form">
			{contextHolder}
			<div className="title">Log in to your account</div>
			<div className="group-link">
				<button className="link">
					<GoogleOutlined /> Google
				</button>
				<button className="link">
					<GithubOutlined /> Github
				</button>
			</div>
			<div className="line">
				<div className="text">or</div>
			</div>
			<Form
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				autoComplete="off"
			>
				<Form.Item
					name="email"
					rules={[
						{
							required: true,
							type: "email",
							message: "Please input valid email!",
						},
					]}
				>
					<Input placeholder="email" />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: "Please input your password!",
						},
						{
							min: 8,
							message: "Enter at least 8 characters!",
						},
					]}
				>
					<Input.Password placeholder="password" />
				</Form.Item>
				<Form.Item className="btn-link">
					<Button type="link">
						<NavLink to="/forgotpassword">Forgot your password?</NavLink>
					</Button>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" block>
						<div>Log in to Qencode</div>
					</Button>
				</Form.Item>
				<div>
					Is your company new to Qencode? <a href="/">Sign up</a>
				</div>
			</Form>
		</div>
	);

	function onFinish({ email, password }) {
		login(
			{ email, password },
			{
				onSuccess: () => {
					messageApi.open({
						type: "success",
						content: "The user is logged in!",
					});
				},
				onError: () => {
					messageApi.open({
						type: "error",
						content: "wrong password or email!",
					});
				},
			}
		);
	}
}

export default Login;
