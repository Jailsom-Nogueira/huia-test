// Libs
import { useLayoutEffect, useState } from 'react';

export const useWindowHook = () => {
  const [width] = useWindowSize();

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  return {
    width
  }
};