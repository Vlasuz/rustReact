import React from 'react';

const RightsChatTextarea = () => {

    let smilesOpen = function() {
        document.querySelector('.section-right__smiles').classList.toggle('section-right__smiles_active')
    }

    return (
        <form className="section-right__bottom" action="#">
            <label className="textarea">
                <input placeholder="Сообщение" maxLength="150"/>
                <span className="maxl">0/150</span>
            </label>
            <button
                className="smiles"
                onClick={smilesOpen}
            >
                <img src="images/smile-1.png" alt="Smile"/>
            </button>
            <button className="send">
                <img src="images/send-message.svg" alt="Ico"/>
            </button>
        </form>
    );
};

export default RightsChatTextarea;