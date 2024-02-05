import React from "react";

const Button = ({ label, color, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-2 py-1 uppercase text-sm bg-${color}-500 text-white rounded-full hover:bg-${color}-600 cursor-pointer`}
    >
      {label}
    </button>
  );
};

export default Button;
