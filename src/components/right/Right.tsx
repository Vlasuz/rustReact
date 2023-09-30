import React, { useEffect, useState } from 'react'
import { RightStyled } from './right.styled'

import users from './../../assets/images/users.svg'
import { Chat } from '../chat/Chat'
import { RightPererab } from './components/rightPERERAB/RightPererab'
import { useSelector } from 'react-redux'
import { IAsideButtonToRight, ITrigger } from '../../model'
import { RightStorage } from './components/rightSTORAGE/RightStorage'
import { RightShop } from './components/rightSHOP/RightShop'

interface IRightProps {

}

export const Right: React.FC<IRightProps> = () => {

    const [blockValue, setBlockValue] = useState({
        header: 'chat',
        body: 'chat',
        block: 'chat'
    })
    const isHideBlock = blockValue.body !== blockValue.header ? " section-right__item_hide" : "";

    const rightBlock: any = {
        'PERERAB': <RightPererab blockValue={blockValue} isHideBlock={isHideBlock}/>,
        'STORAGE': <RightStorage blockValue={blockValue} isHideBlock={isHideBlock}/>,
        'SHOP': <RightShop blockValue={blockValue} isHideBlock={isHideBlock}/>,
    }

    const trigger: ITrigger = useSelector((state: any) => state.toolkit.trigger)
    const activeRightBlock: IAsideButtonToRight = useSelector((state: any) => state.toolkit.rightBlock)
    const userOnline = useSelector((state: any) => state.toolkit.userOnline)

    const handleSwitch = (block: string) => {
        setBlockValue({
            header: block,
            body: blockValue.body,
            block: blockValue.block
        })

        setTimeout(() => {
            setBlockValue({
                header: block,
                body: block,
                block: blockValue.block
            })

            setTimeout(() => {
                setBlockValue({
                    header: block,
                    body: block,
                    block: block
                })
                document.querySelector('.postamat')?.classList.add('postamat_active')
            }, 150)
        }, 150)
    }

    useEffect(() => {
        if(trigger.type !== 'CHANGE_RIGHT_BLOCK') return;

        handleSwitch('no_chat')
    }, [trigger])

    return (
        <RightStyled>
            <div className="section-right__top">
                <button onClick={_ => handleSwitch('no_chat')} className={"top__item" + (blockValue.header === 'no_chat' ? ' top__item_active' : '')}>
                    <span>
                        {activeRightBlock.title}
                    </span>
                </button>
                <button onClick={_ => handleSwitch('chat')} className={"top__item" + (blockValue.header === 'chat' ? ' top__item_active' : '')}>
                    <span>Чат</span>
                    <div className="people">
                        <img src={users} alt="Ico" />
                        <span>
                            {userOnline}
                        </span>
                    </div>
                </button>
            </div>
            <div className="section-right__switcher">
                {blockValue.body === 'no_chat' && rightBlock[activeRightBlock.slug]}
                {blockValue.body === 'chat' && <Chat className={"section-right__item" + (blockValue.block === 'chat' ? ' section-right_active' : '') + isHideBlock} />}
            </div>
        </RightStyled>
    )
}
