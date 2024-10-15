import { styled } from "styled-components";

export const Button = styled.button`
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
`;