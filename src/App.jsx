import React from "react";
import styled from "styled-components";
import Despensa from "./components/Despensa"
import { Button } from "../lib/micro/src/components/button";

const Layout = styled("div")`
  padding: var(--spacing);
  .icon, .w-8, .w-7, [class~="w-3.5"] {
    width: var(--normal);
  }
  .iso {
    width: var(--large);
    vertical-align: middle;
  }
  button {
    --button-background: var(--secondary);
    --button-foreground: var(--secondary-on);
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
    svg {
      vertical-align: middle;
      margin: 0 var(--element-vertical);
      font-size: 90%;
      position: relative;
      top: -0.2rem;
    }
  }
`;

const App = () => {
  return (
    <Layout>
      <Despensa />
    </Layout>
  )
}

export default App