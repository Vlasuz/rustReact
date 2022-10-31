import React from 'react';

const HeaderVolume = () => {
    return (
        <div className="header__volume">
            <button>
                <img src="images/mute.svg" alt="Ico" />
            </button>
            <div className="volume__block">
                <img src="images/music.svg" alt="Ico" />
                <input type="range" />
            </div>
        </div>
    );
};

export default HeaderVolume;