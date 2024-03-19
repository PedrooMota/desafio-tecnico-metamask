// import { Crypto } from "@/@types";

import { API_KEY } from "@/@types";

export async function fetchCoinData(coinId: string, currency: string) {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinId}&x_cg_demo_api_key=${API_KEY}`);
        const data = await response.json();
        return data[0]
    } catch (error) {
        console.error('Error fetching data from CoinGecko API:', error);
        throw error;
    }
}