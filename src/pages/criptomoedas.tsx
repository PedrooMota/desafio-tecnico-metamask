import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Crypto } from '@/@types';

import { Loading } from '@/components/loading';
import { CalendarDateRangePicker } from '@/components/date-range-picker';

import { PriceChart } from '@/components/cards/price-chart';
import { MetaMaskCard } from '@/components/cards/meta-mask-card';

import { SelectCoin } from '@/components/dashboard-popover';

import WelcomeBanner from '@/components/banner';
import { Select } from '@/components/ui/select';
import { BitcoinNews } from '@/components/cards/history-table';
import { ProgressHighLow } from '@/components/cards/progress-high-low';
import { fetchCoinData } from '@/data/fetch-high-low';

export default function Criptomoedas() {

    const params = useParams<{ id: string }>();

    const [crypto, setCrypto] = useState<Crypto>()
    const [coins, setCoins] = useState<string>('usd')

    document.title = `Dashboard | ${crypto?.name}`

    useEffect(() => {
        async function getDataCrypto() {
            const data = await fetchCoinData(params.id as string, coins)
            setCrypto(data)
        }
        getDataCrypto()
    }, [params, coins])

    return (
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                <WelcomeBanner name={crypto?.name as string} symbol={crypto?.symbol as string} image={crypto?.image as string} />

                <div className="sm:flex sm:justify-between sm:items-center mb-8">
                    <Select onValueChange={setCoins}>
                        <SelectCoin />
                    </Select>

                    <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2 mt-2">
                        <CalendarDateRangePicker />
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4">

                    <Suspense fallback={<Loading />}>
                        <PriceChart id={params.id as string} coins={coins} price={crypto?.current_price as number} />
                    </Suspense>

                    <MetaMaskCard />
                </div>

                <div className="grid grid-cols-12 gap-4 mt-4">
                    <BitcoinNews
                        currency={crypto}
                        coins={coins}
                    />

                    <ProgressHighLow id={params.id as string} coins={coins} />
                </div>
            </div>
        </div >
    );
}