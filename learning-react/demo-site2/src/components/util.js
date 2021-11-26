import { useRef, useEffect } from 'react'


export function useInterval(callback, delay) {
    const savedCallback = useRef(); // 保存callback, 
  
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]); // callback变了, 就更新！
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]); // delay变了, 就更新, 会重新设置tick, 
  }