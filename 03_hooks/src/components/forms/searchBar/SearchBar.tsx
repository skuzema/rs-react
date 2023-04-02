import React, { useState } from 'react';

import './SearchBar.css';

const SearchBar = () => {
  const [store, setStore] = useState(localStorage.getItem('searchValue') || '');

  const handleChange = (store: string) => {
    setStore(store);
    localStorage.setItem('searchValue', store);
  };

  return (
    <div className="conatiner">
      <div className="search-bar">
        <input
          type="text"
          value={store}
          placeholder="Search..."
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
