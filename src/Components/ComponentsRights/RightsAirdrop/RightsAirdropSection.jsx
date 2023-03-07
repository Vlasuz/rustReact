import React from 'react';
import RightsAirdropBlock from "./RightsAirdropBlock";
import RightsAirdropSleepers from "./RightsAirdropSleepers";
import RightsAirdropMoveSleepers from "./RightsAirdropMoveSleepers";
import RightsAirdropMember from "./RightsAirdropMember";
import {useSelector} from "react-redux";

const RightsAirdropSection = () => {

    const switcherRightsStep = useSelector(state => state.reducerAirdropStepRights.step)
    const stepAirdrop = useSelector(state => state.reducerAirdropStep.step)
    const auth = useSelector(state => state.reducerAuth.auth)
    const isPlayerMember = useSelector(state => state.reducerSubmitAirdrop.data)

    return (
        <div className="section-right__airdrop">
            <RightsAirdropBlock/>
            {
                (auth && stepAirdrop === "waiting") || isPlayerMember ?
                    <>
                        {
                            switcherRightsStep === 1 && !isPlayerMember ? <RightsAirdropSleepers/> :
                                switcherRightsStep === 2 && !isPlayerMember ? <RightsAirdropMoveSleepers/> :
                                    switcherRightsStep === 3 || isPlayerMember ? <RightsAirdropMember/> : ""
                        }
                    </> : ""
            }

        </div>
    );
};

export default RightsAirdropSection;