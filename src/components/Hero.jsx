import React from "react";
import styles from "../style";
import { discount, robot } from "../assests";
import "../index.css";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section
    id="home"
    className={`flex md:flex-row flex-col ${styles.paddingY} md:justify-between w-full`}
  >
    {/* TEXT SECTION */}

    <div className={`flex flex-col xl:px-0 sm:px-16 px-6 ${styles.flexStart}`}>
      {/* DISCOUNT */}

      <div className="bg-discount-gradient flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2">
        <img className="inline w-[32px]" src={discount} alt="Discount" />
        <p className={`${styles.paragraph} text-grey`}>
          <span className="text-white">20% </span>
          DISCOUNT FOR
          <span className="text-white"> 1 MONTH </span>
          ACCOUNT
        </p>
      </div>
      <div className="flex flex-row justify-between items-start w-full">
        {/* HEADING TEXT */}

        <h1 className="text-white font-poppins font-semibold ss:text-[72px] text-[42px] ss:leading-[100px] leading-[55px]">
          The Next
          <br />
          <span className="text-gradient">Generation</span>
          <br />
          Payment Method
        </h1>

        <div className="ss:flex hidden md:mr-4 mr-0 ss:hidden sm:block">
          <GetStarted />
        </div>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    {/* IMAGE SECTION */}
    <div
      className={`md:w-[669px] flex ${styles.flexCenter} md:my-0 my-10 relative`}
    >
      <img
        className="w-[100%] h-[100%] relative z-[5]"
        src={robot}
        alt="Robot"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 blue__gradient" />
      <div className="absolute z-[0]  right-20 bottom-20 blue__gradient" />
    </div>
  </section>
);

export default Hero;
