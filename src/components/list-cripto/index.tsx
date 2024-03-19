import { Crypto } from "@/@types";
import { Link } from "react-router-dom";

import {
    TableBody,
    TableHead,
    TableRow,
} from "@/components/ui/table"

import { getCryptos } from "@/data/fetch-coins-list";
import { Currency } from "@/data/currency-function";

import { useQuery } from "@tanstack/react-query";
import { TooltipList } from "./tooltip";
import { Loading } from "../loading";
import { Suspense } from "react";

export function TableCrypto() {

    const { data: currency } = useQuery({
        queryKey: ['currency'],
        queryFn: getCryptos,
    })

    return (
        <TableBody>
            <Suspense fallback={<Loading />}>
                {currency?.slice(0, 10).map((item: Crypto, index: number) => (
                    <TableRow key={index} className="text-black dark:text-white font-medium cursor-pointer">
                        <TableHead className="text-center items-center w-[240px] flex gap-2"><img src={item.image} alt="Criptomoedas" className="w-8 h-8" /> {item.name} - {item.symbol.toUpperCase()}</TableHead>
                        <TableHead className="text-center font-bold">
                            <Link to={`/price/${item.id}`}>
                                {Currency(item.current_price, 'usd')}
                            </Link>
                        </TableHead>
                        <TableHead className="text-center font-bold">
                            <Link to={`/price/${item.id}`}>
                                {new Date(item.last_updated).toLocaleString()}
                            </Link>
                        </TableHead>

                        <TableHead className="text-center font-bold">
                            <Link to={`/price/${item.id}`}>
                                {Currency(item.market_cap, 'usd')}
                            </Link>
                        </TableHead>

                        <TableHead className="text-center">
                            <Link to={`/price/${item.id}`}>
                                <TooltipList />
                            </Link>
                        </TableHead>
                    </TableRow>
                ))
                }
            </Suspense>
        </TableBody>
    )
}