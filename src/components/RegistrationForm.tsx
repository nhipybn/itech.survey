import { useEffect, useRef } from "react";

export function RegistrationForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // tạo anchor
    if (!document.getElementById("_bownow_cs_sid_c54c352d3c51eb7ef145")) {
      const anchor = document.createElement("div");
      anchor.id = "_bownow_cs_sid_c54c352d3c51eb7ef145";
      containerRef.current.appendChild(anchor);
    }

    // inject script NGAY TRONG CONTAINER
    const s = document.createElement("script");
    s.src =
      "https://contents.bownow.jp/forms/sid_c54c352d3c51eb7ef145/trace.js";
    s.async = true;

    containerRef.current.appendChild(s);

  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", minHeight: 700 }}
    />
  );
}

