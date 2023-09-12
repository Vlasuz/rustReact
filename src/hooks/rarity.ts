import { IRarity } from "../model"

export const useRarity = () => {
    const rarity: IRarity = {
        "green": 1,
        "blue": 2,
        "red": 3,
    }

    return {rarity}
}