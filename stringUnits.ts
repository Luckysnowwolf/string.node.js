export const add =(a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;
export const reverse = (str: string): string => {
    return str.split('').reverse().join('');
};
export const countCharacters = (str: string): number => {
    return str.length;
};