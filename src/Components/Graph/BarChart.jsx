import React from 'react';
import { Chart } from 'react-google-charts';
import data from '../../data/data';

const BarChart = () => {
  
  const filteredData = data
    .filter(entry => entry.Status === 'Confirmed')
    // .filter(entry => entry.Date_YMD === '2020-03-14')
    .map(entry => [entry.Date_YMD, entry.HR || 0, entry.KL || 0]);

  const options = {
    title: 'Confirmed Cases Comparison',
    curveType: 'function',
    legend: { position: 'bottom' },
    colors: ['red', 'green'], 
  };

  return (
    <div className='midchart'>
      <Chart
        chartType='Bar'
        width='100%'
        height='100%'
        data={[['Date', 'HR', 'KL'], ...filteredData]}
        options={options}
      />
      
    </div>
  );
};

export default BarChart;

