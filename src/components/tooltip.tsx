interface Props {
    text: string
}

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export function TooltipCard({ text }: Props) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger><Info className="w-4 h-4 text-emerald-500" /></TooltipTrigger>
                <TooltipContent>
                    <p className="text-slate-300 dark:text-zinc-700 ">
                        {text}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}