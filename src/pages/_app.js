import CustomCursor from "@/components/cursor/CustomCursor";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
