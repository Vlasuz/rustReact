import React from 'react';
import {NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <section className={'page-not-found'}>
            <h1>Этой страницы еще нет</h1>
            <p>Возможно ты попал сюда случайно, но все же стоит вернуться обратно</p>
            <NavLink to={'/'}>
                Вернутся на главную
            </NavLink>
        </section>
    );
};

export default NotFound;