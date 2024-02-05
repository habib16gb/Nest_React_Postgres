import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link
        className='uppercase text-blue-600 font-bold italic hover:text-blue-800 text-2xl'
        to={"/home"}
      >
        logo
      </Link>
    </div>
  );
};

export default Logo;
