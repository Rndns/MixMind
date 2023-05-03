import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { useNavigate } from "react-router-dom";
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

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

  const markerColors = ['#0074D9', '#FF4136', '#0074D9', '#FF4136', '#0074D9', '#FF4136', '#0074D9', '#FF4136', '#0074D9','#FF4136'];
  const emotion = ['사랑', '슬픔', '즐거움', '분노', '열정', '외로움', '행복', '그리움', '놀라움', '두려움'];
  
  return (
    <div className='home'>
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
              visible: false,
              range: [0, 100]
            }
          },
          margin: {
            t: 50,
            b: 50,
            l: 50,
            r: 50
          },
          width: 500,
          height: 500,
          hovermode: 'closest',
          plot_bgcolor: '#121212',
          paper_bgcolor: '#121212',
          font: {
            color: 'white'
          }
        }}
        onClick={onClick}
      />
      <ListGroup className='emotionrange'>
        {emotionValues.map((value, index) => (
          <div key={index} className='emotionlist'>
            <div><b>{emotion[index]}</b></div>
            <div>
              <input
                min={0}
                max={100}
                step={5}
                type='range'
                value={value}
                onChange={(evt) => onDataChanged(index, parseFloat(evt.target.value))}
              />
            </div>
            <div><b>{value}</b></div>
          </div>
        ))}
      </ListGroup>
      <div className='button-wrapper'>
        <Button className='homebutton' variant='dark'
          onClick={() => {
            navigate(`/musicRecom`, {
              state: {
                emotions: emotionValues
              }, 
              replace: false 
            });
          }}>
          <b>음악 추천 받기</b>
        </Button>
      </div>
    </div>
    
  );
};
