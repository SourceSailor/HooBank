import { logo, instagram, facebook, twitter, linkedin } from "../assests";
import { footerLinks } from "../constants/index";
import styles from "../style";
import React from "react";

const Footer = () => (
  <section className={`mt-40 mb-20`}>
    <div className={`${styles.flexStart} mt-40 mb-20`}>
      <div className="flex-1 mr-40 ">
        <img src={logo} alt="Logo" />
        <p className={`${styles.paragraph} mt-5`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      {footerLinks.map((footerItem, idx) => (
        <div key={idx} className=" flex-1">
          <h4 className="text-[18px] text-white font-medium mb-5">
            {footerItem.title}
          </h4>
          <ul>
            {footerItem.links.map((link) => (
              <li className="mt-3">
                <a
                  className="text-[16px] font-normal text-gray-50 "
                  href={link.link}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="border border-grey-100 mb-10"></div>
    <div className={`text-white flex justify-between px-20`}>
      <p>Copyright 2021 HooBank. All Rights Reserved.</p>
      <div className="flex flex-row">
        <img className="mr-10 cursor-pointer" src={facebook} alt="facebook" />
        <img className="mr-10 cursor-pointer" src={instagram} alt="instagram" />
        <img className="mr-10 cursor-pointer" src={twitter} alt="twitter" />
        <img className="mr-10 cursor-pointer" src={linkedin} alt="linkedin" />
      </div>
    </div>
  </section>
);

export default Footer;
