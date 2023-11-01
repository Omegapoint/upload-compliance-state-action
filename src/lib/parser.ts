export const parseToNumberOrUndefined = (input: string): number | undefined => {
    const number: number = Number(input);
    return input === null || input === undefined || input === ' ' || isNaN(number) ? undefined : parseInt(input);
}

