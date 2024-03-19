import { TableCrypto } from '@/components/list-cripto';
import { Table, TableCaption, TableCell, TableHeader, TableRow } from '@/components/ui/table';


export function Home() {

  document.title = 'Mercado | Home'

  return (
    <>

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <div className="grid grid-cols-12 gap-4 mt-4">
            <div className="col-span-full xl:col-span-12 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
              <div className="px-5 py-4 ">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100 text-xl">Lista de Moedas</h2>
              </div>
              <div className="p-3">
                <div className="overflow-x-auto">
                  <Table>
                    <TableCaption className="text-black dark:text-white">Lista de criptomoedas</TableCaption>
                    <TableHeader>
                      <TableRow className="text-black dark:text-white font-medium">
                        <TableCell className="text-left items-center w-[240px] ">Nome da criptomoeda</TableCell>
                        <TableCell className='text-center'>Preço(USD)</TableCell>
                        <TableCell className='text-center'>Última atualização</TableCell>
                        <TableCell className='text-center'>Cap. do mercado</TableCell>
                        <TableCell className='text-center'>Ações</TableCell>
                      </TableRow>
                    </TableHeader>
                    <TableCrypto />
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}