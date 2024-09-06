import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';

const Home = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <LineChart />
      <BarChart />
      <PieChart />
    </div>
  );
};

export default Home;
