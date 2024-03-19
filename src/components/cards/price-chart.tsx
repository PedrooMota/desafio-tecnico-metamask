import { useEffect, useState } from "react";
import OperationAccumulatedChart from "../charts/operation-value";

import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"

import { fetchBitcoinPrices } from "@/data/fetch-bitcoin-prices";
import { Currency } from "@/data/currency-function";
import { PriceChange } from "@/data/price-change-function";
import { processPriceData } from "@/data/process-price-data";

interface Props {
    id: string;
    coins: string;
    price: number
}

export function PriceChart({ id, coins, price }: Props) {

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

            const formattedChange = PriceChange(data)
            setPriceChange(formattedChange)
        }

        fetchCoins()
    }, [id, toggleMoment, coins])

    return (
        <div className="flex flex-col col-span-full sm:col-span-8 xl:col-span-8 shadow-lg rounded-sm h-[350px] mb-4 ">
            <header className="px-5 py-4 flex items-center">
                <h2 className="font-semibold text-3xl text-slate-800 dark:text-slate-100">
                    {Currency(price, coins)} {' '}
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