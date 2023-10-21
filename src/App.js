import React from "react";
import TwoInch from "./components/TwoInch";
import ThreeInch from "./components/ThreeInch";

// async function listPrinters() {
//   const devices = await navigator.mediaDevices.enumerateDevices();
//   const printers = devices.filter((device) => device.kind === "printer");

//   return printers;
// }

const App = () => {
  return (
    <div style={{display:"flex"}}>
      <TwoInch />
      <ThreeInch />
    </div>
  );
};

export default App;
