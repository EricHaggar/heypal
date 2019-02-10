import React from "react";

import {
  ComposedChart,
  Area,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";

// const styles = {
//   boxSizing: "border-box",
//   padding: "10px",
//   width: "800px",
//   height: "800px",
//   backgroundColor: "#fff"
// };

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.detections);
    this.state = {
      data: [
        {
          name: "Energy",
          uv: 0,
          pv: this.props.detections.Energy * 100,
          amt: 0
        },
        {
          name: "Interest",
          uv: 0,
          pv: this.props.detections.Interest * 100,
          amt: 0
        },
        {
          name: "Pronouns",
          uv: 0,
          pv: this.props.detections.Pronouns,
          amt: 0
        },
        {
          name: "Guilt",
          uv: 0,
          pv: this.props.detections.Guilt * 100,
          amt: 0
        },
        {
          name: "Indecisivness",
          uv: 0,
          pv: this.props.detections.Indecisivness * 100,
          amt: 0
        },
        {
          name: "Negative",
          uv: 0,
          pv: this.props.detections.Negative * 100,
          amt: 0
        }
      ]
    };
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <h2>Emotional Analysis</h2>
        <ComposedChart
          layout="vertical"
          width={600}
          height={400}
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </div>
    );
  }
}

// this.props.detections.then(results => {
//   console.log(results);
// });
// const data = [];

// let i = 0;
// for (let key in this.props.detections.detections) {
//   data[i] = {
//     name: key,
//     uv: 0,
//     pv: this.props.detections.key * 100,
//     amt: 0
//   };
// }

export default BarChart;
