export const parseToNumberOrUndefined = (input: string): number | undefined => {
    return input !== null && input !== undefined && !isNaN(Number(input)) ? parseInt(input) : undefined;
}

