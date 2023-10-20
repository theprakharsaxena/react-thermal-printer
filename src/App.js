import React, { useEffect, useState } from "react";

async function listPrinters() {
  const devices = await navigator.mediaDevices.enumerateDevices();
  const printers = devices.filter((device) => device.kind === "printer");

  return printers;
}

const xml = `
  <?xml version="1.0" encoding="UTF-8"?>
  <document>
    <text-line>hello world</text-line>
  </document>
`;

const App = () => {
  const [availablePrinters, setAvailablePrinters] = useState([]);
  const [selectedPrinter, setSelectedPrinter] = useState();
  const handlePrinterSelection = (event) => {
    const selectedPrinterId = event.target.value;
    setSelectedPrinter(
      availablePrinters.find(
        (printer) => printer.deviceId === selectedPrinterId
      )
    );
    // Store the selected printer ID in your React state or a variable.
  };

  console.log(selectedPrinter,xml);

  useEffect(() => {
    listPrinters().then((printerlist) => {
      setAvailablePrinters(printerlist);
      console.log(printerlist);
    });
  }, []);

  return (
    <div>
      <select>
        {availablePrinters.length === 0 && (
          <option value="No Printer Available" onClick={handlePrinterSelection}>
            No Printer Available
          </option>
        )}
        {availablePrinters.map((printer) => (
          <option
            key={printer.deviceId}
            value={printer.deviceId}
            onClick={handlePrinterSelection}
          >
            {printer.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default App;
