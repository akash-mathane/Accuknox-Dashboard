// src/components/AddWidgetModal.js
import React, { useState } from 'react';

function AddWidgetModal({ categoryId, onClose, onAdd }) {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [chartType, setChartType] = useState('bar');

  const handleAdd = () => {
    const newWidget = {
      id: Date.now().toString(), // Use a unique ID generator in production
      name: widgetName,
      text: widgetText,
      chartType,
    };
    onAdd(categoryId, newWidget);
    onClose();
  };

  return (
    <div className="modal">
      <h2>Add Widget</h2>
      <input 
        type="text" 
        placeholder="Widget Name" 
        value={widgetName} 
        onChange={(e) => setWidgetName(e.target.value)} 
      />
      <textarea 
        placeholder="Widget Text" 
        value={widgetText} 
        onChange={(e) => setWidgetText(e.target.value)} 
      />
      <select 
        value={chartType} 
        onChange={(e) => setChartType(e.target.value)}
      >
        <option value="circle">Circle Chart</option>
        <option value="donut">Donut Chart</option>
        <option value="bar">Bar Chart</option>
        <option value="graph">Graph</option>
      </select>
      <button onClick={handleAdd}>Add Widget</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default AddWidgetModal;
