"use client";

import { useEffect } from "react";

export default function AOSInitializer() {
  useEffect(() => {
    // Dynamically import AOS
    import("aos").then((aos) => {
      aos.default.init({
        duration: 800,
        once: true,
        offset: 50,
      });
    });
  }, []);

  return null;
}
