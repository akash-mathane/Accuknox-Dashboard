// src/App.js
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import AddWidgetModal from './components/AddWidgetModal';
import CategorySelectionModal from './components/CategorySelectionModal';
import TopBar from './components/TopBar';
import { initialData } from './data';
import './App.css';

function App() {
  const [categories, setCategories] = useState(initialData.categories);
  const [showAddWidgetModal, setShowAddWidgetModal] = useState(false);
  const [showCategorySelection, setShowCategorySelection] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddWidget = (categoryId) => {
    setActiveCategoryId(categoryId);
    setShowAddWidgetModal(true);
  };

  const handleCategorySelection = (categoryId) => {
    setActiveCategoryId(categoryId);
    setShowAddWidgetModal(true);
    setShowCategorySelection(false);
  };

  const handleAddWidgetToCategory = (categoryId, widget) => {
    setCategories(categories.map(cat => 
      cat.id === categoryId 
        ? { ...cat, widgets: [...cat.widgets, widget] } 
        : cat
    ));
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    setCategories(categories.map(cat => 
      cat.id === categoryId 
        ? { ...cat, widgets: cat.widgets.filter(widget => widget.id !== widgetId) } 
        : cat
    ));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredCategories = categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget => 
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="App">
      <TopBar onSearch={handleSearch} />
      <Dashboard 
        categories={filteredCategories} 
        onAddWidget={() => setShowCategorySelection(true)} 
        onRemoveWidget={handleRemoveWidget}
        onShowCategorySelection={() => setShowCategorySelection(true)}
      />
      {showCategorySelection && 
        <CategorySelectionModal 
          categories={categories} 
          onSelectCategory={handleCategorySelection} 
          onClose={() => setShowCategorySelection(false)} 
        />
      }
      {showAddWidgetModal && 
        <AddWidgetModal 
          categoryId={activeCategoryId} 
          onClose={() => setShowAddWidgetModal(false)} 
          onAdd={handleAddWidgetToCategory} 
        />
      }
    </div>
  );
}

export default App;
