import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import './timeAndDateDisplay.css'

function TimeAndDateDisplay() {
  const [currentTime, setCurrentTime] = useState(Moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Moment());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='centerTimeAndDateDisplay'>
        <div className='clockAppDateDisplay'>{currentTime.format('dddd, MMMM DD')}</div>
        <div className='clockAppTimeDisplay'>
            
            <span>{currentTime.format('h:mm')}</span><span className='clockAppTimeDisplayAmPm'>{currentTime.format('a')}</span>
        </div>
    </div>
  );
}

export default TimeAndDateDisplay;