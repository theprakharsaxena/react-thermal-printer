import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "../ThreeInch.css";

const ThreeInch = () => {
  let pdfRef = useRef();
  const print = useReactToPrint({
    onPrintError: (error) => console.log(error),
    content: () => pdfRef,
  });
  return (
    <div style={{ padding: "1rem" }}>
      <div ref={(el) => (pdfRef = el)} class="ticket3">
      <h1>Saket Enterprises</h1>
        <p class="centered">
          Bill
          <br />
          Laxmi Narayan, Marg
          <br />
          Bareilly
        </p>
        <table>
          <thead>
            <tr>
              <th class="quantity3">Q.</th>
              <th class="description3">Description</th>
              <th class="price3">₹</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="quantity3">1.00</td>
              <td class="description3">Apple</td>
              <td class="price3">₹25.00</td>
            </tr>
            <tr>
              <td class="quantity3">2.00</td>
              <td class="description3">Banana</td>
              <td class="price3">₹10.00</td>
            </tr>
            <tr>
              <td class="quantity3">1.00</td>
              <td class="description3">Grapes</td>
              <td class="price3">₹10.00</td>
            </tr>
            <tr>
              <td class="quantity3">1.00</td>
              <td class="description3">Apple</td>
              <td class="price3">₹25.00</td>
            </tr>
            <tr>
              <td class="quantity3">2.00</td>
              <td class="description3">Banana</td>
              <td class="price3">₹10.00</td>
            </tr>
            <tr>
              <td class="quantity3">1.00</td>
              <td class="description3">Grapes</td>
              <td class="price3">₹10.00</td>
            </tr>
            <tr>
              <td class="quantity3">1.00</td>
              <td class="description3">Apple</td>
              <td class="price3">₹25.00</td>
            </tr>
            <tr>
              <td class="quantity3">2.00</td>
              <td class="description3">Banana</td>
              <td class="price3">₹10.00</td>
            </tr>
            <tr>
              <td class="quantity3">1.00</td>
              <td class="description3">Grapes</td>
              <td class="price3">₹10.00</td>
            </tr>
            <tr>
              <td class="quantity3"></td>
              <td class="description3">TOTAL</td>
              <td class="price3">₹55.00</td>
            </tr>
          </tbody>
        </table>
        <p class="centered">
          Thanks for your purchase!
          <br />
          stockregister.in
        </p>
      </div>
      <button onClick={() => print()}>Print 3 inch Bill</button>
    </div>
  );
};

export default ThreeInch;
