import { useEffect, useState } from "react";

import { ProcessedData, PriceData } from "@/@types";
import OperationAccumulatedChart from "../charts/operation-value";

import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { fetchBitcoinPrices } from "@/data/fetch-bitcoin-prices";

function processPriceData(data: { prices: [number, number][]; }): ProcessedData {
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

interface Props {
    id: string;
    coins: string;
    name: string;
}

export function CardDadosHora({ id, coins, name }: Props) {

    const [crypto, setCrypto] = useState<number[]>([])
    const [timestamps, setTimestamps] = useState<string[]>([])
    const [toggleMoment, setToggleMoment] = useState<string>('1')

    const [priceChange, setPriceChange] = useState<string>('')

    useEffect(() => {
        async function fetchCoins() {
            const data = await fetchBitcoinPrices(id, coins, toggleMoment)
            const res = processPriceData(data)
            setTimestamps(res.timestamps)
            setCrypto(res.prices)

            if (data < 2) {
                return null
            }

            const firstPrice = data.prices[0][1];
            const lastPrice = data.prices[data.prices.length - 1][1];
            const priceChange = ((lastPrice - firstPrice) / firstPrice) * 100;
            const formattedChange = priceChange.toFixed(2);
            setPriceChange(formattedChange)
        }

        fetchCoins()
    }, [id, toggleMoment, coins])

    // bg-white dark:bg-slate-800
    // border border-slate-200 dark:border-slate-700
    return (
        <div className="flex flex-col col-span-full sm:col-span-8 xl:col-span-8 shadow-lg rounded-sm h-[350px] ">
            <header className="px-5 py-4 flex items-center">
                <h2 className="font-semibold text-2xl text-slate-800 dark:text-slate-100">
                    Preço do {name} {' '}
                    {
                        Number(priceChange) < 0 ? (
                            <span className="text-red-500">
                                {priceChange}%
                            </span>
                        ) : (
                            <span className="text-emerald-500">
                                {priceChange}%
                            </span>
                        )
                    }
                </h2>
            </header>
            <div className="text-base font-medium">
                <ToggleGroup type="single" defaultValue="1" onValueChange={setToggleMoment} className="mt-2">
                    <ToggleGroupItem value="1" aria-label="24 horas">
                        1D
                    </ToggleGroupItem>
                    <ToggleGroupItem value="7" aria-label="7 dias">
                        7D
                    </ToggleGroupItem>
                    <ToggleGroupItem value="30" aria-label="1 mês">
                        1M
                    </ToggleGroupItem>
                    <ToggleGroupItem value="90" aria-label="3 meses">
                        3M
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
            <OperationAccumulatedChart
                prices={crypto}
                timestamps={timestamps}
            />
        </div>
    )
}