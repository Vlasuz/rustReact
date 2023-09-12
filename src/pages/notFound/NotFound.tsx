import React from 'react'
import { NotFoundStyle } from './notFound.styled'
import { NavLink } from 'react-router-dom'

interface INotFoundProps {

}

export const NotFound: React.FC<INotFoundProps> = () => {

    return (
        <NotFoundStyle className="tech-work">
            <h1>Этой страницы еще нет</h1>
            <p>Возможно ты попал сюда случайно, но все же стоит вернуться обратно</p>
            <NavLink to={"/"}>Вернутся на сайт</NavLink>
        </NotFoundStyle>
    )
}
