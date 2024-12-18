import { useCallback, useEffect, useState } from "react";

const sendHttpRequest = async (url, config) => {
	const response = await fetch(url, config);
	const resData = await response.json();

	return { response, resData }; // Return both the response and data
};

// This is a custom hook for fetching/sending data to the http urls.
const useHttp = (url, config, initialData) => {
	const [data, setData] = useState(initialData);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const sendRequest = useCallback(
		async (requestBody, throwOnError= true) => {
			setLoading(true);
			setError(null)
			try {
				const {response, resData } = await sendHttpRequest(url, {
					...config,
					body: requestBody,
				});

				if (!response.ok && throwOnError) {
					throw new Error(resData.message || "Something went wrong!");
				  }

				setData(resData);

			} catch (error) {
				setError(error.message || "Error occurred!");
			}
			setLoading(false);
		},
		[url, config]
	);
	const clearData = useCallback(() => {
		setData(null);
		setError(null);
	}, []);
	useEffect(() => {
		if ((config && (!config.method || config.method === "GET")) || !config) {
			sendRequest();
		}
	}, [sendRequest, config]);

	return {
		data,
		error,
		loading,
		sendRequest,
		clearData,
	};
};

export default useHttp;
