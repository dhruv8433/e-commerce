// components/ClientComponent.tsx

"use client"; // This directive is necessary for client-side components in Next.js

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosContainer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return null;
}
