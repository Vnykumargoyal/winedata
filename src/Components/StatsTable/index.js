import React from "react";
import './style.css';
const StatsTable = ({ data, setOff }) => {
  const arr = ['Mean', 'median', 'Mode']
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Measure</th>
          {data.map(({ className }) => (
            <th key={className}>Class {className}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ mean, median, mode, className, index }) => (
          <tr>
            <React.Fragment key={className}>
              <td className="td"><strong>{setOff} {arr[className - 1]}</strong></td>
              <td className="td">{mean}</td>
              <td className="td">{median}</td>
              <td className="td">{mode}</td>
            </React.Fragment>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StatsTable;