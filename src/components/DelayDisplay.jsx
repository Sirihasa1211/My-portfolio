import React, { useState, useEffect } from 'react';
import './DelayDisplay.css'; // You'll create this CSS file

function DelayedDisplay({ delay, children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`fade-container ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

export default DelayedDisplay;
