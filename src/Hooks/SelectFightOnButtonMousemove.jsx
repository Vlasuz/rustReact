import React from 'react';

const SelectFightOnButtonMousemove = (e) => {
        let attr = e.target.closest('button').getAttribute('data-persone')
        document.querySelector('.' + attr).classList.add('img_hover')
};

export default SelectFightOnButtonMousemove;