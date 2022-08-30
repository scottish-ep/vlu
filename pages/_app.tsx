import AOS from "aos";
import { useEffect } from "react";
import type { AppProps } from "next/app";

import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { AppProvider } from "context/AppContext";

import styles from "styles/App.module.scss";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      // duration: 1200,
    });
  }, []);

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    const header = document.getElementById("header") as any;
    const handleScroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos < currentScrollPos) {
        header.style.top = screen.width > 1023 ? "-40px" : 0;
      } else {
        header.style.top = "0";
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppProvider>
      <div className={styles.body}>
        <Header id="header" />
        <div style={{ width: "100%" }}>
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </AppProvider>
  );
}

export default MyApp;
