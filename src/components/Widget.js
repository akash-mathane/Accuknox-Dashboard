// src/components/Widget.js
import React from 'react';
import Chart from './Chart';
import './Category.css'; // Ensure this is imported

function Widget({ widget, onRemove }) {
  return (
    <div className="widget-item">
      <h4>{widget.name}</h4>
      <p>{widget.text}</p>
      <div className="widget-chart">
        <Chart type={widget.chartType} />
      </div>
      <button onClick={() => onRemove(widget.id)} className="remove-widget-button">Remove</button>
    </div>
  );
}

export default Widget;
