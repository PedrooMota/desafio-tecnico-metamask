export function PriceChange(data: any) {
    const firstPrice = data.price[0][1];
    const lastPrice = data.price[data.price.length - 1][1];
    const priceChange = ((lastPrice - firstPrice) / firstPrice) * 100;
    const formattedChange = priceChange.toFixed(2);

    return formattedChange
}