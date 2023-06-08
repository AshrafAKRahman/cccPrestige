import Image from "next/image";
import LargeButton from "../buttons/LargeButton";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full bg-white">
      <div className="flex justify-start w=1/3 ml-10">
        <LargeButton text="Vehicles" href="/Vehicles" />
      </div>
      <div className="flex justify-center w=1/3">
        <Image src="/logo.jpg" alt="Logo" height={10} width={200} />
      </div>
      <div className="flex justify-end w=1/3 mr-10">
        <LargeButton text="Properties" href="/Properties" />
      </div>
    </nav>
  );
};

export default Navbar;