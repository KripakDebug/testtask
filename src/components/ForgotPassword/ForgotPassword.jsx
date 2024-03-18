import { Button, Form, Input, message } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { useForgotPassword } from "../../hooks/useForgotPassword";

export default function ForgotPassword() {
	const { sendEmailToResetPassword } = useForgotPassword();
	const [messageApi, contextHolder] = message.useMessage();
	return (
		<div className="form">
			{contextHolder}
			<div className="title">Forgot Password?</div>

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
				<Form.Item>
					<Button type="primary" htmlType="submit" block>
						<div>Send</div>
					</Button>
				</Form.Item>
				<Form.Item>
					<NavLink to="/login">
						<Button type="default" block>
							Cancel
						</Button>
					</NavLink>
				</Form.Item>
			</Form>
		</div>
	);

	function onFinish({email}) {
		sendEmailToResetPassword(
			{ email },
			{
				onSuccess: () => {
					messageApi.open({
						type: "success",
						content: "send to your email message",
					});
				},
				onError: () => {
					messageApi.open({
						type: "error",
						content: "wrong email!",
					});
				},
			}
		);
	}
}
