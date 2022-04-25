export function round(a: string): string {
    if (Number(a) >= 0.01 || Number(a) < 0) {
        return Number(a).toFixed(2).replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ',');
    }
    return Number(a).toFixed(6)


}