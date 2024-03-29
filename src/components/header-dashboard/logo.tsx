import { Coins } from "lucide-react";

export function Logo() {
    return (
        <div className="flex items-center text-center gap-8 p-2">
            <span className="w-8 h-8 flex items-center justify-center ml-3 text-2xl font-bold">
                Finance
            </span>
            <Coins className="w-6 h-6 text-emerald-600" />
        </div>
    )
}