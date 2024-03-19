export async function fetchBitcoinPrices(id: string, coins: string, toggleMoment: string) {

    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${coins}&days=${Number(toggleMoment)}`);
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Erro ao buscar os preços do Bitcoin:', error);
    }
}