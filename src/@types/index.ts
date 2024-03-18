export interface PriceData {
    timestamp: number;
    price: number;
}

export interface ProcessedData {
    timestamps: string[];
    prices: number[];
}

export interface CryptoData {
    id: string;
    coins: string;
    name: string;
}

export interface Crypto {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    last_updated: string;
    market_cap: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_rank: number;
}
