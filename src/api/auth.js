import axios from "axios";

export async function login({ email, password }) {
	const data = await axios.post("https://auth-qa.qencode.com/v1/auth/login", {
		email,
		password,
	});

	return data;
}

export async function sendEmailToResetPassword({ email }) {
	const data = await axios.post(
		"https://auth-qa.qencode.com/v1/auth/password-reset",
		{
			email,
			redirect_url: "/resetpassword",
		}
	);

	return data;
}

export async function changePassword({ password, passwordConfirm }) {
	const data = await axios.post(
		"https://auth-qa.qencode.com/v1/auth/password-set",
		{
			password,
			password_confirm: passwordConfirm,
		}
	);

	return data;
}
