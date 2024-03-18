// import { Crypto } from "@/@types";

export async function fetchCoinData(coinId: string, currency: string) {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinId}`);
        const data = await response.json();
        return data[0]
    } catch (error) {
        console.error('Error fetching data from CoinGecko API:', error);
        throw error;
    }
}