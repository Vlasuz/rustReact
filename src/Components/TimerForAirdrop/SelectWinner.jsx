import React, {useState} from 'react';

const SelectWinner = () => {

    // const [gip, setGip] = useState(0)

    let allMembersCood = [];
    let dropX = document.querySelector('.airdrop-drop-sent')?.style.left.replace('px', '')
    let dropY = document.querySelector('.airdrop-drop-sent')?.style.top.replace('px', '')
    let leftX = 0;
    let leftY = 0;
    let rightX = 99999;
    let rightY = 99999;
    let currentX = 0;
    let currentY = 0;

    let idOfX = 0
    let numOfX_X = 0
    let numOfX_Y = 0
    let numOfX_sum = 0

    let idOfY = 0
    let numOfY_X = 0
    let numOfY_Y = 0
    let numOfY_sum = 0

    let winnerId = 0;

    document.querySelectorAll('.map__points li').forEach((user, userId) => {
        let userX = +user.style.left.replace('px', '');
        let userY = +user.style.top.replace('px', '');

        allMembersCood.push({
            id: userId,
            x: userX,
            y: userY,
        })

        // ЛОГИКА ВЫБОРА ПОБЕДИТЕЛЯ

        // Х:
        if (userX < dropX && userX > leftX) {
            leftX = userX;
        } else if (userX > dropX && userX < rightX) {
            rightX = userX;
        }
        currentX = dropX - leftX < rightX - dropX ? leftX : rightX

        // Y:
        if (userY < dropY && userY > leftY) {
            leftY = userY;
        } else if (userY > dropY && userY < rightY) {
            rightY = userY;
        }
        currentY = dropY - leftY < rightY - dropY ? leftY : rightY

        // const selectCood = (user, drop, left, right) => {
        //     if (user < drop && user > left) {
        //         left = user;
        //     } else if (user > drop && user < right) {
        //         right = user;
        //     }
        //     currentY = drop - left < right - drop ? left : right
        // }
        //
        // selectCood(userY, dropY, leftY, rightY)
        // selectCood(userX, dropX, leftX, rightX)


        // ЛОГИКА ВЫБОРА ПОБЕДИТЕЛЯ

    })

    // ЛОГИКА ВЫБОРА ПОБЕДИТЕЛЯ
    allMembersCood.map(user => {
        if (user.x === currentX) {
            idOfX = user.id;
            numOfX_X = user.x > dropX ? user.x - dropX : dropX - user.x;
            numOfX_Y = user.y > dropY ? user.y - dropY : dropY - user.y;
            numOfX_sum = numOfX_X + numOfX_Y;
        }
        if (user.y === currentY) {
            idOfY = user.id;
            numOfY_X = user.x > dropX ? user.x - dropX : dropX - user.x;
            numOfY_Y = user.y > dropY ? user.y - dropY : dropY - user.y;
            numOfY_sum = numOfY_X + numOfY_Y;
        }

        winnerId = numOfX_sum < numOfY_sum ? idOfX : idOfY;
    })
    // ЛОГИКА ВЫБОРА ПОБЕДИТЕЛЯ


    // ЛОГИКА ДЛЯ ЛИНИИ ОТ ДРОПА К ПОБЕДИТЕЛЮ

    let winnerX = document.querySelectorAll('.map__points li')[winnerId]?.style.left.replace('px', '');
    let winnerY = document.querySelectorAll('.map__points li')[winnerId]?.style.top.replace('px', '');
    let katX;
    let katY;
    let gip;
    let sinA;
    let radian;
    let angle;

    katX = dropX > winnerX ? dropX - winnerX : winnerX - dropX;
    katY = dropY > winnerY ? dropY - winnerY : winnerY - dropY;
    // setGip(Math.sqrt((katX * katX) + (katY * katY)));
    gip = Math.sqrt((katX * katX) + (katY * katY))

    if (document.querySelector('.line-to-winner')) document.querySelector('.line-to-winner').style.width = gip + "px";


    sinA = katY / gip
    radian = Math.asin(sinA)
    angle = (radian * 180 / Math.PI);

    if (winnerX < dropX && winnerY < dropY) {
        document.querySelector('.line-to-winner').style.transform = `rotate(-${180 - angle}deg)`;

    } else if (winnerX > dropX && winnerY > dropY) {
        document.querySelector('.line-to-winner').style.transform = `rotate(${90 - angle}deg)`;

    } else if (winnerX > dropX && winnerY < dropY) {
        document.querySelector('.line-to-winner').style.transform = `rotate(-${angle}deg)`;

    } else if (winnerX < dropX && winnerY > dropY) {
        document.querySelector('.line-to-winner').style.transform = `rotate(${180 - angle}deg)`;

    }

    setTimeout(() => {
        document.querySelector('.line-to-winner')?.classList.add('line-to-winner_active')
        document.querySelector('.line-to-winner').style.width = "0px";
        document.querySelector('.line-to-winner').animate([
            {width: '0px'},
            {width: gip + 'px'}
        ], {
            duration: 4000,
        })

        if (document.querySelector('.line-to-winner')) document.querySelector('.line-to-winner').style.width = gip + "px";

    }, 500)

    setTimeout(() => {
        document.querySelectorAll('.map__points li')[winnerId]?.classList.add('sleepers__item_winner')
    }, 4500)

    // ЛОГИКА ДЛЯ ЛИНИИ ОТ ДРОПА К ПОБЕДИТЕЛЮ


}

export default SelectWinner;