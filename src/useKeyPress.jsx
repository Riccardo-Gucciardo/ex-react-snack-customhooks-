import { useState, useEffect } from 'react';

function useKeyPress(targetKey) {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === targetKey) {
      setIsKeyPressed(true);
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === targetKey) {
      setIsKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [targetKey]);

  return isKeyPressed;
}

export default useKeyPress;