import Link from "next/link";

const LargeButton = ({ text, className, href }) => {
  return (
    <Link href={href}>
      <button className={` w-40 h-20 rounded-xl z-50 ${className}`}>
        {text}
      </button>
    </Link>
  );
};

export default LargeButton;
