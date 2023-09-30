import { useSelector } from "react-redux";
import { IProduct } from "../model";
import { useRarity } from "./rarity";

interface ISortByProps {
    allProducts: IProduct[]
    searchValue: string
    rangeValue?: number[]
}

export const useSortBy = ({ allProducts, searchValue, rangeValue }: ISortByProps) => {
    const filter = useSelector((state: any) => state.toolkit.rightFilter)
    const { rarity } = useRarity()
    let newArray = <IProduct[]>allProducts

    newArray = newArray.filter((item: IProduct) => item.title.toLowerCase().includes(searchValue.toLowerCase())) // Search

    if (rangeValue?.length) {
        newArray = newArray.filter((item: IProduct) => rangeValue[0] <= item.price.value && rangeValue[1] >= item.price.value) // Range
    }

    if (filter.sortBy === 'rarity') {
        return { products: newArray?.sort((a: IProduct, b: IProduct) => filter.sort ? rarity[b.rarity.title] - rarity[a.rarity.title] : rarity[a.rarity.title] - rarity[b.rarity.title]) } // Сортировка по раритетности
    } else if (filter.sortBy === 'price') {
        return { products: newArray?.sort((a: IProduct, b: IProduct) => filter.sortBy === 'price' && filter.sort ? b.price.value - a.price.value : a.price.value - b.price.value) } // Сортировка по цене
    }

    return { products: newArray };
}