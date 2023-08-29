import {useEffect, useState} from "react";

export function useMusicVolume() {
    
    const [value, setValue] = useState(0)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(+event.target.value)
    }

    const handleSwitch = () => {
        if(value > 0) {
            setValue(0)
        } else {
            setValue(50)
        }
    }

    return {value, handleSwitch, handleChange}
}