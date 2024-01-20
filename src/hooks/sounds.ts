import { useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setSound } from "../redux/toolkitSlice"

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
        if (!sound || value === 0) return;

        audioBlock.current.volume = value / 100
        audioBlock.current.currentTime = 0
        audioBlock.current.play()
        setTimeout(() => {
            dispatch(setSound(''))
        }, 1)

    }, [sound])
    
    return {audioBlock, sound}
}