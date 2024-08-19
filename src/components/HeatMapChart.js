// src/components/HeatMapChart.js
import React from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap';

const HeatMapChart = () => {
  const data = [
    {
      id: 'Japan',
      data: [
        { x: 'January', y: 90 },
        { x: 'February', y: 80 },
        { x: 'March', y: 70 },
        // Add more data points
      ],
    },
    // Add more countries or datasets
  ];

  const keys = ['January', 'February', 'March']; // Define keys for columns

  return (
    <div style={{ height: '300px' }}>
      <h3>Heat Map Chart</h3>
      <ResponsiveHeatMap
        data={data}
        keys={keys}
        indexBy="id"
        margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
        cellOpacity={1}
        cellBorderColor={{ from: 'color', modifiers: [['darker', 0.1]] }}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.2]] }}
        colors={{ scheme: 'nivo' }} // Make sure this is a valid scheme
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#eed',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#ddd',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[{ id: 'dots' }]}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Month',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Country',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
      />
    </div>
  );
};

export default HeatMapChart;
