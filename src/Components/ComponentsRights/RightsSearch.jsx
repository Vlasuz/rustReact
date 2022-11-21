import React from 'react';

const RightsSearch = (props) => {

    const submitFilter = (e) => {
        e.preventDefault()

        props.setInputSearch(e.target.value)
        props.setSortArray(
            {
                search: e.target.value,
                filterRadio: '',
                filterCheckbox: false,
            }
        )

    }

    return (
        <div className="postamat__search">
            <input
                type="text"
                placeholder="Поиск"
                value={props.inputSearch}
                onChange={e => submitFilter(e)}
            />
            <button>
                <img src="images/search.svg" alt="Search"/>
            </button>
        </div>
    );
};

export default RightsSearch;