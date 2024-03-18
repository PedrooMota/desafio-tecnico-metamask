import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { List } from "lucide-react"

export function TooltipList() {

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger><List className="w-4 h-4 text-emerald-500" /></TooltipTrigger>
        <TooltipContent>
          <p>Detalhes</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )

}