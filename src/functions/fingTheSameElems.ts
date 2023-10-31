export function findTheSameElems(arr: any, searchElement: any) {
    return arr.reduce((count: any, element: any) => {
        if (element === searchElement) {
            return count + 1;
        }
        return count;
    }, 0);
}