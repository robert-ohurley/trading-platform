//originally used this custom hook to grab crypto information to use as our dummy data. After we shifted away from displaying  
//crypto and towards nfts we wrote our own dummy data


import { useState, useEffect } from 'react';
import axios from 'axios';

let API_KEY = "84876368-dc36-4e92-b725-4473c646264f";

export default function CryptoTable() {
	const [cryptoListings, setCryptoListings] = useState([]);

	async function callApi() {
		let response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD', {
			headers: {
				'X-CMC_PRO_API_KEY': API_KEY,
				'Access-Control-Allow-Origin': true
			},
		});

		const json = response.data;
		console.log(json);
		return json;
	}

	useEffect(() => {
		let cryptoListings = callApi()
		setCryptoListings(cryptoListings)
	}, [])

	return (
		<div>
			{cryptoListings}
		</div>
	)
}