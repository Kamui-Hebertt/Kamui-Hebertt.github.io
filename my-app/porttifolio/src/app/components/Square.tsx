"use client"

import { motion, useTransform, useScroll } from "framer-motion"
import { useEffect, useRef } from "react";

function Square() {


  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentDiv = divRef.current;

    if (currentDiv) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentDiv.classList.add('move-right');
          } else {
            currentDiv.classList.remove('move-right');
          }
        });
      });

      observer.observe(currentDiv);

      return () => {
        observer.unobserve(currentDiv);
      };
    }
  }, [divRef.current]);



  return (


    <>
    
     <div className=" bg-black  border border-t-sky-100">
      
        <motion.p  
        ref={divRef}
        className="moving-div text-white"
        initial={{ x: -25 }}
        animate={{ x: "10rem" }}
        transition={{ duration: 1 }}
        style={{ maxWidth: '20%', border: "1px solid black" }} >Content
        </motion.p>
     
    </div> 
{/*     
    <motion.div style={{
      color: 'green',
      fontSize: 20,
      width: '300px',
      height: '30px',
      textAlign: 'center',
      border: '2px solid green',
      margin: '40px'
    }}

      whileHover={{  width: '500px' }}
    >
      GeeksforGeeks
    </motion.div>
    </> */}

    </>
  );
}

export default Square;