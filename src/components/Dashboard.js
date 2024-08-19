// src/components/Dashboard.js
import React, { useState } from 'react';
import Category from './Category';
import './Dashboard.css';

function Dashboard({ categories, onAddWidget, onRemoveWidget, onShowCategorySelection }) {
  const [isBlinking, setIsBlinking] = useState(false);

  const handleRefresh = () => {
    setIsBlinking(true);
    setTimeout(() => {
      setIsBlinking(false);
    }, 500); // Duration of the blink animation
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="dashboard-title">CNAPP Dashboard</div>
        <div className="dashboard-buttons">
          <button 
            className="add-widget-btn" 
            onClick={onShowCategorySelection} // Show category selection modal
          >
            + Add Widget
          </button>
          <button 
            className={`refresher-icon-btn ${isBlinking ? 'blink-animation' : ''}`} 
            onClick={handleRefresh}
          >
            🔄
          </button>
          <button className="three-dots-btn">⋮</button>
          <button 
            className="filter-btn" 
            onClick={() => {/* logic to filter widgets from the last 2 days */}}
          >
            Filter Last 2 Days
          </button>
        </div>
      </div>
      <div className="dashboard">
        {categories.map(category => (
          <Category 
            key={category.id} 
            category={category} 
            onAddWidget={onAddWidget} 
            onRemoveWidget={(widgetId) => onRemoveWidget(category.id, widgetId)} 
            className={isBlinking ? 'blink-animation' : ''}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
