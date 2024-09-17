/* eslint-disable react/no-unescaped-entities */


export default function Intro() {

  return (
    <section className="border-2 bg-[#070c24] border-white  w-full ">
     <div className="border-2 border-red flex flex-line pl-20  ">

     <div className="flex flex-col justify-center items-center mt-[60px] w-4 h-15">
     <div className="w-5 h-5 rounded-full bg-[#915EFF]"></div>
     <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-purple-500 to-transparent"></div>
     </div>

     <div className="border-2 mb-12 ml-4 mr-0  pt-5 mt-20 border-red w-25 h-[20rem]">
     <h1 className="border-2  border-red font-black pl-2 lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] text-white ">
      Hi, I'm <span className="text-[#915EFF]">Hebertt</span></h1>
      
      <div className="flex flex-col">
      <p className="pl-4 text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">A Full Stack Engineer </p>
      <p className="pl-4 text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">with full experience in IT industry</p>
      </div>
      </div>

      </div>
      {/* <span className="my-text">Hello</span> */}

      <div className="flex justify-center items-center pb-4 h-[13rem]">
      <div className=" cursor-pointer w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
      <div className="translated-div1"></div>
        </div>
        </div>
    </section>
  );
}