import React from 'react';
import StatsTrue from "./StatsTrue";

const Stats = ({title, stats}) => {
    return (
        <div className={stats ? 'stats' : 'stats stats_disabled'}>
            <h3>{title}</h3>
            {stats ? <StatsTrue /> : <p>Нет данных</p>}
        </div>
    );
};

export default Stats;