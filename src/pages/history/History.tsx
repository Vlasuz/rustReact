import React, { useEffect, useState } from 'react'
import { HistoryStyle } from './history.styled'
import { HistoryTop } from './components/HistoryTop'
import { HistoryCenter } from './components/HistoryCenter'
import { HistoryBlock } from './components/HistoryBlock'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { getApiLink } from '../../functions/getApiLink'
import getCookies from '../../functions/getCookie'
import { setUserHistory } from '../../redux/toolkitSlice'
import { getBearer } from '../../functions/getBearer'

interface IHistoryProps {

}

export const History: React.FC<IHistoryProps> = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        
        getBearer({type: 'get'})
        axios.get(getApiLink('api/user/transactions/')).then(({data}) => {
            console.log(data)
            dispatch(setUserHistory(data))
        })

    }, [])

    const [historyFilter, setHistoryFilter] = useState({
        type: '',
        sortBy: '',
        filterBy: '',
    })

    return (
        <HistoryStyle className="section-history">
            <HistoryTop setHistoryFilter={setHistoryFilter} />
            <HistoryCenter setHistoryFilter={setHistoryFilter} />
            <HistoryBlock historyFilter={historyFilter} />
        </HistoryStyle>
    )
}
