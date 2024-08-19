// src/components/Chart.js
import React from 'react';
import CircleChart from './CircleChart';
import DonutChart from './DonutChart';
import BarChart from './BarChart';
import GraphChart from './GraphChart';

function Chart({ type }) {
  switch (type) {
    case 'circle':
      return <CircleChart />;
    case 'donut':
      return <DonutChart />;
    case 'bar':
      return <BarChart />;
    case 'graph':
      return <GraphChart />;
    default:
      return null;
  }
}

export default Chart;
