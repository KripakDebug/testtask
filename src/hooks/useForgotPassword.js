import { useMutation } from "@tanstack/react-query";
import { sendEmailToResetPassword as sendEmailToResetPasswordApi } from "../api/auth";

export function useForgotPassword() {
	const { mutate: sendEmailToResetPassword, isLoading } = useMutation({
		mutationFn: sendEmailToResetPasswordApi,
	});

	return { sendEmailToResetPassword, isLoading };
}
