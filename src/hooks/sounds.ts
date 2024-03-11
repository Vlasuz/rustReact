import {useRef, useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {setSound} from "../redux/toolkitSlice"
import getCookies from "../functions/getCookie";

interface useSoundsProps {
    value: number
    music?: string
}

export const useSounds = ({value, music}: useSoundsProps) => {
    const toolkitSound = useSelector((state: any) => state.toolkit.sound)
    const audioBlock: any = useRef(null)
    const dispatch = useDispatch()
    const [isLoad, setIsLoad] = useState(false)
    const [currentSound, setCurrentSound] = useState<any>()

    useEffect(() => {
        setCurrentSound(toolkitSound ?? music)
    }, [toolkitSound, music])

    useEffect(() => {
        setTimeout(() => {
            dispatch(setSound(''))
            setCurrentSound('')
        }, 1)

        if (!isLoad) return;

        if (!currentSound || (getCookies("volume_music_rust") ? +JSON.parse(`${getCookies("volume_music_rust")}`) : value) === 0) return;

        audioBlock.current.volume = (getCookies("volume_music_rust") ? +JSON.parse(`${getCookies("volume_music_rust")}`) : value) / 100
        audioBlock.current.currentTime = 0
        audioBlock.current.play()

    }, [currentSound])

    useEffect(() => {
        setTimeout(() => {
            setIsLoad(true)
        }, 1000)
    }, [])

    return {audioBlock, sound: currentSound}
}