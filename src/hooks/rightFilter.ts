import { useEffect, useRef, useState } from "react"
import { IFilterData } from "../model"
import { useDispatch } from "react-redux"
import { setRightFilter } from "../redux/toolkitSlice"

export const useRightFilter = () => {
    const radioBlock = useRef(null)
    const [labelSelect, setLabelSelect] = useState<String>('price')
    const [value, setValue] = useState<boolean>(false)
    const dispatch = useDispatch()

    const handleSelect = (type: String) => {
        setLabelSelect(type)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked)
    }

    useEffect(() => {
        dispatch(setRightFilter({
            sortBy: labelSelect,
            sort: value,
        }))
    }, [value, labelSelect])

    return {radioBlock, handleSelect, handleChange, labelSelect}
}