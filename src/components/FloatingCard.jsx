import styled from "styled-components";

export const FloatingCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--small) 0;
  background-color: var(--primary-50);
  color: var(--primary-800);
  padding: var(--normal);
  border-radius: var(--normal);
  border: 0.2rem solid var(--primary-300);
  position: fixed;
  top: 50%;
  right: var(--normal);
  z-index: 5000;
  box-shadow: 0 0 2rem var(--secondary-300);
  width: 40vw;
  transform: translateY(-50%);
  max-height: 80%;
  overflow: auto;
  opacity: 0;
  transform: translateX(200%);
  animation: osomIntro 800ms 200ms forwards;
  h3 {
    margin-bottom: var(--small);
    small {
      font-weight: bold;
      display: block;
    }
  }
  .close {
    background-color: var(--secondary);
    color: var(--secondary-on);
    align-self: end;
    margin: 0;
    width: min-content;
    padding: 0.5rem;
  }
  dl {
    display: flex;
    flex-direction: row;
    border-bottom: var(--border-width) solid var(--secondary);
    padding: var(--xxxsmall) 0 0;
    dt {
      flex: 0 0 auto;
      text-transform: capitalize;
      align-self: end;
      background-color: var(--secondary);
      color: var(--secondary-on);
      padding: 0 var(--xxxsmall);
    }
    dd {
      flex: 1 1 auto;
      text-align: right;
      font-size: var(--large);
      font-weight: bold;
    }
  }
  details {
    margin-top: var(--xxxlarge) !important;
    summary {
      display: flex;
      flex-direction: row;
      gap: var(--normal);
      padding: var(--xxxsmall);
      border-top: var(--border-width) solid var(--secondary);
      border-bottom: var(--border-width) solid var(--secondary);
      p {
        flex: 1 1 auto;
        font-weight: bold;
      }
      &:after {
        content:"→";
        flex: 0 0 auto;
        font-weight: bold;
      }
    }
    &[open] summary:after {
      content:"↓"
    }
  }
  ul {
    margin: var(--normal) 0 0;
    column-count: 3;
    column-gap: var(--xsmall);
    li {
      border-bottom: var(--border-width) solid var(--secondary-100);
      color: var(--secondary-400);
      text-transform: capitalize;
      padding: 0.5rem 0;
      margin: 0;
      line-height: 100%;
      font-size: var(--xsmall);
    }
  }
  @keyframes osomIntro {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
        transform: translateX(0%) translateY(-50%);
    }
  }
`;