import React from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} bg-black-gradient sm:px-10 px-1 sm:py-20 py-5 rounded-3xl justify-between my-20 sm:flex-row flex-col`}
  >
    <div className="sm:w-[70%] w-[80%]">
      <h2
        className={`${styles.heading2} xs:text-[30px] sm:text-[50px] xs:leading-[50px] sm:leading-[76px]`}
      >
        Let’s try our service now!
      </h2>
      <p className={`${styles.paragraph}`}>
        Everything you need to accept card payments
        <br className="md:block hidden" />
        and grow your business anywhere on the planet.
      </p>
    </div>
    <div className="sm:w-[30%] w-[100%] flex justify-end lg:justify-center mr-0 md:mr-20 sm:mt-0 mt-10 sm:mb-0 mb-5">
      <Button />
    </div>
  </section>
);
export default CTA;
