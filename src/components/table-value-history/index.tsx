// import {
//     TableBody,
//     TableHead,
//     TableRow,
// } from "@/components/ui/table"
// import { fetchBitcoinPrices } from "@/data/fetch-bitcoin-prices";
// import { useEffect, useState } from "react";

// interface Props {
//     id: string;
//     coins: string;
// }

// export function TableValueHistory({ id, coins }: Props) {

//     useEffect(() => {
//         async function fetchCoins() {
//             const data = await fetchBitcoinPrices(id, coins, toggleMoment)
//             const res = processPriceData(data)
//             setTimestamps(res.timestamps)
//             setCrypto(res.prices)
//         }

//         fetchCoins()
//     }, [id, coins])

//     const [price, setPrice] = useState([])

//     // https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency}&days=${interval}
//     return (
//         <TableBody>
//         </TableBody>
//     )
// }

