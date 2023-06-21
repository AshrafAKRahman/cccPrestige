const LargeText = ({ titleClassName, title }) => {
  return (
    <div className="relative">
      <div className="">
        <h1 className={`text-white ${titleClassName}`}>{title}</h1>
      </div>
    </div>
  );
};
export default LargeText;
