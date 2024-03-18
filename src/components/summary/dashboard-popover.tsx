
import {
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectCoin() {

    return (
        <>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione a moeda..." />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Moedas</SelectLabel>
                    <SelectItem value="usd">USD - $</SelectItem>
                    <SelectItem value="eur">EUR - €</SelectItem>
                    <SelectItem value="brl">BRL - R$</SelectItem>
                    <SelectItem value="inr">INR - ₹</SelectItem>
                </SelectGroup>
            </SelectContent>
        </>
    )
}
