import Footer from "@/components/footer/footer";
import LandingPage from "./LandingPage";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="fixed inset-0 bg-black justify-center">
      <Navbar />
      <LandingPage />
      <Image
        src="/star_background.gif"
        alt="Background"
        width={1920}
        height={1080}
        style={{ objectFit: "cover, width: 100%", height: "100%", zIndex: -1 }}
      />
      <Footer />
    </div>
  );
}
