import React, {useEffect, useRef, useState} from 'react'
import {IUser, IUserGames, IUserHistory, IUserHistoryAirdrop, IUserHistoryFight} from '../../../model'
import {TableForAirdrop} from './tables/TableForAirdrop'
import {TableForFight} from './tables/TableForFight'
import {LoadingStyled} from '../../../components/loading/loading.styled'
import {TableForCrate} from "./tables/TableForCrate";
import {TableForBattle} from "./tables/TableForBattle";
import {getTableAirdrop} from "../../../api/getTableAirdrop";
import {getTableFight} from "../../../api/getTableFight";
import {getTableCrates} from "../../../api/getTableCrates";
import {getTableBattle} from "../../../api/getTableBattle";
import {useParams} from "react-router";

interface ITablesProps {
    games: IUserHistoryAirdrop[] | IUserHistoryFight[] | any
    user: IUser
    isLoadingGames: boolean
}

export const Tables: React.FC<ITablesProps> = ({games, user, isLoadingGames}) => {

    const [table, setTable] = useState('AIRDROP')

    const handleChangeTable = (item: IUserGames) => {
        document.querySelector('.tabs__item_active')?.classList.add('tabs__item_hide')

        setTimeout(() => {
            setTable(item.slug)
            document.querySelector('.tabs__item_active')?.classList.remove('tabs__item_hide')
        }, 300)
    }

    const loading = <LoadingStyled className="load">
        <div className="line"/>
        <div className="line"/>
        <div className="line"/>
    </LoadingStyled>

    const dataEmpty = (tableValue: any, tableData: any) => {
        return (
            <div
                className={"tabs__item" + (tableValue?.toLowerCase().includes(tableData.slug) ? " tabs__item_active" : "")}>
                <big>Нет данных</big>
            </div>
        )
    }

    const getTableData = (game: string) => games.filter((item: IUserGames) => item.slug.includes(game))[0]
    // const getTableGames = (game: string) => games.filter((item: IUserGames) => item.slug.includes(game))[0].data

    const {userId} = useParams()


    const [gameAirdropTableInfo, setGameAirdropTableInfo]: any = useState(null)
    const [isLoadAirdrop, setIsLoadAirdrop] = useState(false)
    const [gameFightTableInfo, setGameFightTableInfo]: any = useState(null)
    const [isLoadFight, setIsLoadFight] = useState(false)
    const [gameCrateTableInfo, setGameCrateTableInfo]: any = useState(null)
    const [isLoadCrate, setIsLoadCrate] = useState(false)
    const [gameBattleTableInfo, setGameBattleTableInfo]: any = useState(null)
    const [isLoadBattle, setIsLoadBattle] = useState(false)
    useEffect(() => {
        getTableBattle({setGame: setGameBattleTableInfo, setLoad: setIsLoadBattle, userId: userId ?? user.id})
        getTableAirdrop({setGame: setGameAirdropTableInfo, setLoad: setIsLoadAirdrop, userId: userId ?? user.id})
        getTableFight({setGame: setGameFightTableInfo, setLoad: setIsLoadFight, userId: userId ?? user.id})
        getTableCrates({setGame: setGameCrateTableInfo, setLoad: setIsLoadCrate, userId: userId ?? user.id})
    }, [])


    return (
        <div className="section-block">
            <ul className="tabs">

                {
                    games.map((item: IUserGames) =>
                        <li key={item.slug} onClick={_ => handleChangeTable(item)}
                            className={table.toLowerCase().includes(item.slug) ? "li_active" : ""}>
                            <button>
                                {item.title}
                            </button>
                        </li>
                    )
                }

            </ul>
            <div className="tabs__block">


                {isLoadAirdrop ? gameAirdropTableInfo?.length ?
                    <TableForAirdrop user={user} tableValue={table} tableData={getTableData('airdrop')}
                                     gameData={gameAirdropTableInfo}/> : dataEmpty(table, getTableData('airdrop')) : loading}
                {isLoadFight ? gameFightTableInfo?.length ?
                    <TableForFight user={user} tableValue={table} tableData={getTableData('fight')}
                                   gameData={gameFightTableInfo}/> : dataEmpty(table, getTableData('fight')) : loading}
                {isLoadCrate ? gameCrateTableInfo?.length ?
                    <TableForCrate user={user} tableValue={table} tableData={getTableData('crate')}
                                   gameData={gameCrateTableInfo}/> : dataEmpty(table, getTableData('crate')) : loading}
                {isLoadBattle ? gameBattleTableInfo?.length ?
                    <TableForBattle user={user} tableValue={table} tableData={getTableData('battle')}
                                   gameData={gameBattleTableInfo}/> : dataEmpty(table, getTableData('battle')) : loading}

            </div>
        </div>
    )
}
