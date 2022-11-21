import React from 'react';
import StatsTrue from "./StatsTrue";

const Stats = (props) => {
    return (
        <div className={props.count > 0 ? 'stats' : 'stats stats_disabled'}>
            <h3>{props.title}</h3>
            {props.count > 0 ? <StatsTrue greenStats={props.greenStats} count={props.count} /> : <p>Нет данных</p>}
        </div>
    );
};

export default Stats;