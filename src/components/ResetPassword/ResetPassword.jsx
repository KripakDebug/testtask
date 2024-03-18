import { Button, Form, Input, message } from "antd";
import React from "react";
import { useChangePassword } from "../../hooks/useChangePassword";

export default function ResetPassword() {
	const { changePassword } = useChangePassword();
	const [messageApi, contextHolder] = message.useMessage();

	return (
		<div className="form">
			{contextHolder}
			<div className="title">Create new Password?</div>

			<Form
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				autoComplete="off"
			>
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
				<Form.Item
					name="confirmPassword"
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
					<Input.Password placeholder="Confirm password" />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" block>
						<div>Send</div>
					</Button>
				</Form.Item>
			</Form>
		</div>
	);

	function onFinish({ password, passwordConfirm }) {
		if (password !== passwordConfirm) {
			messageApi.open({
				type: "error",
				content: "passwords do not match!",
			});
			return;
		}
		changePassword(
			{ password, passwordConfirm },
			{
				onSuccess: () => {
					messageApi.open({
						type: "success",
						content: "the password has been changed",
					});
				},
				onError: () => {
					messageApi.open({
						type: "error",
						content: "failed to update password",
					});
				},
			}
		);
	}
}
