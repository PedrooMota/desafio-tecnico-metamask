import { Currency } from "@/data/currency-function";

interface PropsBitcoinNews {
    name: string;
    symbol: string;
    current_price: number;
    coins: string;
    market_cap: number;
    high_24h: number
}

export function BitcoinNews({ symbol, name, current_price, coins, market_cap, high_24h }: PropsBitcoinNews) {

    return (
        <div className="col-span-full xl:col-span-8 shadow-lg">
            <div className="p-3">
                <div className="overflow-x-auto">
                    <div className="col-span-5 mt-6">
                        <div className='justify-between'>
                            <span className='text-3xl font-bold'>Valor de {symbol && symbol.toLocaleUpperCase()} de hoje</span>
                            <div className='mt-2'>
                                <span className=' font-semibold text-sm text-zinc-400'>
                                    O valor em tempo real de {name} é de {current_price ? Currency(current_price, coins) : '00,00 '}
                                    com uma capitalização de mercado atual de {Currency(market_cap, coins)}.
                                    O volume de trading em 24 horas é de {Currency(high_24h, coins)}.
                                    O valor de BTC para BRL é atualizado em tempo real.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}