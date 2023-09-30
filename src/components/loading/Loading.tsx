import React, { ReactNode, useEffect, useState } from 'react'
import { LoadingStyled } from './loading.styled';

interface ILoadingProps {
    children: any;
}

export const Loading:React.FC<ILoadingProps> = ({children}) => {
    
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return isLoading ? <LoadingStyled className="load">
            <div className="line" />
            <div className="line" />
            <div className="line" />
        </LoadingStyled> : children
}
