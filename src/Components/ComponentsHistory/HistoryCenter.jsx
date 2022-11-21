import React from 'react';

const HistoryCenter = () => {
    return (
        <div className="section-history__center">
            <ul className="section-history__switcher">
                {/*<li>*/}
                {/*    <a href="#">Предметами</a>*/}
                {/*</li>*/}
                {/*<li className="li_active">*/}
                {/*    <a href="#">Пин-коды</a>*/}
                {/*</li>*/}
            </ul>
            <div className="section-history__sort">
                <span>Сортировка:</span>
                <div className="select">
                    <select>
                        <option>По цене</option>
                        <option>По дате</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default HistoryCenter;