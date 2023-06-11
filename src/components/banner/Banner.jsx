import LargeText from "../text/LargeText";

const Banner = () => {
  return (
    <div>
      <LargeText
        titleClassName="text-5xl text-bold pb-40 z-50"
        title="Providing a first class service for over 15 years"
      />

      <div className="overflow-hidden inset-0 bg-black opacity-50 mt-20 flex justify-around items-center w-full ">
        <video
          className="w-30 h-80 rounded pr-1"
          src="/chauffer-guy.mp4"
          autoPlay
          loop
          muted
        />
        <video
          className="w-30 h-80 rounded pr-1"
          src="/night_-_51474 (Original).mp4"
          autoPlay
          loop
          muted
        />
        <video
          className="w-30 h-80 rounded "
          src="/property.mp4"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default Banner;
