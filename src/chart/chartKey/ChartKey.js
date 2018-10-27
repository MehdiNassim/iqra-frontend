import React from 'react';
import EllipseIcon from '@material-ui/icons/TripOrigin';

const data = [
  { name: 'Bad', value: 100 },
  { name: 'Below average', value: 300 },
  { name: 'Average', value: 200 },
  { name: 'Good', value: 400 },
  { name: 'Excellent', value: 100 },
];
const COLORS = ['#ffd965', '#ffc103', '#93bbfb', '#3f88fb', '#166ef8'];

class ChartKey extends React.Component {
  render() {
    return (
      <div>
        {data.map((value, index) => (
          <div>
            <EllipseIcon width={24} height={24} style={{ color: COLORS[index] }} />
            <p color={COLORS[index]}>
              {value.name} ({value.value})
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default ChartKey;
