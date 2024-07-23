import { logo, instagram, facebook, twitter, linkedin } from "../assests";
import { footerLinks } from "../constants/index";
import styles from "../style";
import React from "react";

const Footer = () => (
  <section className={`md:mt-40 mt-0 mb-20`}>
    {/* Footer Links and Logo */}
    <div
      className={`${styles.flexStart} mt-40 mb-20 grid grid-cols-2 grid-flow-row gap-10 sm:grid-cols-none sm:grid-flow-none sm:gap-0 sm:flex sm:flex-row
      `}
    >
      {/* Footer Logo */}
      <div className="flex-1 mr-5 sm:mr-20 md:mr-40">
        <img src={logo} alt="Logo" />
        <p className={`${styles.paragraph} mt-5`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      {/* Footer Links */}
      {footerLinks.map((footerItem, idx) => (
        <div key={idx} className="flex-1">
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

    {/* Border Line */}
    <div className="border border-grey-100 mb-10"></div>

    {/* Copyright and Social Links */}
    <div
      className={`text-white flex justify-between px-20 flex-col md:flex-row md:text-left text-center`}
    >
      <p className="">Copyright 2021 HooBank. All Rights Reserved.</p>
      <div className="flex flex-row mt-10 md:mt-0 items-center justify-center">
        {/* Social Links */}
        <img
          className="mr-10 w-[40px] cursor-pointer"
          src={facebook}
          alt="facebook"
        />
        <img
          className="mr-10 w-[40px] cursor-pointer"
          src={instagram}
          alt="instagram"
        />
        <img
          className="mr-10 w-[40px] cursor-pointer"
          src={twitter}
          alt="twitter"
        />
        <img
          className="mr-10 w-[40px] cursor-pointer"
          src={linkedin}
          alt="linkedin"
        />
      </div>
    </div>
  </section>
);

export default Footer;
