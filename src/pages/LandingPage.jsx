import Banner from "@/components/banner/Banner";
import LargeButton from "@/components/buttons/LargeButton";
import LargeText from "@/components/text/LargeText";

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <LargeText
        titleClassName="text-5xl text-bold text-white"
        title="Hello World !"
      />
      <LargeText
        titleClassName="text-5xl text-bold text-white"
        title="Hello you !"
      />
      <div className="absolute mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <LargeButton
          text="Book now"
          href="/Properties"
          className="bg-blue-200 shadow-xl shadow-white/30"
        />
      </div>
    </div>
  );
};

export default LandingPage;
