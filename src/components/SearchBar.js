// src/components/SearchBar.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredWidgets } from '../store';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  // Update the search term and filter widgets
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Use a selector to get the filtered widgets
  const filteredWidgets = useSelector((state) => {
    return selectFilteredWidgets(searchTerm)(state);
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredWidgets.map(widget => (
          <li key={widget.id}>{widget.name}: {widget.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
