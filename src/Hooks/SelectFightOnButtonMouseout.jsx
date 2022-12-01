import React from 'react';

const SelectFightOnButtonMouseout = (e) => {
    let attr = e.target.closest('button').getAttribute('data-persone')
    document.querySelector('.' + attr).classList.remove('img_hover')
};

export default SelectFightOnButtonMouseout;