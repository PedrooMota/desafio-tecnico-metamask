import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Crypto } from '@/@types';

import { Loading } from '@/components/loading';
import { CalendarDateRangePicker } from '@/components/date-range-picker';

import { CardDadosHora } from '@/components/cards/dados-hora';
import { MetaMaskCard } from '@/components/cards/meta-mask-card';

import { SelectCoin } from '@/components/summary/dashboard-popover';

import WelcomeBanner from '@/components/partials/banner';
import { Select } from '@/components/ui/select';
import { HistoryTable } from '@/components/cards/history-table';
import { ProgressHighLow } from '@/components/cards/progress-high-low';

export default function Criptomoedas() {
    const params = useParams<{ id: string }>();

    const [crypto, setCrypto] = useState<Crypto>()
    const [coins, setCoins] = useState<string>('usd')

    useEffect(() => {
        async function getDataCrypto() {
            fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${coins}&ids=${params.id}`)
                .then(response => response.json())
                .then(data => {
                    setCrypto(data[0])
                })
                .catch(error => console.error('Erro ao recuperar os dados:', error));
        }
        getDataCrypto()
    }, [params, coins])

    return (
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <main>
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                    {/* Welcome banner */}
                    <WelcomeBanner name={crypto?.name as string} symbol={crypto?.symbol as string} image={crypto?.image as string} />

                    {/* Dashboard actions */}
                    <div className="sm:flex sm:justify-between sm:items-center mb-8">
                        <Select onValueChange={setCoins}>
                            <SelectCoin />
                        </Select>

                        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                            <CalendarDateRangePicker />
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-12 gap-4">

                        <Suspense fallback={<Loading />}>
                            <CardDadosHora id={params.id as string} coins={coins} name={crypto?.name as string} />
                        </Suspense>

                        <MetaMaskCard />
                    </div>

                    <div className="grid grid-cols-12 gap-4 mt-4">
                        <HistoryTable id={params.id as string} coins={coins} name={crypto?.name as string} />

                        <ProgressHighLow id={params.id as string} coins={coins} />
                    </div>
                </div>
            </main >
        </div >

        //         <div className="col-span-5 mt-6">
        //             <div className='justify-between'>
        //                 <span className='text-3xl font-bold'>Valor de {crypto?.symbol.toUpperCase()} de hoje</span>
        //                 <div className='mt-2'>
        //                     <span className=' font-semibold text-sm text-zinc-400'>
        //                         O valor em tempo real de {crypto?.name} é de
        //                         {
        //                             coins === 'usd' ? ' $' + crypto?.current_price.toFixed(2) + ' '
        //                                 : coins === 'eur' ? ' €' + crypto?.current_price.toFixed(2) + ' '
        //                                     : coins === 'brl' ? ' R$' + crypto?.current_price.toFixed(2) + ' '
        //                                         : ' ' + crypto?.current_price.toFixed(2) + ''
        //                         }
        //                         com uma capitalização de mercado atual de {market_cap}.
        //                         O volume de trading em 24 horas é de R$ {crypto?.high_24h.toFixed(2)}.
        //                         O valor de BTC para BRL é atualizado em tempo real.
        //                         Bitcoin está a -3.51% nas últimas 24 horas, com uma oferta em circulação de 19.66M.
        //                     </span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}