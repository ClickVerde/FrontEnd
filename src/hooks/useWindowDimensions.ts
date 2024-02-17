import { useEffect, useState } from "react";

interface WindowDimensions {
  width: number;
  height: number;
}

export function useWindowDimensions() {
  function getWindowDimensions(): WindowDimensions {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }

  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
    getWindowDimensions()
  );

  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
      setIsTab(windowDimensions.width < 1100 ? true: false);
      setIsMobile(windowDimensions.width < 650 ? true: false);
  }, [windowDimensions]);





  return { isTab, isMobile };
}
