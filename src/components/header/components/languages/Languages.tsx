import React, { useState } from 'react'
import { LanguagesStyled } from './languages.styled'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../../../../redux/toolkitSlice'
import { useToggleModal } from '../../../../hooks/toggleModal'

interface ILanguagesProps {

}

export const Languages: React.FC<ILanguagesProps> = () => {

    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const langSelected = useSelector((state: any) => state.toolkit.language)

    const languages = [
        {
            lang_title: "Украинский",
            lang_slug: "UA"
        },
        {
            lang_title: "Русский",
            lang_slug: "RU"
        },
        {
            lang_title: "Английский",
            lang_slug: "EN"
        },
    ]

    useToggleModal({setState: setIsOpen, block: ['.lang__button', '.lang__list']})

    return (
        <LanguagesStyled className={isOpen ? "_active" : ""}>
            <button className="lang__button" onClick={_ => setIsOpen(prev => !prev)}>
                <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.60178 7.01156C7.424 6.40711 7.21067 5.35467 7.21067 5.35467H7.18222C7.18222 5.35467 6.96889 6.40711 6.79111 7.01156L6.23644 8.88889H8.14222L7.60178 7.01156ZM30.7982 0H16.7964V16H30.7982C31.4667 16 32 15.4667 32 14.7982V1.20178C32 0.533333 31.4667 0 30.7982 0ZM29.5964 6.00178C29.5964 6.32889 29.3262 6.59911 28.9991 6.59911H28.4302C28.0818 7.77956 27.3422 8.96711 26.2969 10.0907C26.7164 10.4107 27.1502 10.7164 27.6053 10.9938C27.8827 11.1644 27.968 11.52 27.8116 11.8044L27.4133 12.5013C27.2427 12.7929 26.8658 12.8924 26.5813 12.7147C25.9484 12.3236 25.3582 11.9111 24.8107 11.4702C24.2631 11.904 23.6729 12.3236 23.04 12.7147C22.7484 12.8924 22.3716 12.7929 22.208 12.5013L21.8098 11.8044C21.6533 11.5271 21.7387 11.1644 22.0231 10.9938C22.4853 10.7093 22.9262 10.4107 23.3316 10.0907C22.9333 9.67111 22.5849 9.23733 22.2791 8.80355C22.08 8.51911 22.1724 8.12089 22.464 7.95022L22.7911 7.75822L23.1538 7.54489C23.424 7.38844 23.7724 7.45956 23.9502 7.71556C24.1991 8.064 24.4907 8.41245 24.8178 8.76089C25.4933 8.04978 26.0053 7.31733 26.3182 6.59911H20.6009C20.2738 6.59911 20.0036 6.32889 20.0036 6.00178V5.20533C20.0036 4.87822 20.2738 4.608 20.6009 4.608H23.8009V3.81156C23.8009 3.48444 24.0711 3.21422 24.3982 3.21422H25.1947C25.5218 3.21422 25.792 3.48444 25.792 3.81156V4.608H28.992C29.3191 4.608 29.5893 4.87822 29.5893 5.20533V6.00178H29.5964ZM0 1.20178V14.7982C0 15.4667 0.533333 16 1.20178 16H15.2036V0H1.20178C0.533333 0 0 0.533333 0 1.20178ZM2.944 12.0036L5.81689 3.54844C5.90222 3.30667 6.12978 3.14311 6.38578 3.14311H8.01422C8.27022 3.14311 8.49778 3.30667 8.58311 3.54844L11.456 12.0036C11.584 12.3947 11.2996 12.8 10.8871 12.8H9.74222C9.47911 12.8 9.24444 12.6222 9.16622 12.3733L8.69689 10.7804H5.68889L5.23378 12.3733C5.15556 12.6293 4.92089 12.8071 4.65778 12.8071H3.51289C3.10756 12.8 2.816 12.3947 2.944 12.0036Z"
                        fill="#A2ABC5" fillOpacity="0.2" />
                </svg>
            </button>
            <ul className="lang__list">

                {
                    languages.map(lang =>
                        <li key={lang.lang_slug} className={lang.lang_slug === langSelected ? "lang_active" : ""}>
                            <button onClick={_ => dispatch(setLanguage(lang.lang_slug))}>{lang.lang_title}</button>
                        </li>
                    )
                }
                

            </ul>
        </LanguagesStyled>
    )
}
