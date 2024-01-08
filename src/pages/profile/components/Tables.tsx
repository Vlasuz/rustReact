import React, { useRef, useState } from 'react'
import { IUser, IUserGames, IUserHistory, IUserHistoryAirdrop, IUserHistoryFight } from '../../../model'
import { TableForAirdrop } from './tables/TableForAirdrop'
import { TableForFight } from './tables/TableForFight'
import { LoadingStyled } from '../../../components/loading/loading.styled'

interface ITablesProps {
    games: IUserHistoryAirdrop[] | IUserHistoryFight[] | any
    user: IUser
    isLoadingGames: boolean
}

export const Tables: React.FC<ITablesProps> = ({ games, user, isLoadingGames }) => {

    const [table, setTable] = useState('AIRDROP')

    const handleChangeTable = (item: IUserGames) => {
        document.querySelector('.tabs__item_active')?.classList.add('tabs__item_hide')

        setTimeout(() => {
            setTable(item.slug)
            document.querySelector('.tabs__item_active')?.classList.remove('tabs__item_hide')
        }, 300)
    }

    const loading = <LoadingStyled className="load">
        <div className="line" />
        <div className="line" />
        <div className="line" />
    </LoadingStyled>

    const dataEmpty = (tableValue: any, tableData: any) => {
        return (
            <div className={"tabs__item" + (tableValue?.toLowerCase().includes(tableData.slug) ? " tabs__item_active" : "")}>
                <big>Нет данных</big>
            </div>
        )
    }

    const getTableData = (game: string) => games.filter((item: IUserGames) => item.slug.includes(game))[0]
    const getTableGames = (game: string) => games.filter((item: IUserGames) => item.slug.includes(game))[0].data

    console.log(games)

    return (
        <div className="section-block">
            <ul className="tabs">

                {
                    games.map((item: IUserGames) =>
                        <li key={item.slug} onClick={_ => handleChangeTable(item)} className={table.toLowerCase().includes(item.slug) ? "li_active" : ""}>
                            <button>
                                {item.title}
                            </button>
                        </li>
                    )
                }

            </ul>
            <div className="tabs__block">
                {
                    !isLoadingGames ? <>
                        {getTableGames('airdrop')?.length ? <TableForAirdrop user={user} tableValue={table} tableData={getTableData('airdrop')} gameData={getTableGames('airdrop')} /> : dataEmpty(table, getTableData('airdrop'))}
                        {getTableGames('fight')?.length ? <TableForFight user={user} tableValue={table} tableData={getTableData('fight')} gameData={getTableGames('fight')} /> : dataEmpty(table, getTableData('fight'))}
                    </> : loading
                }
            </div>
        </div>
    )
}
