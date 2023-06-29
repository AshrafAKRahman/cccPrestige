import Footer from "@/components/footer/footer";
import LandingPage from "./LandingPage";
import Image from "next/image";
import Backdrop from "@/components/backdrop/backdrop";

export default function Home() {
  return (
    <div>
      <Backdrop />

      {/*  <LandingPage />
      <div className="flex justify-center pb-10">
        <Image
          src="/star_background.gif"
          alt="Background"
          width={480}
          height={270}
          style={{ objectFit: "cover, width: 50%", height: "50%", zIndex: -1 }}
        />
        <Image
          src="/star_background.gif"
          alt="Background"
          width={480}
          height={270}
          style={{ objectFit: "cover, width: 50%", height: "50%", zIndex: -1 }}
        />
        <Image
          src="/star_background.gif"
          alt="Background"
          width={480}
          height={270}
          style={{ objectFit: "cover, width: 50%", height: "50%", zIndex: -1 }}
        />
      </div> */}
    </div>
  );
}
