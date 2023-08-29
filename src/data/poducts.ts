import { IProduct } from "../model"
import skin from './../assets/images/skin.png'

export const products: IProduct[] = [
    {
        id: '123',
        count: 1,
        image: skin,
        cost: 200,
        rarity: "green"
    },
    {
        id: '1233',
        count: 1,
        image: skin,
        cost: 220,
        rarity: "red"
    },
]