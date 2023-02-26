import React from 'react';
import Translate from "../../../Hooks/Translate";
import {useSelector} from "react-redux";

const RightsAirdropMember = () => {

    const members = useSelector(state => state.reducerAirdropMembers.list)

    return (
        <>
            {members.length === 1 && <p className={'error-only-member'}>
                <Translate>you_are_only_member_airdrop</Translate>
            </p>}
            <div className="airdrop__member">
                <div className="member__ico">
                    <img src="../images/blue-check.svg" alt="Ico" />
                </div>
                <span>
                    <Translate>you_are_a_member_of_airdrop</Translate>
                </span>
            </div>
        </>
    );
};

export default RightsAirdropMember;