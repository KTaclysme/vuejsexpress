export function notDefined(str: string): boolean {
    return !str;
} 

export function spaces(str: string): boolean {
    return str.includes(' ');
}

export function negativeNumber(nbr: number): boolean {
    return nbr < 0;
} 

export function areSameStrings(str1: string, str2: string): boolean {
    return str1.trim().toLowerCase() === str2.trim().toLowerCase();
}

export function isArrayEmpty(arr: any[]): boolean {
    return arr.length === 0;
}
