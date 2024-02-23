import {useEffect, useState} from "react";
import setCookie from "../functions/setCookie";
import getCookies from "../functions/getCookie";

export function useMusicVolume(setValue: any) {

    // const [value, setValue] = useState(valueCookie ?? 0)

    // console.log(value, valueCookie)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(+event.target.value)
        setCookie("volume_music_rust", JSON.stringify(+event.target.value))
    }

    // useEffect(() => {
    //     setValue(valueCookie)
    // }, [valueCookie])

    // useEffect(() => {
    //     setCookie("volume_music_rust", JSON.stringify(value))
    // }, [value])

    // const handleSwitch = () => {
    //     if (value > 0) {
    //         setValue(0)
    //         setCookie("volume_music_rust", JSON.stringify(0))
    //     } else {
    //         setValue(50)
    //         setCookie("volume_music_rust", JSON.stringify(50))
    //     }
    // }
    // console.log(value, getCookies("volume_music_rust"))

    return {handleChange}
}