import {useEffect, useState, useRef} from 'react';

// eslint-disable-next-line require-jsdoc
export function useNearScreen() {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(function() {
    // Dynamic import. Only when the hook is used.
    Promise.resolve(
    typeof window.IntersectionObserver !== 'undefined' ?
      window.IntersectionObserver :
      import('intersection-observer'),
    ).then(()=> {
      // To verify if the element is in the viewport and act as a LazyLoad
      const observer = new window.IntersectionObserver(function(entries) {
        const {isIntersecting} = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    });
  }, [element]);

  return [show, element];
};
