import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { useNavigate } from "react-router-dom";
import { musicRecommend } from '../services/appServices';

export default function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([50, 50, 50, 50, 50, 50]);

  const onClick = (evt) => {
    console.log(evt.points[0].y);
  };

  const onDataChanged = (index, value) => {
    const newData = [...data];
    newData[index] = value;
    setData(newData);
  };

  const markerColors = ['#FF4136', '#FF851B', '#FFDC00', '#2ECC40', '#0074D9', '#B10DC9'];
  const emotion = ['슬픔', '외로움', '분노', '사랑', '즐거움', '행복']
  return (
    <div>
      <Plot
        data={[
          {
            type: 'scatterpolar',
            r: data,
            theta: emotion,
            fill: 'toself',
            hoverinfo: 'none',
            mode: 'markers',
            marker: {
              size: 10,
              color: markerColors,
              opacity: 0.7
            },
            line: {
              color: 'skyblue',
              width: 2,
              opacity: 0.7
            }
          }
        ]}
        layout={{
          polar: {
            gridshape: 'linear',
            radialaxis: {
              visible: true,
              range: [0, 100]
            }
          },
          margin: {
            t: 50,
            b: 50,
            l: 50,
            r: 50
          },
          width: 400,
          height: 400,
          hovermode: 'closest'
        }}
        onClick={onClick}
      />
      <div>
        {data.map((value, index) => (
          <div key={index}>
            <span>{emotion[index]}: </span>
            <input
              type="number"
              min={0}
              max={100}
              step={5}
              value={value}
              onChange={(evt) => onDataChanged(index, evt.target.value)} //parseFloat
            />
          </div>
        ))}
      </div>
      <div>
        <button
          type="button"
          onClick={e => {
            musicRecommend(data).then(data => {
              console.log(data);
              navigate("/MusicRecom", { replace: true });
            });
          }}>
          추천음악이동
        </button>
      </div>
    </div>
  );
};
