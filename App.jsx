import React from "react";
import { createRoot } from "react-dom/client";
import { createStitches } from "@stitches/react";

const { styled, globalCss, keyframes } = createStitches();

const globalStyles = globalCss({
  "*": { boxSizing: "border-box", margin: 0, padding: 0, fontFamily: "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'" },
  "*::after": { boxSizing: "border-box" },
  "*::before": { boxSizing: "border-box" },
  a: { WebkitTapHighlightColor: "transparent" },
  html: { scrollBehavior: "smooth", scrollbarWidth: "thin", scrollbarColor: "transparent transparent" },
  body: { height: "100vh", width: "100vw", display: "flex", flexWrap: "wrap", placeContent: "center", overflow: "hidden", backgroundColor: "black" }
});

const mover = keyframes({
  "0%": { backgroundPosition: "0 0" },
  "100%": { backgroundPosition: "-1200px 0" }
});

const Tira = styled("aside", {
  height: "80px",
  minWidth: "100vw",
  width: "100%",
  backgroundImage: "url('assets/img.png')",
  backgroundSize: "400px",
  backgroundRepeat: "repeat-x",
  animation: `${mover} 3s linear infinite both`,
  variants: {
    type: {
      "1": { transform: "translateY(-40px)" },
      "2": { transform: "rotate(45deg)", "@media (max-width:1111px) and (orientation:portrait)": { transform: "translateX(-50px) translateY(-290px) rotate(-30deg)" } },
      "3": { transform: "rotate(-45deg)", "@media (max-width:1111px) and (orientation:portrait)": { transform: "translateY(30px)" } },
      "4": { transform: "translateY(0px) rotate(-10deg)", "@media (max-width:1111px) and (orientation:portrait)": { transform: "translateY(130px)" } },
      "5": { transform: "translateY(200px) rotate(10deg)" }
    }
  }
});

globalStyles();

const App = () => {
  return (
    <>
      <Tira type="1" />
      <Tira type="2" />
      <Tira type="3" />
      <Tira type="4" />
      <Tira type="5" />
    </>
  );
};

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
