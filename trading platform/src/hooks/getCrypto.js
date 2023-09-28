// custom hook no longer used after we wrote our own dummy data

import axios from 'axios';
import { useEffect, useState } from 'react';

let API_KEY = "84876368-dc36-4e92-b725-4473c646264f";


export default function getCrypto() {
	const [crypto, setCrypto] = useState([]);

	async function callApi() {
		let response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
			headers: {
				'X-CMC_PRO_API_KEY': API_KEY,
			},
		});

		const json = response.data;
		console.log(json);
	}

	useEffect(() => {
		callApi();
	}, [])

	return crypto;
}