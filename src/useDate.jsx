import { useState, useEffect } from 'react';

function useDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Pulizia al momento dello smontaggio
  }, []);

  return currentDate;
}

export default useDate;