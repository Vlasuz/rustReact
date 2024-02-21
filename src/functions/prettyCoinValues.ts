export const prettyCoinValues = (num: number | undefined) => {
    const newNum = num && num / 100;

    return newNum?.toLocaleString()
}