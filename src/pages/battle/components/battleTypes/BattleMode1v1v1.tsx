import React, {useEffect} from 'react'
import {IBattleGame, IUser} from "../../../../model";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {LoadingStyled} from "../../../../components/loading/loading.styled";

interface IBattleMode1V1V1Props {
    itemData: IBattleGame
}

export const BattleMode1V1V1: React.FC<IBattleMode1V1V1Props> = ({itemData}) => {

    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)

    return (
        <div className="players">
            <div className="player player_blue">
                <div className="player__photo">
                    <img src={itemData?.players[0]?.user?.avatar} alt="Photo"/>
                </div>
            </div>
            <b>VS</b>
            <div className="player player_red">

                {itemData?.players[1]?.user ? <div className="player__photo">
                        <img src={itemData?.players[1]?.user?.avatar} alt="Photo"/>
                    </div> :
                    <NavLink to={`/battle/${itemData?.id}`} className="player__photo player__photo_loading">
                        <LoadingStyled className="load">
                            <div className="line"/>
                            <div className="line"/>
                            <div className="line"/>
                        </LoadingStyled>
                        <div className="entry">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                 fill="none">
                                <path
                                    d="M12.9004 10.8566L8.79883 14.9581C8.64886 15.1015 8.44964 15.1819 8.24219 15.1827C8.14159 15.183 8.04197 15.1631 7.94922 15.1241C7.8052 15.0659 7.68183 14.966 7.59485 14.8373C7.50788 14.7086 7.46125 14.5568 7.46094 14.4015V11.0812H1.40625C1.19905 11.0812 1.00034 10.9989 0.853823 10.8524C0.70731 10.7058 0.625 10.5071 0.625 10.2999C0.625 10.0927 0.70731 9.89401 0.853823 9.7475C1.00034 9.60099 1.19905 9.51868 1.40625 9.51868H7.46094V6.19836C7.46125 6.04301 7.50788 5.89128 7.59485 5.76256C7.68183 5.63383 7.8052 5.53396 7.94922 5.47571C8.09185 5.41905 8.24776 5.40458 8.39839 5.43402C8.54902 5.46345 8.68801 5.53555 8.79883 5.64172L12.9004 9.74329C13.0471 9.89141 13.1294 10.0915 13.1294 10.2999C13.1294 10.5084 13.0471 10.7084 12.9004 10.8566ZM17.8125 0.924927H12.3438C12.1365 0.924927 11.9378 1.00724 11.7913 1.15375C11.6448 1.30026 11.5625 1.49898 11.5625 1.70618C11.5625 1.91338 11.6448 2.11209 11.7913 2.2586C11.9378 2.40512 12.1365 2.48743 12.3438 2.48743H17.8125V18.1124H12.3438C12.1365 18.1124 11.9378 18.1947 11.7913 18.3412C11.6448 18.4878 11.5625 18.6865 11.5625 18.8937C11.5625 19.1009 11.6448 19.2996 11.7913 19.4461C11.9378 19.5926 12.1365 19.6749 12.3438 19.6749H17.8125C18.2269 19.6749 18.6243 19.5103 18.9174 19.2173C19.2104 18.9243 19.375 18.5268 19.375 18.1124V2.48743C19.375 2.07303 19.2104 1.6756 18.9174 1.38257C18.6243 1.08955 18.2269 0.924927 17.8125 0.924927Z"
                                    fill="#92C145"/>
                            </svg>
                        </div>
                        <img src={userInfo?.avatar} className={"noname"} alt="Photo"/>
                    </NavLink>
                }

            </div>
            <b>VS</b>
            <div className="player player_green">

                {itemData?.players[1]?.user ? <div className="player__photo">
                        <img src={itemData?.players[1]?.user?.avatar} alt="Photo"/>
                    </div> :
                    <NavLink to={`/battle/${itemData?.id}`} className="player__photo player__photo_loading">
                        <LoadingStyled className="load">
                            <div className="line"/>
                            <div className="line"/>
                            <div className="line"/>
                        </LoadingStyled>
                        <div className="entry">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                 fill="none">
                                <path
                                    d="M12.9004 10.8566L8.79883 14.9581C8.64886 15.1015 8.44964 15.1819 8.24219 15.1827C8.14159 15.183 8.04197 15.1631 7.94922 15.1241C7.8052 15.0659 7.68183 14.966 7.59485 14.8373C7.50788 14.7086 7.46125 14.5568 7.46094 14.4015V11.0812H1.40625C1.19905 11.0812 1.00034 10.9989 0.853823 10.8524C0.70731 10.7058 0.625 10.5071 0.625 10.2999C0.625 10.0927 0.70731 9.89401 0.853823 9.7475C1.00034 9.60099 1.19905 9.51868 1.40625 9.51868H7.46094V6.19836C7.46125 6.04301 7.50788 5.89128 7.59485 5.76256C7.68183 5.63383 7.8052 5.53396 7.94922 5.47571C8.09185 5.41905 8.24776 5.40458 8.39839 5.43402C8.54902 5.46345 8.68801 5.53555 8.79883 5.64172L12.9004 9.74329C13.0471 9.89141 13.1294 10.0915 13.1294 10.2999C13.1294 10.5084 13.0471 10.7084 12.9004 10.8566ZM17.8125 0.924927H12.3438C12.1365 0.924927 11.9378 1.00724 11.7913 1.15375C11.6448 1.30026 11.5625 1.49898 11.5625 1.70618C11.5625 1.91338 11.6448 2.11209 11.7913 2.2586C11.9378 2.40512 12.1365 2.48743 12.3438 2.48743H17.8125V18.1124H12.3438C12.1365 18.1124 11.9378 18.1947 11.7913 18.3412C11.6448 18.4878 11.5625 18.6865 11.5625 18.8937C11.5625 19.1009 11.6448 19.2996 11.7913 19.4461C11.9378 19.5926 12.1365 19.6749 12.3438 19.6749H17.8125C18.2269 19.6749 18.6243 19.5103 18.9174 19.2173C19.2104 18.9243 19.375 18.5268 19.375 18.1124V2.48743C19.375 2.07303 19.2104 1.6756 18.9174 1.38257C18.6243 1.08955 18.2269 0.924927 17.8125 0.924927Z"
                                    fill="#92C145"/>
                            </svg>
                        </div>
                        <img src={userInfo?.avatar} className={"noname"} alt="Photo"/>
                    </NavLink>
                }

            </div>
        </div>
    )
}
