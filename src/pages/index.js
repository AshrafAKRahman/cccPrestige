import Footer from "@/components/footer/footer";
import LandingPage from "./LandingPage";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="fixed inset-0 bg-black justify-center">
      <Navbar />
      <LandingPage />
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
      </div>
      <Footer />
    </div>
  );
}
