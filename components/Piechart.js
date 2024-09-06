import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { useState, useEffect } from 'react';

const PieChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/api/pie-chart-data/')
      .then(response => {
        const data = {
          labels: response.data.labels,
          datasets: [{
            label: 'Pie Chart',
            data: response.data.data,
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1
          }]
        };
        setChartData(data);
      });
  }, []);

  return <Pie data={chartData} />;
};

export default PieChart;
