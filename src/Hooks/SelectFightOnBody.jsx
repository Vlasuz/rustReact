import React from 'react';

const SelectFightOnBody = () => {
    document.querySelectorAll('.section-fight__persone img').forEach((imgItem) => {

        if( !document.querySelector('.section-fight__confetti') ){

            let btn = document.querySelector(`button[data-persone="${imgItem.classList.value.split(' ')[0]}"]`)

            imgItem.addEventListener('mousemove', function () {

                if(imgItem.classList.value){
                    imgItem.classList.add('img_hover')
                    document.querySelector(`button[data-persone="${imgItem.classList.value.split(' ')[0]}"]`).classList.add('button_hover')
                }

            })
            imgItem.addEventListener('mouseout', function () {

                if(imgItem.classList.value){
                    imgItem.classList.remove('img_hover')
                    document.querySelector(`button[data-persone="${imgItem.classList.value.split(' ')[0]}"]`).classList.remove('button_hover')
                }

            })
            imgItem.onclick = function (event) {
                let lenActive = 0

                if(imgItem.classList.value){

                    lenActive = 0

                    btn.click()

                    for( let imgCheck of event.target.closest('.section-fight__persone').querySelectorAll('img') ){
                        if( imgCheck.classList.contains('img_clicked') ){
                            lenActive++;
                        }
                    }

                    if ( lenActive > 2 ){
                        btn.click()
                        return;
                    } else if (lenActive === 0){
                        if(event.target.closest('.section-fight__lft')) event.target.closest('.section-fight__lft').querySelector('.bottom__info').style.opacity = 1
                        if(event.target.closest('.section-fight__rht')) event.target.closest('.section-fight__rht').querySelector('.bottom__info').style.opacity = 1
                    } else if (lenActive > 0){
                        if(event.target.closest('.section-fight__lft')) event.target.closest('.section-fight__lft').querySelector('.bottom__info').style.opacity = 0
                        if(event.target.closest('.section-fight__rht')) event.target.closest('.section-fight__rht').querySelector('.bottom__info').style.opacity = 0
                    }

                }

            }

        }

    })
};

export default SelectFightOnBody;