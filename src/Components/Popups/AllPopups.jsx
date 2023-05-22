import React, {useState} from 'react';
import PopupAddCoinsByCode from "./PopupsAddCoins/PopupsAddCoinsByCode/PopupAddCoinsByCode";
import PopupAddCoinsLinking from "./PopupsAddCoins/PopupAddCoinsLinking";
import PopupAddCoinsByCodeChecking from "./PopupsAddCoins/PopupsAddCoinsByCode/PopupAddCoinsByCodeChecking";
import PopupAddCoinsByCodeSuccess from "./PopupsAddCoins/PopupsAddCoinsByCode/PopupAddCoinsByCodeSuccess";
import PopupAddCoinsByCodeFail from "./PopupsAddCoins/PopupsAddCoinsByCode/PopupAddCoinsByCodeFail";

const AllPopups = () => {

    const [pincode, setPincode] = useState('')
    const [checkingCode, isCheckingCode] = useState(false)
    const [isFailCode, setIsFailCode] = useState(false)

    return (
        <>
            <PopupAddCoinsByCode
                isCheckingCode={isCheckingCode}
                setPincode={setPincode}
            />
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