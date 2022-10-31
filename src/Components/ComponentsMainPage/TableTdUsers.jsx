import React, {useEffect} from 'react';

const TableTdUsers = ({infoItem}) => {

    const listPlayers = infoItem.players.map((item, itemNum) => {
        if (item[itemNum + 1]) {
            return <li key={itemNum + 1}><img src={item[itemNum + 1]} alt="User"/></li>
        }
    })

    const countsPhotos = 3
    useEffect(() => {
        if (document.querySelectorAll('.list-players')[0]) {
            document.querySelectorAll('.list-players').forEach(list => {
                for (let i = 0; i <= list.querySelectorAll('li').length; i++) {
                    let a = i - countsPhotos
                    if (i >= countsPhotos && list.querySelectorAll('li')[i]) {
                        list.querySelectorAll('li')[i].style.display = 'none';

                        list.querySelector('.count').classList.add('count_active')
                        list.querySelector('.count').innerHTML = "+" + a
                    }
                }
            })
        }
    })


    return (
        <div className="td">
            <div className="list-players">
                <ul>
                    {listPlayers}
                </ul>
                <div className="count">

                </div>
            </div>
        </div>
    );
};

export default TableTdUsers;