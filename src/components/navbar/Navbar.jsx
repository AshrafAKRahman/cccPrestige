import Image from "next/image";
import LargeButton from "../buttons/LargeButton";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between w-full h-30 bg-white sticky top-0">
      <div className="flex justify-start ml-10">
        <LargeButton
          text="Vehicles"
          href="/Vehicles"
          className="bg-black text-white shadow-2xl "
        />
      </div>
      <div className="flex justify-center w=1/3">
        <Image src="/logo.jpg" alt="Logo" height={10} width={200} />
      </div>
      <div className="flex justify-end mr-10">
        <LargeButton
          text="Properties"
          href="/Properties"
          className="bg-black text-white shadow-xl shadow-black/20 dark:shadow-black/40"
        />
      </div>
    </nav>
  );
};

export default Navbar;
