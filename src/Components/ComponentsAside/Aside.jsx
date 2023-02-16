import React, {useEffect} from 'react';
import AsidePlane from "./AsidePlane";
import AsideFight from "./AsideFight";
import AsideCenter from "./AsideCenter";
import {
    processorListDelete,
    processorListRemove, storageListDelete,
    switcherRights,
    userInventoryAdd,
    userInventoryUncheck
} from "../../Redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {reducerStorageWithdraw} from "../../Redux/Reducers/reducerStorageWithdraw";

const Aside = (props) => {

    const dispatch = useDispatch()
    const location = useLocation();
    const switcher = useSelector(state => state.reducerSwitcherRights.data)
    const processorList = useSelector(state => state.reducerProcessorList.list)
    const withdraw = useSelector(state => state.reducerStorageWithdraw.list)

    useEffect(() => {
        !!processorList.length && dispatch(processorListDelete())
        !!processorList.length && dispatch(userInventoryAdd(processorList))

        !!withdraw.length && dispatch(userInventoryUncheck())
        !!withdraw.length && dispatch(storageListDelete())
    }, [switcher])

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    useEffect(() => {

        if(getCookie('prevPage') === 'airdrop' && !location.pathname.includes('airdrop')) {
            document.querySelector('.section-right__item')?.classList.remove('section-right__item_show')
            document.querySelector('.section-right__item').classList.add('section-right__item_hidden')

            document.cookie = 'prevPage= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';

            setTimeout(() => {
                dispatch(switcherRights('pr'))

                document.querySelector('.section-right__switcher').classList.add('section-right__switcher-airdrop')
            }, 300)

            document.querySelectorAll('.aside__list li').forEach(item => {
                item.classList.remove('li_active')
            })
            document.querySelector('.section-right__top .top__item:first-child').click()
            document.querySelector('.aside__list li:first-child').classList.add('li_active')
        }

    }, [location])

    return (
        <aside className="aside">

            <AsidePlane states={props.states}/>
            <AsideFight />

            <AsideCenter states={props.states}/>

        </aside>
    );
};

export default Aside;