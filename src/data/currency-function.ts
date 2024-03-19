export function Currency(value: number, currency: string): string {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: currency
    });

    if (value >= 1e12) {
        return formatter.format(value / 1e12) + "T";
    } else if (value >= 1e9) {
        return formatter.format(value / 1e9) + "B";
    } else if (value >= 1e6) {
        return formatter.format(value / 1e6) + "M";
    } else {
        return formatter.format(value) + ' ';
    }
}