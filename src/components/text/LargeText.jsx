const LargeText = ({ titleClassName, title }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className={`text-white ${titleClassName}`}>{title}</h1>
      </div>
    </div>
  );
};
export default LargeText;
