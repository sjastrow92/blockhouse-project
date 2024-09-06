import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { useState, useEffect } from 'react';

const LineChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/api/line-chart-data/')
      .then(response => {
        const data = {
          labels: response.data.labels,
          datasets: [{
            label: 'Line Chart',
            data: response.data.data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        };
        setChartData(data);
      });
  }, []);

  return <Line data={chartData} />;
};

export default LineChart;
