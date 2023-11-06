import { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0); // Hace scroll hacia la parte superior de la página al cargar una nueva página
  }, []);

  return null;
}

export default ScrollToTop;