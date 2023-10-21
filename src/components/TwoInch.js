import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "../TwoInch.css";

const TwoInch = () => {
  let pdfRef = useRef();
  const print = useReactToPrint({
    onPrintError: (error) => console.log(error),
    content: () => pdfRef,
  });
  return (
    <div style={{ padding: "1rem" }}>
      <div ref={(el) => (pdfRef = el)} class="ticket">
        <img src="./logo.png" alt="Logo" />
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
              <th class="quantity">Q.</th>
              <th class="description">Description</th>
              <th class="price">₹</th>
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
              <td class="quantity">1.00</td>
              <td class="description">Apple</td>
              <td class="price">₹25.00</td>
            </tr>
            <tr>
              <td class="quantity">2.00</td>
              <td class="description">Banana</td>
              <td class="price">₹10.00</td>
            </tr>
            <tr>
              <td class="quantity">1.00</td>
              <td class="description">Grapes</td>
              <td class="price">₹10.00</td>
            </tr>
            <tr>
              <td class="quantity">1.00</td>
              <td class="description">Apple</td>
              <td class="price">₹25.00</td>
            </tr>
            <tr>
              <td class="quantity">2.00</td>
              <td class="description">Banana</td>
              <td class="price">₹10.00</td>
            </tr>
            <tr>
              <td class="quantity">1.00</td>
              <td class="description">Grapes</td>
              <td class="price">₹10.00</td>
            </tr>
            <tr>
              <td class="quantity"></td>
              <td class="description">TOTAL</td>
              <td class="price">₹55.00</td>
            </tr>
          </tbody>
        </table>
        <p class="centered">
          Thanks for your purchase!
          <br />
          stockregister.in
        </p>
      </div>
      <button onClick={() => print()}>Print 2 inch Bill</button>
    </div>
  );
};

export default TwoInch;
