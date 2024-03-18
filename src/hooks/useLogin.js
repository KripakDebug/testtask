import { useMutation } from "@tanstack/react-query";
import { login as LoginApi } from "../api/auth";

export function useLogin() {
	const { mutate: login, isLoading } = useMutation({
		mutationFn: LoginApi,
	});

	return { login, isLoading };
}
