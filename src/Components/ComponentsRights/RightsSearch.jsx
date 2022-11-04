import React from 'react';

const RightsSearch = ({inputSearch, setInputSearch}) => {
    return (
        <div className="postamat__search">
            <input
                type="text"
                placeholder="Поиск"
                value={inputSearch}
                onChange={e => setInputSearch(e.target.value)}
            />
            <button>
                <img src="images/search.svg" alt="Search"/>
            </button>
        </div>
    );
};

export default RightsSearch;