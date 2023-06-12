import Link from "next/link";

const LargeButton = ({ text, className, href }) => {
  return (
    <Link href={href}>
      <button
      // className={`w-44 h-6 text-lg md:w-64 md:h-12 md:text-xl lg:w-72 lg:h-16 lg:text-2xl text-green-600 font-bold transform hover:scale-110 transition-transform rounded`}
      >
        {text}
      </button>
    </Link>
  );
};

export default LargeButton;
