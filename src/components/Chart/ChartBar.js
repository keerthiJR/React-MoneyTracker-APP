import React, { useState } from 'react';
import './ChartBar.css';

const ChartBar = (props) => {
  const [hover, setHover] = useState(false);
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
          onMouseOver={() => { setHover(true) }}
          onMouseLeave={() => { setHover(false) }}
        >{hover ? props.value : null}</div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;
