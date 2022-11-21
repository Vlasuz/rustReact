import React from 'react';

const HistoryTop = () => {
    return (
        <div className="section-history__top">
            <button className="section-history__all button_active">
                <p>Все</p>
            </button>
            <button className="section-history__push">
                <p>Пополнено</p>
                <div className="cost">$ 1479<span>,00</span>
                </div>
            </button>
            <button className="section-history__pull">
                <p>Выведено с сайта</p>
                <div className="cost">$ 2618<span>,50</span>
                </div>
            </button>
        </div>
    );
};

export default HistoryTop;