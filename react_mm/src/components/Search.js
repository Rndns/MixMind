// import React from "react";
// import PropTypes from 'prop-types';

const SearchBar = ({searchQuery, setSearchQuery}) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="search-music">음악검색</span>
        </label>
        <input
            value={searchQuery}
            onInput={e=> setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="검색어를 입력하세요"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

// SearchBar.propTypes = {
//     searchQuery: PropTypes.string.isRequired,
//     setSearchQuery: PropTypes.func.isRequired
// };

// export default SearchBar;
