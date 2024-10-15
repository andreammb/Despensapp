import { css, styled } from "styled-components";

export const GroupPropsStyles = css`
${(props) =>
  props.$fill &&
  `
  width: 100%;
`}
${(props) =>
  props.$stretch &&
  `
  flex: 1 1 auto;
  align-items: stretch;
`}
${(props) =>
  props.$normal &&
  `
  flex: 0 0 auto;
`}
${(props) =>
  props.$row &&
  `
  flex-direction: row;
`}
${(props) =>
  props.$wrap &&
  `
  flex-wrap: wrap;
`}
${(props) =>
  props.$xcenter &&
  `
  align-items: center;
`}
${(props) =>
  props.$yend &&
  `
  justify-content: end;
`}
${(props) =>
  props.$xend &&
  `
  align-items: end;
`}
${(props) =>
  props.$ycenter &&
  `
  justify-content: center;
`}
${(props) =>
  props.$spaceEvenly &&
  `
  justify-content: space-evenly;
`}
${(props) =>
  props.$gap &&
  `
  gap: var(--xxsmall);
`}
`

/**
 * Group component flex by default column direction
 * 
 * <micro.group $row $gap $wrap>
 *   <micro.button>Default</micro.button>
 *   <micro.button $variant="accent">Accent</micro.button>
 *   <input type="text" placeholder="Placeholder..." name="name" />
 *   <micro.button $variant="secondary">Secondary</micro.button>
 *   <micro.button $variant="tertiary">Tertiary</micro.button>
 * </micro.group>
 */

export const Group = styled.div.attrs({
  className: "group",
})`
  display: flex;
  flex-direction: column;
  position: relative;
  ${GroupPropsStyles};
`;