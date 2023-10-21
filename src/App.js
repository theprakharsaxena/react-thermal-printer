import React, { useEffect, useState } from "react";
import TwoInch from "./components/TwoInch";
import ThreeInch from "./components/ThreeInch";

// async function listPrinters() {
//   const devices = await navigator.mediaDevices.enumerateDevices();
//   const printers = devices.filter((device) => device.kind === "printer");

//   return printers;
// }

const xml = `
  <?xml version="1.0" encoding="UTF-8"?>
  <document>
    <text-line>hello world</text-line>
  </document>
`;

const App = () => {
  return (
    <div style={{display:"flex"}}>
      <TwoInch />
      <ThreeInch />
    </div>
  );
};

export default App;
