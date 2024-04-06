import React from "react";
import styles from "../style";
import { airbnb, binance, dropbox, coinbase } from "../assests";

const Clients = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} justify-between md:flex-row flex-col`}
  >
    <img className="w-[192px] md:mb-0 mb-10" src={airbnb} alt="AirBnb logo" />
    <img className="w-[192px] md:mb-0 mb-10" src={binance} alt="binance logo" />
    <img className="w-[192px] md:mb-0 mb-10" src={dropbox} alt="dropbox logo" />
    <img
      className="w-[192px] md:mb-0 mb-10"
      src={coinbase}
      alt="coinbase logo"
    />
  </section>
);
export default Clients;
