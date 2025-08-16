"use client";

import React, { useEffect, useCallback } from "react";
import { Slide, toast, ToastPosition, ToastContainer } from "react-toastify";

// Assuming the other imports remain the same

const InternetCheck: React.FC = () => {
	const handleToast = useCallback((message: string, type: "warning" | "error") => {
		toast.dismiss();

		toast[type](message, {
			position: "bottom-right" as ToastPosition,
			autoClose: 3000,
			icon: false,
			closeButton: false,
			transition: Slide,
			hideProgressBar: true,
			theme: "colored",
		});
	}, []);

	const InternetRestored = useCallback(() => handleToast("Internet Restored 🚀", "warning"), [handleToast]);
	const NoInternetConnection = useCallback(() => handleToast("No/Bad Internet Connection 😭", "error"), [handleToast]);

	useEffect(() => {
		const handleOnlineEvent = () => InternetRestored();
		const handleOfflineEvent = () => NoInternetConnection();

		window.addEventListener("online", handleOnlineEvent);
		window.addEventListener("offline", handleOfflineEvent);

		return () => {
			window.removeEventListener("online", handleOnlineEvent);
			window.removeEventListener("offline", handleOfflineEvent);
		};
	}, [InternetRestored, NoInternetConnection]);

	return <ToastContainer />;
};

export default InternetCheck;
