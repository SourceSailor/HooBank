import React from "react";
import { card } from "../assests";
import styles from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section
    className={`${styles.flexCenter} md:flex-row flex-col-reverse mb-20`}
  >
    {/* Content Section */}
    <div className="text-white w-[100%] md:mr-20">
      <h2
        className={`${styles.heading2} xs:text-[30px] sm:text-[50px] xs:leading-[50px] sm:leading-[76px] `}
      >
        Find a better card deal in few easy steps.
      </h2>
      <p className={`${styles.paragraph}`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-5" />
    </div>

    {/* Image Section */}
    <div className={`w-[100%] z-[4] relative mb-20 md:mb-0`}>
      <img
        className={`m-auto just object-contain relative md:w-[80%] w-[70%] md:mb-0 mb-10`}
        src={card}
        alt="Bill"
      />
    </div>
  </section>
);

export default CardDeal;
