// src/components/TopBar.js
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import './TopBar.css';

function TopBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="top-bar">
      <div className="top-bar-title">Dashboard V2</div>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input 
          type="text" 
          placeholder="Search widgets..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
          className="search-bar" 
        />
      </div>
      <div className="top-bar-icons">
        <div className="notification-icon">🔔</div>
        <div className="user-icon">👤</div>
      </div>
    </div>
  );
}

export default TopBar;
