// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PriceChange(data: any) {
    const firstPrice = data.prices[0][1];
    const lastPrice = data.prices[data.prices.length - 1][1];
    const priceChange = ((lastPrice - firstPrice) / firstPrice) * 100;
    const formattedChange = priceChange.toFixed(2);

    return formattedChange
}