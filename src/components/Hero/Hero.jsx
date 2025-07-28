import React from "react";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow.png";
import hero_image from "../../assets/hero_image.png";
import '../../index.css';

const Hero = () => {
  return (
    <>
      <div
        id="hero"
        className="flex font-poppins  h-[100vh] bg-gradient-to-b from-[#fde1ff] from-0% to-[#e1ffea22] to-60% "
      >
        <div id="hero-left" className="flex-1 flex flex-col justify-center gap-5 pl-[180px] leading-[1.1]">
          <h2 className="text-[#090909]  font-semibold text-[26px]">NEW ARRIVAL ONLY</h2>
          <div id="hero-hand-icon" className="flex items-center gap-5">
            <p className="text-[#171717] text-[70px] font-semibold">new</p>
            <img src={hand_icon} className="w-[105px] " alt="" />
          </div>
          <p className="text-[#171717] text-[70px]  font-semibold">collections</p>
          <p className="text-[#171717] text-[70px] font-semibold">for everyone</p>
          <div id="hero-latest-button" className="flex justify-center items-center gap-4 w-[310px] h-[70px] rounded-[75px] mt-8 bg-[#ff4141] text-white text-[22px] font-normal">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div id="hero-right" className="flex-1 flex items-center justify-center ">
          <img src={hero_image} className=" "  alt="" />
        </div>
      </div>
      

    </>
  );
};

export default Hero;
