import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export const useCrateRarity = ({crate}: any) => {

    const crateRarities = useSelector((state: any) => state.toolkit.crateRarities)
    const [crateRarity, setCrateRarity] = useState({})

    useEffect(() => {
        if(!crate || !Object.keys(crate).length) return

        setCrateRarity(crateRarities?.filter((item: any) => crate?.price > item.price_from && crate?.price < item.price_to)[0])
    }, [crateRarities, crate])


    return {crateRarity}
}