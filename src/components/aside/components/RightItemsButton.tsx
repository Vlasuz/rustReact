import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRightBlock, setTrigger } from '../../../redux/toolkitSlice'
import { getSvg } from '../../../functions/getSvg'
import { IAsideButtonToRight } from '../../../model'
import { rightItemsButtonList } from '../../../constants/asideButtonsToRight'

export const RightItemsButton: React.FC<IAsideButtonToRight> = ({icon, title, slug}) => {

    const dispatch = useDispatch()
    const rightItemBlock: IAsideButtonToRight = useSelector((state: any) => state.toolkit.rightBlock)

    const handleChange = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        dispatch(setTrigger('CHANGE_RIGHT_BLOCK'))
        document.querySelector('.postamat')?.classList.remove('postamat_active')

        setTimeout(() => {
            dispatch(setRightBlock({icon, title, slug}))
            setTimeout(() => {
                document.querySelector('.postamat')?.classList.add('postamat_active')
            }, 150)
        }, 150)
    }

    useEffect(() => {
        dispatch(setRightBlock(rightItemsButtonList[0]))
        setTimeout(() => {
            document.querySelector('.postamat')?.classList.add('postamat_active')
        }, 100)
    }, [])

    return (
        <li className={rightItemBlock.slug === slug ? "li_active" : ""}>
            <a onClick={e => handleChange(e)} href="#">
                <div dangerouslySetInnerHTML={getSvg(icon)} />
                <span className="absolute-span">
                    {title}
                </span>
            </a>
        </li>
    )
}
function trigger(): any {
    throw new Error('Function not implemented.')
}

