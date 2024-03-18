import { useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

// bg - white dark: bg - slate - 800
import { CryptoData } from "@/@types";
import { displayCoinComparisonData } from "@/data/fetch-list-currencies";

export function HistoryTable({ id, name, coins }: CryptoData) {

    console.log(id)

    // const [historyOne, setHistoryOne] = useState<HistoryProps>();

    useEffect(() => {
        async function fetchHistory() {
            try {
                await displayCoinComparisonData(coins);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchHistory()
    }, [coins])

    return (
        <div className="col-span-full xl:col-span-8 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
            <header className="px-5 py-4 ">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100 text-xl">Histórico de preço do {name} é de {coins.toLocaleUpperCase()}</h2>
            </header>
            <div className="p-3">
                {/* Table */}
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="text-white font-medium bg-zinc-950">
                                <TableCell className="text-left">Comparação de datas</TableCell>
                                <TableCell className='text-center'>Alteração de valor</TableCell>
                                <TableCell className='text-center'>Variação de %</TableCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="text-black dark:text-white font-medium ">
                                <TableHead className="text-left">Hoje</TableHead>
                                <TableHead className="text-center">awdwadaw</TableHead>
                                <TableHead className="text-center">dawdaw</TableHead>
                            </TableRow>

                            <TableRow className="text-black dark:text-white font-medium ">
                                <TableHead className="text-left">30 dias</TableHead>
                                <TableHead className="text-center">aasdad</TableHead>
                                <TableHead className="text-center">awdwad</TableHead>
                            </TableRow>

                            <TableRow className="text-black dark:text-white font-medium">
                                <TableHead className="text-left">60 dias</TableHead>
                                <TableHead className="text-center">asdad</TableHead>
                                <TableHead className="text-center">awda</TableHead>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}