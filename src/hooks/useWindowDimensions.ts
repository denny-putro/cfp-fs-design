import { useEffect, useState } from 'react';

type WindowDimensions = {
  width: number;
  height: number;
  isMobileView: boolean;
};

const getWindowDimensions = (): WindowDimensions => {
  const { innerWidth, innerHeight } = window;

  return {
    width: innerWidth,
    height: innerHeight,
    isMobileView: innerWidth < 960,
  };
};

const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: 0,
    height: 0,
    isMobileView: false,
  });

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
