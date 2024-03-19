import { PriceData, ProcessedData } from "@/@types";

export function processPriceData(data: { prices: [number, number][]; }): ProcessedData {
    const prices: PriceData[] = data.prices.map(([timestamp, price]: [number, number]) => ({
        timestamp,
        price
    }));

    // Juntando todos os timestamps dos preços da moeda
    const timestamps: string[] = prices.map(priceData => {
        const date = new Date(priceData.timestamp);

        // Formatação da data e hora local
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    });

    // Juntando todos os preços da moeda
    const priceValues: number[] = prices.map(priceData => priceData.price);
    return {
        timestamps,
        prices: priceValues
    };
}
