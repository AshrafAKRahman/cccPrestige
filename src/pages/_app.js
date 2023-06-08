import "@/styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />;
    </ParallaxProvider>
  );
};

export default MyApp;
