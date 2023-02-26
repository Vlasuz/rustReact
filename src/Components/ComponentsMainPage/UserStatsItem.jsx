import React, {useEffect, useState} from 'react';
import Translate from "../../Hooks/Translate";

const UserStatsItem = ({  dataStats, person_id, title }) => {

    return (
        <div className={"stats" + (!!dataStats?.length ? "" : " stats_disabled")}>
            <h3>
                {title}
            </h3>

            {
                !!dataStats?.length ? <>
                    <p>{dataStats?.length}
                        <sup>
                            {dataStats?.filter(item => item?.winner?.user.id === person_id.id ).length} победы
                        </sup>
                    </p>
                    <div className="lines">
                        <div className={"line" + (dataStats && dataStats[0]?.winner?.user?.id === person_id?.id ? " line_active" : "")}></div>
                        <div className={"line" + (dataStats && dataStats[1]?.winner?.user?.id === person_id?.id ? " line_active" : "")}></div>
                        <div className={"line" + (dataStats && dataStats[2]?.winner?.user?.id === person_id?.id ? " line_active" : "")}></div>
                        <div className={"line" + (dataStats && dataStats[3]?.winner?.user?.id === person_id?.id ? " line_active" : "")}></div>
                        <div className={"line" + (dataStats && dataStats[4]?.winner?.user?.id === person_id?.id ? " line_active" : "")}></div>
                        <div className={"line" + (dataStats && dataStats[5]?.winner?.user?.id === person_id?.id ? " line_active" : "")}></div>
                    </div>
                </> : <p>
                    <Translate>no_data</Translate>
                </p>
            }

        </div>
    );
};

export default UserStatsItem;