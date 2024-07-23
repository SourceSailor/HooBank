import React from "react";
import { bill, apple, google } from "../assests";
import styles from "../style";

const Billing = () => (
  <section className={`${styles.flexCenter} md:flex-row flex-col mb-40`}>
    {/* Image Section */}
    <div className={` w-[100%] z-[4] relative`}>
      <img
        className={` m-auto just object-contain relative md:w-[100%] w-[80%] md:mb-0 mb-10`}
        src={bill}
        alt="Bill"
      />

      <div className="blue__gradient z-[0] w-[15%] h-[60%] absolute top-20" />
      <div className="pink__gradient z-[1] w-[15%] h-[90%] absolute bottom-10" />
      <div className="blue__gradient z-[0] w-[10%] h-[10%] absolute bottom-10" />
    </div>

    {/* Content Section */}
    <div className="text-white w-[100%] md:ml-20">
      <div className="">
        <h2
          className={`${styles.heading2} xs:text-[30px] sm:text-[50px] xs:leading-[50px] sm:leading-[76px] `}
        >
          Easily control your billing & invoicing.
        </h2>
        <p className={`${styles.paragraph}`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
      </div>
      <div className={`flex flex-row justify-items-start mt-5`}>
        <img className="cursor-pointer mr-5" src={apple} alt="Apple logo" />
        <img className="cursor-pointer" src={google} alt="Google logo" />
      </div>
    </div>
  </section>
);
export default Billing;
