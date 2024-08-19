// src/components/Category.js
import React from 'react';
import Widget from './Widget';
import './Category.css';

function Category({ category, onAddWidget, onRemoveWidget }) {
  return (
    <div>
    <h2 className="category-name">{category.name}</h2>
    <div className="category-container">
      
      <div className="widgets-container">
        {category.widgets.map(widget => (
          <div className="widget-box" key={widget.id}>
          <Widget 
            widget={widget} 
            onRemove={onRemoveWidget} 
          />
        </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={() => onAddWidget(category.id)} className="add-widget-btn">+ Add Widget</button>
      </div>
    </div>
    </div>
  );
}

export default Category;
