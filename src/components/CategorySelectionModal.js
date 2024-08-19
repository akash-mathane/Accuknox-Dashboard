// src/components/CategorySelectionModal.js
import React from 'react';
import './CategorySelectionModal.css';

function CategorySelectionModal({ categories, onSelectCategory, onClose }) {
  return (
    <div className="modal">
      <h2>Select a Category</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <button onClick={() => onSelectCategory(category.id)}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default CategorySelectionModal;
