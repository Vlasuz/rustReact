import React, {useEffect, useState} from 'react'
import { LoadingStyled } from '../loading/loading.styled';
import {LoaderStyled} from "./Loader.styled";

interface ILoaderProps {

}

export const Loader: React.FC<ILoaderProps> = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        fetchData()
            .then(() => {
                setIsLoading(false);
            })
            .catch((error: any) => {
                console.error('Ошибка загрузки данных:', error);
                setIsLoading(false);
            });
    }, [])

    const fetchData = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // @ts-ignore
                resolve();
            }, 1000);
        });
    };

    return (
        <LoaderStyled className={!isLoading ? " preloader_hide" : ""}>
            <div className="section-fight__center">
                <div className="center__loading">
                    <LoadingStyled className="load">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </LoadingStyled>
                    <span>Загрузка...</span>
                </div>
            </div>
        </LoaderStyled>
    )
}
