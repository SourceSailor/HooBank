import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content }) => (
  <div
    className={`flex flex-row p-6 feature-card rounded-[20px] text-white w-[100%]`}
  >
    <div
      className={`bg-dimBlue rounded-full h-[64px] w-[64px] ${styles.flexCenter}`}
    >
      <img className="w-[50%] h-[50%] object-contain" src={icon} alt="Icon" />
    </div>
    <div className="flex-1 flex flex-col ml-5">
      <h4 className="text-[18px] leading-[23px] font-semibold">{title}</h4>
      <p className="text-[16px] font-normal leading-[24px]">{content}</p>
    </div>
  </div>
);

const Business = () => (
  <section
    id="features"
    className={`${layout.section} ${styles.flexCenter} mb-20`}
  >
    {/* Content Section */}
    <div className={layout.sectionInfo}>
      <h2
        className={`${styles.heading2} xs:text-[30px] sm:text-[50px] xs:leading-[50px] sm:leading-[76px]`}
      >
        You do the business,
        <br className="sm:block hidden" />
        we’ll handle the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[500px]`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button styles="mt-10" />
    </div>

    {/* Interactive Cards Section */}
    <div className={`${layout.sectionImg} flex-col `}>
      {features.map((feature, idx) => (
        <FeatureCard
          key={feature.id}
          title={feature.title}
          icon={feature.icon}
          content={feature.content}
        />
      ))}
    </div>
  </section>
);

export default Business;
