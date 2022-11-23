import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const AsideMenuItem = (props) => {

    function icon(name) {
        if (name === "Переработчик") {
            return <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21.1225 8.96198L14.7217 8.90596L16.5039 7.75857L14.1407 3.40945C13.264 1.79585 12.2297 0.548597 10.5819 0.0572077L18.3029 0.00155039C19.4229 -0.0419051 20.686 0.83459 21.1169 1.81905L22.5158 4.3938L24.5287 3.34309L21.1225 8.96198ZM10.8249 9.52316L4.78076 5.94218L8.00531 0.972276C10.1648 -1.01101 12.7996 1.65162 14.0382 4.28674L10.8249 9.52316ZM25.235 9.09753L19.2367 12.7588L22.1578 18.1707C25.0141 18.3431 28.5715 17.282 27.9223 14.3903L25.235 9.09753ZM14.7189 22.2298L17.8734 16.5392L17.9903 18.6881H22.8592C24.6652 18.6881 26.2346 18.3698 27.455 17.1361L23.7548 24.0604C23.2484 25.0815 21.8855 25.7847 20.8337 25.6919H17.9515L17.8734 27.9999L14.7189 22.2298ZM0.155436 9.22672L2.02821 10.6899L0.265616 14.0664C-0.615718 15.6237 0.89831 17.1404 1.86298 17.6684C2.81263 18.1883 4.28648 18.25 5.66362 18.2311L8.14232 14.1791L10.0148 15.192L6.76507 9.17035L0.155436 9.22672ZM4.45158 24.4778L0.430786 17.0494C1.67927 18.4376 3.31335 18.7002 4.56183 18.6249L12.6038 18.6813V25.7162H8.36247C6.78363 25.7537 5.25973 25.5096 4.45158 24.4778Z" fill="#A2ABC5" fillOpacity="0.5"/></svg>;

        } else if (name === "Хранилище") {
            return <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.1935 3.05208L19.2731 0.114583C19.1522 0.0404155 19.0148 0.000892297 18.8747 0H15.6873C15.476 0 15.2733 0.0877975 15.1239 0.244078C14.9745 0.400358 14.8905 0.61232 14.8905 0.833333C14.8905 1.49637 14.6386 2.13226 14.1903 2.6011C13.742 3.06994 13.134 3.33333 12.5 3.33333C11.866 3.33333 11.258 3.06994 10.8097 2.6011C10.3614 2.13226 10.1095 1.49637 10.1095 0.833333C10.1095 0.61232 10.0255 0.400358 9.87611 0.244078C9.72668 0.0877975 9.524 0 9.31266 0H6.12533C5.9852 0.000892297 5.84777 0.0404155 5.72691 0.114583L0.806459 3.05208C0.451676 3.26108 0.1875 3.60496 0.0687925 4.01231C-0.0499148 4.41966 -0.0140313 4.85918 0.168991 5.23958L2.00171 9.08333C2.1346 9.35914 2.33816 9.5909 2.58966 9.75276C2.84117 9.91463 3.13074 10.0002 3.42605 10H5.32849V18.3333C5.32849 18.7754 5.4964 19.1993 5.79527 19.5118C6.09414 19.8244 6.49949 20 6.92216 20H18.0778C18.5005 20 18.9059 19.8244 19.2047 19.5118C19.5036 19.1993 19.6715 18.7754 19.6715 18.3333V10H21.5739C21.8693 10.0002 22.1588 9.91463 22.4103 9.75276C22.6618 9.5909 22.8654 9.35914 22.9983 9.08333L24.831 5.23958C25.014 4.85918 25.0499 4.41966 24.9312 4.01231C24.8125 3.60496 24.5483 3.26108 24.1935 3.05208Z" fill="#A2ABC5" fillOpacity="0.5"/></svg>;

        } else if (name === "Магазин") {
            return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.50005 0C1.10221 0 0.720668 0.154936 0.439354 0.430725C0.15804 0.706514 0 1.08056 0 1.47059C0 1.86061 0.15804 2.23466 0.439354 2.51045C0.720668 2.78624 1.10221 2.94118 1.50005 2.94118H3.33011L3.78763 4.73824C3.79217 4.75893 3.79717 4.77952 3.80263 4.8L5.83969 12.7853L4.50015 14.0971C2.61009 15.95 3.94813 19.1176 6.62122 19.1176H19.5007C19.8985 19.1176 20.28 18.9627 20.5613 18.6869C20.8427 18.4111 21.0007 18.0371 21.0007 17.6471C21.0007 17.257 20.8427 16.883 20.5613 16.6072C20.28 16.3314 19.8985 16.1765 19.5007 16.1765H6.62122L8.12127 14.7059H18.0006C18.2791 14.7057 18.5521 14.6296 18.7889 14.486C19.0258 14.3423 19.2172 14.1369 19.3416 13.8926L23.8418 5.06912C23.956 4.84497 24.01 4.59592 23.9985 4.3456C23.987 4.09528 23.9104 3.85199 23.7761 3.63882C23.6417 3.42564 23.4541 3.24966 23.2309 3.12756C23.0077 3.00547 22.7563 2.94131 22.5008 2.94118H6.42021L5.9552 1.11324C5.87394 0.795226 5.68662 0.512954 5.42299 0.311258C5.15937 0.109562 4.83455 8.61828e-06 4.50015 0H1.50005ZM21.0007 22.7941C21.0007 23.3792 20.7636 23.9402 20.3417 24.3539C19.9197 24.7676 19.3474 25 18.7506 25C18.1539 25 17.5816 24.7676 17.1596 24.3539C16.7376 23.9402 16.5006 23.3792 16.5006 22.7941C16.5006 22.2091 16.7376 21.648 17.1596 21.2343C17.5816 20.8206 18.1539 20.5882 18.7506 20.5882C19.3474 20.5882 19.9197 20.8206 20.3417 21.2343C20.7636 21.648 21.0007 22.2091 21.0007 22.7941ZM6.75023 25C7.34698 25 7.9193 24.7676 8.34127 24.3539C8.76324 23.9402 9.0003 23.3792 9.0003 22.7941C9.0003 22.2091 8.76324 21.648 8.34127 21.2343C7.9193 20.8206 7.34698 20.5882 6.75023 20.5882C6.15347 20.5882 5.58115 20.8206 5.15918 21.2343C4.73721 21.648 4.50015 22.2091 4.50015 22.7941C4.50015 23.3792 4.73721 23.9402 5.15918 24.3539C5.58115 24.7676 6.15347 25 6.75023 25Z" fill="#A2ABC5" fillOpacity="0.5"/></svg>;

        }
    }

    useEffect(() => {
        document.querySelector('.aside__list li').classList.remove('active')
        if(props.states.switcherRights === "rights-airdrop"){
            document.querySelectorAll('.aside__list li').forEach(item => {
                item.classList.remove('li_active')
            })
        }
    })

    let switcherLi = function (e) {
        document.querySelectorAll('.aside__list li').forEach(item => {
            item.classList.remove('li_active')
        })
        e.target.closest('li').classList.add('li_active')
    }

    return (
        <li
            onClick={switcherLi}
            className={props.className}
        >
            <button
                onClick={() => props.states.setSwitcherRights(props.linkTo)}
            >
                {icon(props.title)}
                <span className="absolute-span">
                    {props.title}
                </span>
            </button>
        </li>
    );
};

export default AsideMenuItem;