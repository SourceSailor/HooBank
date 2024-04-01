import React from "react";
import styles from "../style";
import { discount, robot } from "../assests";
import "../index.css";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section
    id="home"
    className={`flex md:flex-row flex-col ${styles.paddingY} md:justify-between`}
  >
    {/* TEXT SECTION */}

    <div className={`flex  flex-col xl:px-0 sm:px-16 px-6 ${styles.flexStart}`}>
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
        {/* MAIN TEXT */}

        <h1 className="text-white font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
          The Next
          <br className="sm:block hidden" />
          <span className="text-gradient">Generation</span>
          <br className="sm:block hidden" />
          Payment Method
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
    </div>

    {/* IMAGE SECTION */}
    <div className="w-[669px]">
      <img src={robot} alt="Robot" />
    </div>
  </section>
);

export default Hero;
