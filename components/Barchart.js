import { Bar } from "react-chartjs-2";
import axios from "axios";
import { useState, useEffect } from "react";

const BarChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/api/bar-chart-data/").then((response) => {
      const data = {
        labels: response.data.labels,
        datasets: [
          {
            label: "Bar Chart",
            data: response.data.data,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      };
      setChartData(data);
    });
  }, []);

  return <Bar data={chartData} />;
};

export default BarChart;
