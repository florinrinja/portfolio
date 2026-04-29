import { useEffect, RefObject } from 'react';

export function useHideNavOnScroll(navRef: RefObject<HTMLElement>, hiddenClass: string) {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();
    let upwardAccumulator = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const deltaY = currentScrollY - lastScrollY;
      const deltaTime = currentTime - lastScrollTime || 1;
      const velocity = Math.abs(deltaY) / deltaTime; // px/ms

      if (deltaY > 0) {
        upwardAccumulator = 0;
        if (currentScrollY > 50) {
          navRef.current?.classList.add(hiddenClass);
        }
      } else if (deltaY < 0) {
        upwardAccumulator += Math.abs(deltaY);
        if (upwardAccumulator > 200 || velocity > 1.5) {
          navRef.current?.classList.remove(hiddenClass);
          upwardAccumulator = 0;
        }
      }

      lastScrollY = currentScrollY;
      lastScrollTime = currentTime;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}