import React from 'react';
import Stats from "./Stats";
import States from "../../States";

const UserStats = () => {
    const state = States();

    return (
        <>
            {
                state.UserStatsArray.map((stat, statNum) =>
                    <Stats
                        key={statNum}
                        title={stat.title}
                        count={stat.count}
                        greenStats={stat.greenStats}
                    />
                )
            }

        </>
    );
};

export default UserStats;