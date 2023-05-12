import React, { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt }) => {
  const ref = useRef();
  const [inView, setInview] = useState(false);

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInview(true);
      }
    });
  };
  useEffect(() => {
    let observer = new IntersectionObserver(callback);

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      //   if(ref.?current){
      //     observer.unobserve(ref.current);
      //   }
      observer.disconnect();
    };
  }, []);

  return inView ? <img src={src} alt={alt} /> : <img ref={ref} alt="loading" />;
};

export default LazyImage;
