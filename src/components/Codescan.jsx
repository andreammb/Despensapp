import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import Product from "./Product";
import styled from "styled-components";
import { FaBarcode } from "react-icons/fa";

const Codescan = ({addItem}) => {

  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {

    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    })

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }

  },[]);

  return (
    <CodescanStyles>
      <h3>🥫Llena tu despensa virtual</h3>
      <p>Toma un producto y escanea su código con estas opciones 👇</p>
      <br />
      <FaBarcode className="barcode" />
      {scanResult ? (
          <div>
            <p>Código:</p>
            <a href={scanResult}>{scanResult}</a>            
            <Product code={scanResult} addItem={addItem}/>
            
          </div>
        )
        : <div id="reader">
          
        </div>
      }
    </CodescanStyles>
  )
}

const CodescanStyles = styled.div`
  position: relative;
  #reader[style] {
    position: relative !important;
    border: var(--border-width) solid var(--primary) !important;
    border-radius: var(--border-radius);
  }
  #reader {
    position: relative;
    img {
      display: none !important;
    }
  }
  .barcode {
    position: absolute;
    top: 43%;
    right: var(--normal);
    transform: translateY(-50%);
    font-size: 7vw;
    color: var(--secondary);
    border: var(--border-width) solid var(--secondary);
    padding: 0 var(--xxxsmall);
    opacity: 0.40;
  }
  button {
    margin: 1rem 0;
  }
  #html5-qrcode-anchor-scan-type-change[style] {
    text-decoration: none !important;
    --button-background: var(--primary);
    --button-foreground: var(--foreground);
    background-color: var(--button-background);
    color: var(--button-foreground);
    border-radius: var(--border-radius);
    border-color: var(--button-background);
    border-style: solid;
    border-width: var(--border-width);
    min-height: var(--element-medium);
    line-height: 100%;
    text-decoration: none;
    user-select: none;
    cursor: pointer;
    padding: 1rem 3rem;
    display: inline-block;
    margin: 1rem 0;
  }
`

export default Codescan