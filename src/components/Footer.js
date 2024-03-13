import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className='p-4'
      style={{
        backgroundColor: "rgb(119 35 35)",
      }}
    >
      <div className='container mx-auto text-center text-white'>
        <p>&copy; 2024 MovieTrending. All rights reserved.</p>
        <div className='flex justify-center space-x-4 mt-2'>
          <FontAwesomeIcon icon={faFacebook} className='text-white' />
          <FontAwesomeIcon icon={faTwitter} className='text-white' />
          <FontAwesomeIcon icon={faInstagram} className='text-white' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
