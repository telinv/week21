import { Chart } from "react-google-charts";
import './App.css';

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 8],
  ["Eat", 2],
  ["Commute", 4],
  ["Watch YouTube", 1],
  ["Sleep", 7],
  ["Sport", 2],
];
export const options = {
  title: "My Daily Activities",
};
function App() {
  return (
    <div className="App">
      <Chart
  chartType="PieChart"
  data={data}
  options={options}
  width="100%"
  height="400px"
  legendToggle
/>
    </div>
  );
}

export default App;
