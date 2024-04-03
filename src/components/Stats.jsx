import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section
    className={`flex ${styles.flexCenter} ${styles.paddingY} justify-between px-0 lg:px-20 flex-col sm:flex-row `}
  >
    {stats.map((stat) => (
      <div
        className={`${styles.flexCenter} text-white flex font-poppins leading-[53px]font-semibold m-0 md:ml-5 flex-col md:flex-row  mb-10`}
        key={stat.id}
      >
        <h4 className="text-[40px]  mr-0 sm:mr-5">{stat.value} </h4>
        <p className="md:text-[20px]  mr-0 sm:mr-5 text-[15px] text-gradient font-normal">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
