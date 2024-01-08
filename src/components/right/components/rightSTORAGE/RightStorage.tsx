import React, {useState} from 'react'
import {Search} from '../search/Search'
import {Filter} from '../filter/Filter'
import {RightStorageStyle} from './RightStorage.styled'
import arr from './../../../../assets/images/arr-r-t.svg'
import {StorageItem} from './components/StorageItem'
import {useSortBy} from '../../../../hooks/sortBy'
import {IProduct, IUser} from '../../../../model'
import {useDispatch, useSelector} from 'react-redux'
import {EmptyInventory} from '../emptyInventory/EmptyInventory'
import {setPopup} from "../../../../redux/toolkitSlice";
import {Translate} from "../../../translate/Translate";
import {EmptyInventoryStyle} from "../emptyInventory/emptyInventory.styled";
import {useSteamLogin} from "../../../../hooks/steamLogin";
import steam from "../../../../assets/images/steam.svg";
import {SteamLoginStyle} from "../../../header/components/steamLogin/steamLogin.styled";

interface IRightStorageProps {
    blockValue: any,
    isHideBlock: any
}

const EntryButton = () => {

    const {auth_params} = useSteamLogin()

    return (
        <EmptyInventoryStyle>
            <SteamLoginStyle href={"http://steamcommunity.com/openid/login?" + new URLSearchParams(auth_params).toString()} className={"buttonToLogin"}>
            <span>
                <Translate>storage_empty_button_not_login</Translate>
            </span>
                <img src={steam} alt="Login" />
            </SteamLoginStyle>
        </EmptyInventoryStyle>

    )
}

export const RightStorage: React.FC<IRightStorageProps> = ({blockValue, isHideBlock}) => {

    const userData: IUser = useSelector((state: any) => state.toolkit.user)
    const allProducts: IProduct[] = useSelector((state: any) => state.toolkit.userInventory)
    const withdrawList: IProduct[] = useSelector((state: any) => state.toolkit.inventoryWithdraw)
    const [searchValue, setSearchValue] = useState('')
    const {products}: any = useSortBy({allProducts, searchValue})
    const dispatch = useDispatch()

    const isHaveProducts = products.length ? products?.map((item: IProduct) => <StorageItem key={item.id}
                                                                                            data={item}/>) :
        <EmptyInventory/>
    const isAuth = !userData?.id ? <EntryButton/> : isHaveProducts

    return (
        <RightStorageStyle
            className={"section-right__item" + (blockValue.block === 'no_chat' ? ' section-right_active' : '') + isHideBlock}>
            <div className="postamat">
                <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
                <Filter/>

                <hr/>

                <div className={"postamat__block" + (products.length ? "" : " postamat__block_empty")}>

                    {isAuth}

                </div>

                {
                    withdrawList.length ?
                        <button onClick={_ => dispatch(setPopup("popup-pull-search"))} className="zone__button">
                            <img src={arr} alt="Ico"/>
                            <span>
                            <Translate>withdraw_items</Translate>
                        </span>
                            <div className="zone__count">
                                {withdrawList.length}
                            </div>
                        </button> :
                        <div className="zone__empty">
                            <p>
                                <Translate>select_item_for_withdraw</Translate>
                            </p>
                        </div>
                }

            </div>
        </RightStorageStyle>
    )
}
