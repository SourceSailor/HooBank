import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import { quotes } from "../assests";

const Testimonials = () => (
  <section className={`${styles.marginY}`}>
    {/* Heading Section */}
    <div
      className={`${styles.flexCenter} w-[100%] mb-20 flex-col md:flex-row md:mt-40`}
    >
      <h2
        className={` ${styles.heading2} xs:text-[30px] sm:text-[50px] xs:leading-[50px] sm:leading-[76px]`}
      >
        What people are
        <br />
        saying about us
      </h2>
      <p className={`${styles.paragraph} w-[100%]`}>
        Everything you need to accept card payments
        <br />
        and grow your business anywhere on the planet.
      </p>
    </div>

    {/* Testimonial Section */}
    <div className={`${styles.flexCenter} flex-col md:flex-row z-[3] relative`}>
      {feedback.map((data, idx) => (
        <div
          key={data.id}
          className={`p-6 feature-card rounded-[20px] text-white w-[100%] h-[100%] md:min-h-[300px] flex flex-col mb-10 md:mr-5 z-[3] relative`}
        >
          <img
            className=" w-[42px] h-[27px] flex-1"
            src={quotes}
            alt="Quotes"
          />
          <p className="text-[18px] leading-[32px]">{data.content}</p>
          <div className="flex flex-row mt-10 ">
            <img
              className="w-[48px]"
              src={data.img}
              alt="Testimonial Headshot"
            />
            <div className="my-auto ml-5">
              <p>{data.name}</p>
              <p>{data.title}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Background Gradient */}
      <div className="blue__gradient z-[1] w-[15%] h-[60%] absolute top-10 right-0" />
      <div className="pink__gradient z-[0] w-[15%] h-[20%] absolute bottom-10 right-0" />
      <div className="blue__gradient z-[1] w-[30%] h-[90%] absolute bottom-10 right-0" />
    </div>
  </section>
);

export default Testimonials;
