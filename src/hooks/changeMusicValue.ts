import {useEffect, useState} from "react";
import setCookie from "../functions/setCookie";
import getCookies from "../functions/getCookie";

export function useMusicVolume() {
    
    const [value, setValue] = useState(0)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(+event.target.value)
        setCookie("volume_music_rust", JSON.stringify(+event.target.value))
    }

    useEffect(() => {
        if(getCookies("volume_music_rust")) {
            return setValue(getCookies("volume_music_rust") ? +JSON.parse(`${getCookies("volume_music_rust")}`) : 50);
        }
    }, [])

    const handleSwitch = () => {
        if(value > 0) {
            setValue(0)
        } else {
            setValue(getCookies("volume_music_rust") ? +JSON.parse(`${getCookies("volume_music_rust")}`) : 50)
        }
    }

    return {value, handleSwitch, handleChange}
}