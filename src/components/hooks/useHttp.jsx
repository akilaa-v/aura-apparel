import { useCallback, useEffect, useState } from "react";

const sendHttpRequest = async (url, config) => {
	const response = await fetch(url, config);
	const resData = await response.json();

	if (!response.ok) {
		throw new Error(resData.message || "Something went wrong!");
	}

	return resData;
};

const useHttp = (url, config, initialData) => {
	const [data, setData] = useState(initialData);
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);

	const sendRequest = useCallback(
		async (data) => {
			setLoading(true);
			try {
				const resData = await sendHttpRequest(url, {
					...config,
					body: data,
				});
				setData(resData);
			} catch (error) {
				setError(error.message || "Error occurred!");
			}
			setLoading(false);
		},
		[url, config]
	);

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
	};
};

export default useHttp;
