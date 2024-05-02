import { useState, useEffect } from 'react';

function Conteo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>{count} segundos han pasado!!</p>
    </div>
  );
}

export default Conteo;
