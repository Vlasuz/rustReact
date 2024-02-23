import { useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setSound } from "../redux/toolkitSlice"
import getCookies from "../functions/getCookie";

interface useSoundsProps {
    value: number
    music?: string
}

export const useSounds = ({value, music}: useSoundsProps) => {
    const toolkitSound = useSelector((state: any) => state.toolkit.sound)
    const sound = music ?? toolkitSound;
    const audioBlock: any = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(setSound(''))
        }, 100)
        if (!sound || (getCookies("volume_music_rust") ? +JSON.parse(`${getCookies("volume_music_rust")}`) : value) === 0) return;

        audioBlock.current.volume = (getCookies("volume_music_rust") ? +JSON.parse(`${getCookies("volume_music_rust")}`) : value) / 100
        audioBlock.current.currentTime = 0
        audioBlock.current.play()

    }, [sound])
    
    return {audioBlock, sound}
}