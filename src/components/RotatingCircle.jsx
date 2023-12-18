import React, { useEffect, useState } from 'react';

const RotatingCircle = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showCircleTimeout = setInterval(() => {
      setIsVisible(true);
    }, 2000);

    const rotateInterval = setInterval(() => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 0);
    }, 10000);

    return () => {
      clearTimeout(showCircleTimeout);
      clearInterval(rotateInterval);
    };
  }, []);

  return (
    <div className={`rotating-text ${isVisible ? 'visible' : ''}`}>
      
    </div>
  );
};

export default RotatingCircle;