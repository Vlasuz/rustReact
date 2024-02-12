import React, { useEffect, useState } from 'react'
import { ProfileStyle } from './Profile.styled'
import { User } from './components/User'
import { Balance } from './components/Balance'
import { Stats } from './components/Stats'
import { useUserGames } from '../../hooks/userGames'
import { Tables } from './components/Tables'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { getUserGames } from '../../api/getUserGames'
import { useUserData } from '../../hooks/userData'
import { useUserProfile } from '../../hooks/userProfile'
import axios from 'axios'
import { getApiLink } from '../../functions/getApiLink'
import { setUserGames } from '../../redux/toolkitSlice'



interface IProfileProps {

}

export const Profile: React.FC<IProfileProps> = () => {

    // for my user
    const {userData} = useUserData()

    // else users
    const {userId} = useParams()
    const elseUser: any = useUserProfile({id: String(userId)})

    // general
    const user = userId ? elseUser : userData
    const dispatch = useDispatch()
    const {games} = useUserGames({user})
    const [isLoadingGames, setIsLoadingGames] = useState(false)

    useEffect(() => {

        setIsLoadingGames(true)
        setTimeout(() => {
            axios.get(getApiLink(`api/user/games/?id=${userId ?? userData.id}`)).then(({data}) => {

                console.log(data)
                dispatch(setUserGames(data))
                setIsLoadingGames(false)

            }).catch(error => {
                console.log('Error with get user games: ', error)
                setIsLoadingGames(false)
            })
        }, 300)

    }, [])

    return (
        <ProfileStyle className={"section-blocks"}>
            <div className={"section-block section-block-information " + (userId && "section-block-newcomer")}>
                <User userData={user} />
                {!userId && <Balance/>}
                
                {
                    games?.map(item => <Stats key={item.title} game={item} user={user} isLoadingGames={isLoadingGames} />)
                }

            </div>
            <Tables games={games} user={user} isLoadingGames={isLoadingGames} />
        </ProfileStyle>
    )
}
