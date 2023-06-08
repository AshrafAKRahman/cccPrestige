const Banner = () => {
  return (
    <div className="flex justify-around items-center w-full">
      <video
        className="w-1/3 h-auto rounded"
        src="/chauffer-guy.mp4"
        autoPlay
        loop
        muted
      />
      <video
        className="w-1/3 h-auto rounded"
        src="/night_-_51474 (Original).mp4"
        autoPlay
        loop
        muted
      />
      <video
        className="w-1/3 height-auto rounded"
        src="/property.mp4"
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Banner;
