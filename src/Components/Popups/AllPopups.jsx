import React, {useState} from 'react';
import PopupNewRoom from "./PopupNewRoom";
import PopupAddCoins from "./PopupsAddCoins/PopupAddCoins";
import PopupAddCoinsByCode from "./PopupsAddCoins/PopupsAddCoinsByCode/PopupAddCoinsByCode";
import PopupAddCoinsByDollars from "./PopupsAddCoins/PopupAddCoinsByDollars";
import PopupFairGame from "./PopupFairGame";
import PopupAddCoinsLinking from "./PopupsAddCoins/PopupAddCoinsLinking";
import PopupAddCoinsByCodeChecking from "./PopupsAddCoins/PopupsAddCoinsByCode/PopupAddCoinsByCodeChecking";
import PopupAddCoinsByCodeSuccess from "./PopupsAddCoins/PopupsAddCoinsByCode/PopupAddCoinsByCodeSuccess";
import PopupAddCoinsByCodeFail from "./PopupsAddCoins/PopupsAddCoinsByCode/PopupAddCoinsByCodeFail";
import PopupAddCoinsBySkins from "./PopupsAddCoins/PopupAddCoinsBySkins";
import PopupCloseBackground from "./PopupCloseBackground";
import PopupCloseCross from "./PopupCloseCross";
import PopupOutputSearch from "./PopupOutputItems/PopupOutputSearch";
import PopupOutput from "./PopupOutputItems/PopupOutput";
import PopupLogin from "./PopupAuth";
import PopupTradingWaiting from "./PopupTradingWaiting";
import PopupTradingErrorHidden from "./PopupTradingErrorHidden";
import PopupTradingErrorTradeLink from "./PopupTradingErrorTradeLink";
import PopupTradingErrorCancel from "./PopupTradingErrorCancel";
import PopupTradingSuccess from "./PopupTradingSuccess";

const AllPopups = () => {

    const [pincode, setPincode] = useState('')
    const [checkingCode, isCheckingCode] = useState(false)
    const [isFailCode, setIsFailCode] = useState(false)

    return (
        <>
            {/*<PopupLogin/>*/}
            {/*<PopupFairGame/>*/}
            {/*<PopupAddCoins/>*/}
            {/*<PopupAddCoinsBySkins/>*/}
            {/*<PopupOutputSearch />*/}
            {/*<PopupOutput/>*/}
            {/*<PopupTradingWaiting/>*/}
            {/*<PopupTradingSuccess/>*/}



            {/*<PopupTradingErrorHidden/>*/}
            {/*<PopupTradingErrorTradeLink/>*/}
            {/*<PopupTradingErrorCancel/>*/}

            <PopupAddCoinsByCode
                isCheckingCode={isCheckingCode}
                setPincode={setPincode}
            />
            {/*<PopupAddCoinsByDollars/>*/}
            <PopupAddCoinsByCodeChecking
                checkingCode={checkingCode}
                isCheckingCode={isCheckingCode}
                pincode={pincode}
                setPincode={setPincode}
                setIsFailCode={setIsFailCode}
            />
            <PopupAddCoinsByCodeSuccess/>
            <PopupAddCoinsByCodeFail
                isFailCode={isFailCode}
                setIsFailCode={setIsFailCode}
            />
            <PopupAddCoinsLinking/>





        </>
    );
};

export default AllPopups;