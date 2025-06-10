import { useState } from 'react';

function useSwitch() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(prev => !prev);
  };

  return [isOn, toggle];
}

export default useSwitch;