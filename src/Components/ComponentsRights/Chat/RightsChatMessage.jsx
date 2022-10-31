import React, {useEffect} from 'react';
import MessagePhoto from "./ChatMessage/MessagePhoto";
import MessageContent from "./ChatMessage/MessageContent";

const RightsChatMessage = () => {


    useEffect(() => {
        for( let chItem of document.querySelectorAll('.chatting__item') ){
            chItem.querySelector('.item__menu').addEventListener('click', function () {

                if( this.closest('.item__inner').querySelector('.item__dropdown').classList.contains('item__dropdown_active') ){
                    this.closest('.item__inner').querySelector('.item__dropdown').classList.remove('item__dropdown_active')
                } else {
                    for( let drp of document.querySelectorAll('.chatting__item .item__dropdown') ){
                        drp.classList.remove('item__dropdown_active')
                    }
                    this.closest('.item__inner').querySelector('.item__dropdown').classList.add('item__dropdown_active')
                }

            })
        }
    })

    return (
        <div className="chatting__item">
            <MessagePhoto />
            <MessageContent />
        </div>
    );
};

export default RightsChatMessage;