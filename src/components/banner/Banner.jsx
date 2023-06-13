import LargeButton from "../buttons/LargeButton";
import LargeText from "../text/LargeText";

const Banner = () => {
  return (
    <div className="relative">
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
      <div className="absolute mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <LargeButton
          text="Book now"
          href="/Properties"
          className="bg-blue-200"
        />
      </div>
    </div>
  );
};

export default Banner;
