import { useMetaMask } from "@/providers/useMetaMask";
import { MetaMaskError } from "../meta-mask-error";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { formatAddress } from "@/utils";

export function MetaMaskCard() {

    const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask()

    return (
        <>
            <div className="flex flex-col col-span-full sm:col-span-4 sm:items-center xl:col-span-4 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
                <div className="px-3 py-4 text-center ">
                    <h2 className="font-semibold text-slate-800 dark:text-slate-100 text-2xl">
                        {
                            hasProvider && wallet.accounts.length > 0 ? 'Você está conectado!'
                                : 'Possui uma conta na MetaMask?'
                        }
                    </h2>
                    <span className="text-sm font-medium text-zinc-800 dark:text-zinc-400">
                        {
                            !hasProvider ? 'Caso você não possua a extensão do MetaMask em seu navegador, será necessário instalá-lo.'
                                : 'Entre com sua conta para poder visualizar sua carteira.'
                        }
                    </span>
                </div>
                <div className="text-base font-medium mb-4">
                    {
                        !hasProvider &&
                        <div className='flex gap-2 ml-auto items-center justify-center'>
                            <span className='text-slate-300 dark:text-zinc-950'></span>
                            <Button className='bg-emerald-500 text-lg text-zinc-950 dark:text-slate-200 hover:bg-emerald-600 rounded-lg px-5 py-5'>
                                <Link to="https://metamask.io" target="_blank" rel="noreferrer">
                                    Vincular
                                </Link>
                            </Button>
                        </div>
                    }

                    {window.ethereum?.isMetaMask && wallet.accounts.length < 1 &&
                        <div className="px-5 py-4 flex ml-auto items-center justify-center">
                            <Button
                                className='bg-emerald-500 text-lg text-zinc-950 dark:text-slate-200 hover:bg-emerald-600 rounded-lg px-5 py-5'
                                disabled={isConnecting}
                                onClick={connectMetaMask}
                            >
                                Conectar ao MetaMask
                            </Button>
                        </div>
                    }
                    {hasProvider && wallet.accounts.length > 0 &&

                        <div className="px-5 py-4 border-slate-100 dark:border-slate-700 ">
                            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
                                Abrir em seu navegador a etherscan: <a
                                    href={`https://etherscan.io/address/${wallet}`}
                                    target="_blank"
                                    data-tooltip="Open in Block Explorer" rel="noreferrer"
                                >
                                    {formatAddress(wallet.accounts[0])}
                                </a>
                            </h2>
                            <span className="text-sm font-medium text-zinc-800 dark:text-zinc-400">
                                {wallet.accounts.length > 0 && (
                                    <div className="flex gap-2">
                                        <span>Seu saldo na carteira: {' '} </span>
                                        <p className="text-emerald-500">{wallet.balance}</p>
                                    </div>
                                )}
                            </span>
                        </div>
                    }
                </div >
            </div>
            <MetaMaskError />
        </>
    )
}