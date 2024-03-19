import { API_KEY } from "@/@types";

interface CoinData {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    total_volume: number;
    price_change_percentage_24h: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_90d: number;
}

async function getCoinData(coinId: string): Promise<CoinData> {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}&x_cg_demo_api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const coinData: CoinData = await response.json();
        return coinData;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Função para buscar e exibir os dados
export async function displayCoinComparisonData(coinId: string) {
    try {
        const coinData = await getCoinData(coinId);
        console.log('Hoje\t\t$ ' + coinData.current_price + '\t\t' + coinData.price_change_percentage_24h + '%');
        console.log('30 Dias\t\t$ ' + (coinData.current_price / (1 + (coinData.price_change_percentage_30d / 100))) + '\t\t' + coinData.price_change_percentage_30d + '%');
        console.log('60 Dias\t\t$ ' + (coinData.current_price / (1 + (coinData.price_change_percentage_60d / 100))) + '\t\t' + coinData.price_change_percentage_60d + '%');
        console.log('90 Dias\t\t$ ' + (coinData.current_price / (1 + (coinData.price_change_percentage_90d / 100))) + '\t\t' + coinData.price_change_percentage_90d + '%');
    } catch (error) {
        console.error('Error:', error);
    }
}
