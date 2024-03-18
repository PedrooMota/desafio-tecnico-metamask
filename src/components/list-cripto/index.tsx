"use client"

import { Crypto } from "@/@types";

import {
    TableBody,
    TableHead,
    TableRow,
} from "@/components/ui/table"

import { Link } from "react-router-dom";
import { getCryptos } from "@/data/fetch-coins-list";
import { useQuery } from "@tanstack/react-query";
import { TooltipList } from "./tooltip";

export function TableCrypto() {

    const { data: cryptos } = useQuery({
        queryKey: ['cryptos'],
        queryFn: getCryptos,
    })

    function formatarNumero(valor: number) {
        const simbolos = ["", "K", "M", "B", "T"];
        const numero = Math.abs(Number(valor));
        const indice = numero === 0 ? 0 : Math.floor(Math.log10(numero) / 3);
        const abreviacao = simbolos[indice];

        if (indice >= simbolos.length) {
            return numero.toLocaleString(undefined, { maximumFractionDigits: 2 }) + " " + abreviacao;
        }

        const valorFormatado = (numero / Math.pow(10, indice * 3)).toLocaleString(undefined, { maximumFractionDigits: 2 });
        return (valor < 0 ? '-' : '') + valorFormatado + ' ' + abreviacao;
    }
    return (
        <TableBody>
            {cryptos?.slice(0, 10).map((item: Crypto, index: number) => (
                <TableRow key={index} className="text-black dark:text-white font-medium cursor-pointer">
                    <TableHead className="text-center items-center w-[240px] flex gap-2"><img src={item.image} alt="Criptomoedas" className="w-8 h-8" /> {item.name} - {item.symbol.toUpperCase()}</TableHead>
                    <TableHead className="text-center font-bold">
                        <Link to={`/price/${item.id}`}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.current_price)}</Link> {/* Formatação do preço para dólares */}
                    </TableHead>
                    <TableHead className="text-center font-bold">
                        <Link to={`/price/${item.id}`}>{new Date(item.last_updated).toLocaleString()}</Link> {/* Formatação da data */}
                    </TableHead>

                    <TableHead className="text-center font-bold">
                        <Link to={`/price/${item.id}`}>{formatarNumero(item.market_cap)}</Link>
                    </TableHead>

                    <TableHead className="text-center">
                        <Link to={`/price/${item.id}`}>
                            <TooltipList />
                        </Link>
                    </TableHead>
                </TableRow>
            ))
            }
        </TableBody>
    )
}