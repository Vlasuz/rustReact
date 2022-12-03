import React from 'react';
import RightsAirdropPlayersItemPhoto from "./RightsAirdropPlayersItemPhoto";
import RightsAirdropPlayersItemInfo from "./RightsAirdropPlayersItemInfo";
import {Link} from "react-router-dom";

const RightsAirdropPlayersItem = (props) => {
    return (
        <Link to={'/person'} className="players__item">
            <RightsAirdropPlayersItemPhoto infoPlayer={props.infoPlayer} />
            <RightsAirdropPlayersItemInfo infoPlayer={props.infoPlayer} />
        </Link>
    );
};

export default RightsAirdropPlayersItem;