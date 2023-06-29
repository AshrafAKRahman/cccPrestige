const Banner = () => {
  return (
    <div className="opacity-50 mt-20 flex justify-around items-center">
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
  );
};

export default Banner;
