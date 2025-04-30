import { useCallback } from 'react';

const useScroll = (): ((targetId: string) => void) => {
  const handleScroll = useCallback((targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return handleScroll;
};

export default useScroll;
