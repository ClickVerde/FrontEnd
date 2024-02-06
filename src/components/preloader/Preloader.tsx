import { useEffect, useState } from "react";
import logo from "../../assets/icons/AnimationLogo.gif";
import "./Preloader.css";

export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loading && (
        <div className="AnimationDiv">
          <img src={logo} alt='Logo "ClickVerde"' className="Logo" />
        </div>
      )}
    </>
  );
};
