"use client"
import front from '../../../public/front.png';
import back from '../../../public/backend.png';
import Image from 'next/image'
import { stagger, animate } from "framer-motion"
import { useEffect, useRef } from 'react';

export default function StackCards () {

 




  return(
 

<div className="h-[30rem] flex flex-row bg-[#070c24] sm:flex-wrap sm:flex-col">



<div  className="rounded-xl w-5/12 h-[23rem] mx-auto  mt-10 bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
   <div className="flex flex-col justify-between h-full bg-[#070c24] text-white rounded-lg p-4">
   <Image
        src={front}
        alt="web-development"
        width={64}
        height={64}
        className="border"
      />
  dasdasd
     </div>
</div>
  
<div className="rounded-xl  w-5/12  h-[23rem] mx-auto  mt-10 bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
   <div className="flex flex-col justify-between h-full bg-[#070c24] text-white rounded-lg p-4">
   <Image

        src={back}
        alt="web-development"
        width={64}
        height={64}
        className="border"
      />
    <p>Back dasdasd </p>
    
     </div>
</div>
  
   
  </div>



   
  )
}