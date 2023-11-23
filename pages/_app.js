import { useEffect } from "react";
import { load, trackPageview } from "fathom-client";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //window.location.replace('https://www.better.dev/courses/productive-vs-code');
    //window.location.replace('http://localhost:3000');
  }, []);
  
  useEffect(() => {
    load("IZCOEGMK", {
      includedDomains: ["productivevscode.com"],
      url: "https://wildcat.codesalt.io/script.js",
    });
    trackPageview();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
