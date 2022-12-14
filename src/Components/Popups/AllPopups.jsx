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
import States from "../../States";

const AllPopups = (props) => {

    const [pincode, setPincode] = useState('')
    const [checkingCode, isCheckingCode] = useState(false)
    const [isFailCode, setIsFailCode] = useState(false)

    return (
        <>
            <PopupFairGame/>

            <PopupAddCoins/>
            <PopupAddCoinsByCode
                isCheckingCode={isCheckingCode}
                setPincode={setPincode}
            />
            <PopupAddCoinsByDollars/>
            <PopupAddCoinsBySkins states={props.states}/>
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


            <div className="popup popup-trade popup-trade-waiting">
                <PopupCloseBackground />
                <div className="popup__content">
                    <h2>??????????</h2>
                    <p>???????????????? ?????????????????????? ???? ???????????? ????????:</p>
                    <PopupCloseCross />
                    <div className="popup-trade__bot">
                        <div className="bot__photo">
                            <img src="images/robot.png" alt="Photo"/>
                        </div>
                        <div className="bot__info">
                            <p>??????????????</p>
                            <div className="code">E24fvfns....ukhd742</div>
                        </div>
                    </div>
                    <div className="trade__buttons">
                        <button className="grey">
                            <span>?????????? ??????????????</span>
                        </button>
                        <button className="steam">
                            <span>?????????? Steam</span>
                            <img src="images/steam.svg" alt="Steam"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="popup popup-trade popup-trade-error-hidden">
                <PopupCloseBackground />
                <div className="popup__content">
                    <h2>
                        <span>????????????</span>
                        <div className="img">
                            <img src="images/error-red.svg" alt="Error"/>
                        </div>
                    </h2>
                    <p>?????? ?????????????????? ?? steam ??????????,
                        <br/>???????????????? ?????? ?? ???????? ?? ????????????????????</p>
                    <PopupCloseCross />
                    <div className="trade__buttons">
                        <button className="grey">
                            <span>?????????? ??????????????</span>
                        </button>
                        <button className="steam">
                            <span>?????????? Steam</span>
                            <img src="images/steam.svg" alt="Steam"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="popup popup-trade popup-trade-error-link">
                <PopupCloseBackground />
                <div className="popup__content">
                    <h2>
                        <span>????????????</span>
                        <div className="img">
                            <img src="images/error-red.svg" alt="Error"/>
                        </div>
                    </h2>
                    <p>???? ???? ???????????????? ??????????-???????????? ?? ??????????????</p>
                    <PopupCloseCross />
                    <div className="trade__buttons">
                        <button className="grey mini">
                            <span>?? ??????????????</span>
                            <img src="images/arr-td.svg" alt="Arr"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="popup popup-trade popup-trade-error-cancel">
                <PopupCloseBackground />
                <div className="popup__content">
                    <h2>
                        <span>????????????</span>
                        <div className="img">
                            <img src="images/error-red.svg" alt="Error"/>
                        </div>
                    </h2>
                    <p>???? ???????????????? ??????????-??????????????????????</p>
                    <PopupCloseCross />
                </div>
            </div>
            <div className="popup popup-trade popup-trade-good">
                <PopupCloseBackground />
                <div className="popup__content">
                    <h2 className="green">
                        <span>??????????????</span>
                        <div className="img">
                            <img src="images/green-check.svg" alt="Error"/>
                        </div>
                    </h2>
                    <p>???????????? ?????????? ????????????????</p>
                    <PopupCloseCross />
                </div>
            </div>


            <PopupOutputSearch />
            <PopupOutput />



        </>
    );
};

export default AllPopups;