export function notDefined(str: string): boolean {
    return !str;
} 

export function spaces(str: string): boolean {
    return str.includes(' ');
}

export function negativeNumber(nbr: number): boolean {
    return nbr < 0;
} 