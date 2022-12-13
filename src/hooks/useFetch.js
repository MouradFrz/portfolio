import { useState, useEffect } from "react";
import {client} from '../api/SanityConfig'
export const useFetch = (url) => {
	const [process, setProcess] = useState({
		data: [],
		isLoading: true,
		error: false,
	});

	useEffect(() => {
		client.fetch(url)
			.then((res) => {
				setProcess((prev) => ({ ...prev, isLoading: false, data: res }));
			})
			.catch((err) => {
				setProcess((prev) => ({ ...prev, isLoading: false, error: err }));
			});
	}, [url]);
	return {
		data: process.data,
		isLoading: process.isLoading,
		error: process.error,
	};
};
