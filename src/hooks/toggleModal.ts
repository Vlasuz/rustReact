import { useEffect } from "react";

interface IToggleModalProps {
    setState: any
    block: string[]
}

export const useToggleModal = ({ setState, block }: IToggleModalProps) => {
    
    document.addEventListener('click', function (e: any) {
        if (e.target.closest(block[0]) === null && e.target.closest(block[1]) === null && e.target.closest(block[2]) === null) {
            setState(false)
        }
    })

}