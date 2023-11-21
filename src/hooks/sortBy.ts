import { useSelector } from "react-redux";
import {ICrate, IProduct, IRarity} from "../model";
import { useRarity } from "./rarity";

interface ISortByProps {
    allProducts: IProduct[] | ICrate[]
    searchValue: string
    rangeValue?: number[]
}

export const useSortBy = ({ allProducts, searchValue, rangeValue }: ISortByProps) => {

    const filter = useSelector((state: any) => state.toolkit.rightFilter)
    const { rarity } = useRarity()
    let newArray = <IProduct[]>allProducts

    newArray = newArray.filter((item: any) => item?.title ? item?.title.toLowerCase().includes(searchValue.toLowerCase()) : item?.name.toLowerCase().includes(searchValue.toLowerCase())) // Search


    if (rangeValue?.length) {

        if(newArray[0]?.price?.value) {
            newArray = newArray.filter((item: any) => rangeValue[0] <= item?.price?.value && rangeValue[1] >= item?.price?.value) // Range
        } else if (newArray[0]?.price) {
            newArray = newArray.filter((item: any) => rangeValue[0] <= item?.price && rangeValue[1] >= item?.price) // Range
        }

    }

    if(newArray[0]?.price?.value) {
        if (filter.sortBy === 'rarity') {
            return { products: newArray?.sort((a: IProduct, b: IProduct) => filter.sort ? rarity[b.rarity.title] - rarity[a.rarity.title] : rarity[a.rarity.title] - rarity[b.rarity.title]) } // Сортировка по раритетности
        } else if (filter.sortBy === 'price') {
            return { products: newArray?.sort((a: IProduct, b: IProduct) => filter.sortBy === 'price' && filter.sort ? b.price.value - a.price.value : a.price.value - b.price.value) } // Сортировка по цене
        }
    } else if (newArray[0]?.price) {
        if (filter.sortBy === 'rarity') {
            // return { products: newArray?.sort((a: IProduct, b: IProduct) => filter.sort ? rarity[b.rarity.title] - rarity[a.rarity.title] : rarity[a.rarity.title] - rarity[b.rarity.title]) } // Сортировка по раритетности
        } else if (filter.sortBy === 'price') {
            return { products: newArray?.sort((a: any, b: any) => filter.sortBy === 'price' && filter.sort ? b.price - a.price : a.price - b.price) } // Сортировка по цене
        }
    }

    return { products: newArray };
}