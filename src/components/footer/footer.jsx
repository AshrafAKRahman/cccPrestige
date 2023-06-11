import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-between items-center fixed h-20 inset-x-0 bottom-0 bg-white z-50">
      <div className="ml-10 flex mt-8">
        <a className="text-3xl  mr-5">
          <FaFacebookF />
        </a>
        <a className="text-3xl mr-5">
          <FaInstagram />
        </a>
        <a className="text-3xl">
          <FaTiktok />
        </a>
      </div>
      <p className="ml-40 mt-10">
        &copy; 2023 CCC Prestige. All rights reserved.
      </p>
      <div>
        <Image src="/london.svg" alt="london image" width={550} height={200} />
      </div>
    </div>
  );
};

export default Footer;
