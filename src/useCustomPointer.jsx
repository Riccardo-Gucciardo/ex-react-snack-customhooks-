import { useState, useEffect } from 'react';

function useCustomPointer(customElement) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = (event) => {
      // Elementi interattivi su cui mostrare il cursore predefinito
      const interactiveElements = ['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA'];
      const targetTag = event.target.tagName;
      // Mostra il cursore predefinito solo su elementi interattivi
      document.body.style.cursor = interactiveElements.includes(targetTag) ? 'auto' : 'none';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      // Ripristina il cursore predefinito quando il componente viene smontato
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {customElement}
    </div>
  );
}

export default useCustomPointer;