import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--gray"
        type="search"
        placeholder="search shows"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
