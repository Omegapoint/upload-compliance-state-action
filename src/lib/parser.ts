export const parseToNumberOrUndefined = (input: string): number | undefined => {
    return isNaN(Number(input)) && input !== null && input !== undefined ? parseInt(input) : undefined;
}

