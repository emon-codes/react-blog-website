import React from "react";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const TopHeader = () => {
  return (
    <div className="bg-linear-to-r from-[#BD278A] to-[#3AB6EC] py-1 text-white">
      <div className="flex items-center justify-between container mx-auto ">
        <div className="flex gap-4">
          <CiFacebook />
          <CiTwitter />
          <CiInstagram />
        </div>

        <div className="flex gap-4">
          {/* <p>About us</p>
          <p>Contact Us</p> */}
          <p>Success Story</p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
