import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { useNavigate } from "react-router-dom";
import { musicRecommend } from '../services/appServices';

export default function Home() {
  const navigate = useNavigate();
  const [emotionValues, setData] = useState([50, 50, 50, 50, 50, 50, 50, 50, 50, 50]);

  const onClick = (evt) => {
    console.log(evt.points[0].y);
  };

  const onDataChanged = (index, value) => {
    const newData = [...emotionValues];
    newData[index] = value;
    setData(newData);
  };

  const markerColors = ['#FF4136', '#FF851B', '#FFDC00', '#2ECC40', '#0074D9', '#B10DC9', '#01FF70', '#7FDBFF', '#85144b', '#FFD700'];
  const emotion = ['슬픔', '외로움', '분노', '사랑', '즐거움', '행복', '놀라움', '공허', '떨림', '열정'];
  
  return (
    <div>
      <Plot
        data={[
          {
            type: 'scatterpolar',
            r: emotionValues,
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
        {emotionValues.map((value, index) => (
          <div key={index}>
            <span>{emotion[index]}: </span>
            <input
              type="number"
              min={0}
              max={100}
              step={5}
              value={value}
              onChange={(evt) => onDataChanged(index, parseFloat(evt.target.value))}
            />
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            navigate(`/musicRecom`, {
              state: {
                emotions: emotionValues
              }, 
              replace: false 
            });
          }}>
          음악 추천 받기
        </button>
      </div>
    </div>
  );
};
