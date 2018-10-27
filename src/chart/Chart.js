import React from 'react';
import { PieChart, Cell, Pie, Tooltip } from 'recharts';

import './Chart.css';

const data = [
  { name: 'Bad', value: 100 },
  { name: 'Below average', value: 300 },
  { name: 'Average', value: 200 },
  { name: 'Good', value: 400 },
  { name: 'Excellent', value: 100 },
];
const COLORS = ['#ffd965', '#ffc103', '#93bbfb', '#3f88fb', '#166ef8'];

class Chart extends React.Component {
  render() {
    return (
      <PieChart width={304} height={304}>
        <Tooltip />
        <Pie data={data} cx={150} cy={150} innerRadius={80} outerRadius={140} paddingAngle={0}>
          {data.map((entry, index) => (
            <Cell fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}

export default Chart;
