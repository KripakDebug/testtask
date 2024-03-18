import { useMutation } from "@tanstack/react-query";
import { changePassword as changePasswordApi } from "../api/auth";
import { useNavigate } from "react-router-dom";

export function useChangePassword() {
	const navigate = useNavigate();
	const { mutate: changePassword, isLoading } = useMutation({
		mutationFn: changePasswordApi,
		onSuccess: () => {
			navigate("/login", { replace: true });
		},
	});

	return { changePassword, isLoading };
}
