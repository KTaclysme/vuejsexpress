export function areSameStrings(str1: string, str2: string): boolean {
    return str1.trim().toLowerCase() === str2.trim().toLowerCase();
}

export function isArrayEmpty(arr: any[]): boolean {
    return arr.length === 0;
}
