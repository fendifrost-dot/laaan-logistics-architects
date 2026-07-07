import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo({ top: 0, left: 0, behavior: "auto" }); return; }
    const id = hash.replace("#", "");
    let tries = 0;
    const timer = setInterval(() => {
      const el = document.getElementById(id);
      if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); clearInterval(timer); }
      else if (++tries > 25) { clearInterval(timer); }
    }, 75);
    return () => clearInterval(timer);
  }, [pathname, hash, key]);
  return null;
}
