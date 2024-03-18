import "./App.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import ResetPassword from './components/ResetPassword/ResetPassword'
import titleLogo from "./assets/image/title.svg";

import Login from "./components/Login/Login";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<div className="title">
					<img src={titleLogo} alt="logo" />
				</div>
				<BrowserRouter>
					<Routes>
						<Route index element={<Navigate replace to="login" />} />
						<Route index path="login" element={<Login />} />
						<Route index path="forgotpassword" element={<ForgotPassword />} />
						<Route index path="resetpassword" element={<ResetPassword />} />
					</Routes>
				</BrowserRouter>
			</div>
		</QueryClientProvider>
	);
}

export default App;
