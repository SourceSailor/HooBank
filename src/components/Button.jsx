import React from "react";

const Button = ({ styles }) => (
  <button
    className={`bg-blue-gradient font-poppins font-medium text-[18px] px-5 py-3 rounded-[10px] ${styles}`}
    type="button"
  >
    Get Started
  </button>
);

export default Button;
