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

    if (rangeValue) newArray = newArray.filter((item: IProduct) => rangeValue[0] <= item.cost && rangeValue[1] >= item.cost) // Range

    if (filter.sortBy === 'rarity') {
        return { products: newArray?.sort((a: IProduct, b: IProduct) => filter.sort ? rarity[b.rarity] - rarity[a.rarity] : rarity[a.rarity] - rarity[b.rarity]) } // Сортировка по раритетности
    } else if (filter.sortBy === 'price') {
        return { products: newArray?.sort((a: IProduct, b: IProduct) => filter.sortBy === 'price' && filter.sort ? b.cost - a.cost : a.cost - b.cost) } // Сортировка по цене
    }

    return { products: newArray };
}