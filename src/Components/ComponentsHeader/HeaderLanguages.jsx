import React from 'react';
import i18n from "i18next";
import {useTranslation, initReactI18next, Trans} from "react-i18next";

const jsonLanguages = {
    ru: {
        translation: {
            header_support: "Поддержка",
            weekly_gamer: "Игрок недели",
            text_profile: "Профиль",
            text_trade_link: "Trade-ссылка",
            text_trade_link_active: "Активно",
            text_trade_link_non_active: "Не активно",
            text_trade_link_add: "Добавить",
            text_history_balance: "Итория баланса",
            text_add_cash: "Пополнить",
            text_balance: "Баланс",
            text_change: "Изменить",
        }
    },
    en: {
        translation: {
            header_support: "Support",
            weekly_gamer: "Player of the Week",
            text_profile: "Profile",
            text_trade_link: "Trade-Trade link",
            text_trade_link_active: "Actively",
            text_trade_link_non_active: "Not active",
            text_trade_link_add: "Add",
            text_history_balance: "History of balance",
            text_add_cash: "Top up",
            text_balance: "Balance",
            text_change: "Change",
        }
    },
    china: {
        translation: {
            header_support: "支持",
            weekly_gamer: "本周最佳球员",
            text_profile: "轮廓",
            text_trade_link: "贸易链接",
            text_trade_link_active: "积极地",
            text_trade_link_non_active: "不活跃",
            text_trade_link_add: "添加",
            text_history_balance: "平衡的历史",
            text_add_cash: "充值",
            text_balance: "平衡",
            text_change: "改变",
        }
    },
    kor: {
        translation: {
            header_support: "지원하다",
            weekly_gamer: "금주의 선수",
            text_profile: "프로필",
            text_trade_link: "거래 링크",
            text_trade_link_active: "적극적으로",
            text_trade_link_non_active: "활성화되지 않은",
            text_trade_link_add: "추가하다",
            text_history_balance: "균형의 역사",
            text_add_cash: "충전",
            text_balance: "균형",
            text_change: "변화",
        }
    },
    vie: {
        translation: {
            header_support: "Ủng hộ",
            weekly_gamer: "cầu thủ của tuần",
            text_profile: "Hồ sơ",
            text_trade_link: "liên kết thương mại",
            text_trade_link_active: "tích cực",
            text_trade_link_non_active: "Không hoạt động",
            text_trade_link_add: "cộng",
            text_history_balance: "Lịch sử cân bằng",
            text_add_cash: "nạp tiền",
            text_balance: "THĂNG BẰNG",
            text_change: "Biến đổi",
        }
    },
    jap: {
        translation: {
            header_support: "サポート",
            weekly_gamer: "今週のプレーヤー",
            text_profile: "プロフィール",
            text_trade_link: "トレードリンク",
            text_trade_link_active: "積極的に",
            text_trade_link_non_active: "非活動中",
            text_trade_link_add: "追加",
            text_history_balance: "天びんの歴史",
            text_add_cash: "補充する",
            text_balance: "バランス",
            text_change: "変化する",
        }
    },
}

// Инициализация:
i18n.use(initReactI18next).init({
    resources: jsonLanguages,
    lng: "ru",
    fallbackLng: "ru"
});

const HeaderLanguages = () => {

    const {t} = useTranslation();
    const {i18n} = useTranslation();

    const langChange = (e, lang) => {
        e.target.closest('ul').querySelectorAll('li').forEach(li => li.classList.remove('lang_active'))
        e.target.closest('li').classList.add('lang_active')
        i18n.changeLanguage(lang)

    }

    return (
        <div
            className="header__lang"
        >
            <div
                className="lang__button"
                onClick={e => e.target.closest('.header__lang').classList.toggle('header__lang_active')}
            >
                <svg width="32" height="16" viewBox="0 0 32 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.60178 7.01156C7.424 6.40711 7.21067 5.35467 7.21067 5.35467H7.18222C7.18222 5.35467 6.96889 6.40711 6.79111 7.01156L6.23644 8.88889H8.14222L7.60178 7.01156ZM30.7982 0H16.7964V16H30.7982C31.4667 16 32 15.4667 32 14.7982V1.20178C32 0.533333 31.4667 0 30.7982 0ZM29.5964 6.00178C29.5964 6.32889 29.3262 6.59911 28.9991 6.59911H28.4302C28.0818 7.77956 27.3422 8.96711 26.2969 10.0907C26.7164 10.4107 27.1502 10.7164 27.6053 10.9938C27.8827 11.1644 27.968 11.52 27.8116 11.8044L27.4133 12.5013C27.2427 12.7929 26.8658 12.8924 26.5813 12.7147C25.9484 12.3236 25.3582 11.9111 24.8107 11.4702C24.2631 11.904 23.6729 12.3236 23.04 12.7147C22.7484 12.8924 22.3716 12.7929 22.208 12.5013L21.8098 11.8044C21.6533 11.5271 21.7387 11.1644 22.0231 10.9938C22.4853 10.7093 22.9262 10.4107 23.3316 10.0907C22.9333 9.67111 22.5849 9.23733 22.2791 8.80355C22.08 8.51911 22.1724 8.12089 22.464 7.95022L22.7911 7.75822L23.1538 7.54489C23.424 7.38844 23.7724 7.45956 23.9502 7.71556C24.1991 8.064 24.4907 8.41245 24.8178 8.76089C25.4933 8.04978 26.0053 7.31733 26.3182 6.59911H20.6009C20.2738 6.59911 20.0036 6.32889 20.0036 6.00178V5.20533C20.0036 4.87822 20.2738 4.608 20.6009 4.608H23.8009V3.81156C23.8009 3.48444 24.0711 3.21422 24.3982 3.21422H25.1947C25.5218 3.21422 25.792 3.48444 25.792 3.81156V4.608H28.992C29.3191 4.608 29.5893 4.87822 29.5893 5.20533V6.00178H29.5964ZM0 1.20178V14.7982C0 15.4667 0.533333 16 1.20178 16H15.2036V0H1.20178C0.533333 0 0 0.533333 0 1.20178ZM2.944 12.0036L5.81689 3.54844C5.90222 3.30667 6.12978 3.14311 6.38578 3.14311H8.01422C8.27022 3.14311 8.49778 3.30667 8.58311 3.54844L11.456 12.0036C11.584 12.3947 11.2996 12.8 10.8871 12.8H9.74222C9.47911 12.8 9.24444 12.6222 9.16622 12.3733L8.69689 10.7804H5.68889L5.23378 12.3733C5.15556 12.6293 4.92089 12.8071 4.65778 12.8071H3.51289C3.10756 12.8 2.816 12.3947 2.944 12.0036Z"
                        fill="#A2ABC5" fillOpacity="0.2"/>
                </svg>
            </div>
            <ul className="lang__list">
                <li className={'lang_active'}>
                    <button
                        onClick={e => langChange(e, 'ru')}
                    >
                        Русский
                    </button>
                </li>
                <li>
                    <button
                        onClick={e => langChange(e, 'en')}
                    >
                        Английский
                    </button>
                </li>
                <li>
                    <button
                        onClick={e => langChange(e, 'china')}
                    >
                        Китайский
                    </button>
                </li>
                <li>
                    <button
                        onClick={e => langChange(e, 'kor')}
                    >
                        Корейский
                    </button>
                </li>
                <li>
                    <button
                        onClick={e => langChange(e, 'vie')}
                    >
                        Вьетнамский
                    </button>
                </li>
                <li>
                    <button
                        onClick={e => langChange(e, 'jap')}
                    >
                        Японский
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default HeaderLanguages;