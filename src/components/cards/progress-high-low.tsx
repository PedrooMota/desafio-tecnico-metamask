import { fetchCoinData } from "@/data/fetch-high-low";
import { useEffect, useState } from "react"

import { Crypto } from "@/@types";
import { TooltipCard } from "../tooltip";

interface Props {
    id: string;
    coins: string;
}

export function Currency(value: number, currency: string): string {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: currency
    });

    if (value >= 1e12) {
        return formatter.format(value / 1e12) + "T";
    } else if (value >= 1e9) {
        return formatter.format(value / 1e9) + "B";
    } else if (value >= 1e6) {
        return formatter.format(value / 1e6) + "M";
    } else {
        return formatter.format(value);
    }
}

export function ProgressHighLow({ id, coins }: Props) {

    const [highestPrice, setHighestPrice] = useState<number>(0);
    const [lowestPrice, setLowestPrice] = useState<number>(0);
    const [totalVolume, setTotalVolume] = useState<number>(0);
    const [market_cap, setMarketCap] = useState<number>(0);
    const [market_cap_rank, setMarketCapRank] = useState<number>(0);

    useEffect(() => {
        async function fetch() {
            const {
                high_24h,
                low_24h,
                market_cap,
                total_volume,
                market_cap_rank
            }: Crypto = await fetchCoinData(id, coins)

            setHighestPrice(high_24h)
            setLowestPrice(low_24h)
            setTotalVolume(total_volume)
            setMarketCap(market_cap)
            setMarketCapRank(market_cap_rank)
        }
        fetch()
    }, [id, coins]);

    return (
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
            <div className="px-5 py-4 gap-2">
                <span className="text-sm text-zinc-700 dark:text-slate-300 text-center items-center pr-1">
                    Mínimo e Máximo em 24hs
                </span>
                <TooltipCard text="O preço mais alto e mais baixo pago por ativo em 24 horas." />
                <div className="flex items-center text-center gap-2 ">
                    <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-400">{Currency(lowestPrice, coins)}</p>
                    <div className="bg-emerald-500 w-[135px] h-2 border-b">
                        <div className="border-r-8 w-[60px] h-2 bg-red-500"></div>
                    </div>
                    <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-400">{Currency(highestPrice, coins)}</p>
                </div>
            </div>
            <div className="flex gap-2">
                <div className="px-5 py-4">
                    <span className="text-sm text-zinc-700 dark:text-slate-300 text-center items-center pr-1">
                        Volume (24 horas)
                    </span>
                    <TooltipCard
                        text="O valor total do dólar de todas as transações deste ativo nas últimas 24 horas."
                    />

                    <div className="flex items-center text-center">
                        <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-400">{Currency(totalVolume, coins)}</p>
                    </div>
                </div>

                <div className="px-5 py-4">
                    <span className="text-sm text-zinc-700 dark:text-slate-300 text-center items-center pr-1">
                        Capitalização de Mercado
                    </span>
                    <TooltipCard
                        text="A capitalização de mercado é calculada ao multiplicar a oferta em circulação do ativo pelo respetivo preço atual."
                    />

                    <div className="flex items-center text-center">
                        <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-400">{Currency(market_cap, coins)}</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-2">
                <div className="px-5 py-4">
                    <span className="text-sm text-zinc-700 dark:text-slate-300 text-center items-center pr-1">
                        Capitalização de Mercado <br />Totalmente Diluída
                    </span>
                    <TooltipCard
                        text="O número total de moedas que serão criadas para a criptomoeda, semelhante a
                        ações totalmente diluídas no mercado de valores mobiliários. Se estes dados
                        não forem fornecidos ou verificados pela CoinMarketCap, o fornecimento
                        máximo é apresentado como “--”."
                    />
                    <div className="flex items-center text-center">
                        <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-400">{Currency(totalVolume, coins)}</p>
                    </div>
                </div>

                <div className="px-5 py-4">
                    <span className="text-sm text-zinc-700 dark:text-slate-300 text-center items-center pr-1">
                        Popularidade
                    </span>
                    <TooltipCard
                        text="A popularidade baseia-se na capitalização de mercado relativa dos ativos."
                    />
                    <div className="flex items-center text-center">
                        <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-400">
                            #{market_cap_rank}
                        </p>
                    </div>
                </div>
            </div >

        </div >
    )
}

