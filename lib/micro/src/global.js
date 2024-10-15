import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body {
  font-size: 62.5%;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
cite,
code,
del,
dfn,
em,
img,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
dd,
dl,
dt,
li,
ol,
ul,
fieldset,
form,
label,
legend,
button,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
figure {
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: normal;
  font-style: normal;
  line-height: normal;
  font-family: inherit;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

ol,
ul {
  list-style: none;
}

q:before,
q:after,
blockquote:before,
blockquote:after {
  content: "";
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

[hidden],
.hidden {
  display: none;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100%;
}
body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: var(--font);
  font-size: var(--size);
  font-weight: normal;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
a {
  border: none;
  color: var(--primary);
  text-transform: none;
  outline: none;
  font-weight: inherit;
  text-decoration: underline;
  img {
    border: none;
    cursor: pointer;
    outline: none;
  }
  &:active,
  &:hover,
  &:visited {
    cursor: pointer;
    outline: none;
  }
  &:hover {
    filter: brightness(1.2);
    transition: var(--transition);
  }
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-headings);
  line-height: calc(var(--line-height) - 10);
}
h1 {
  font-size: var(--xxxlarge);
}
h2 {
  font-size: var(--xxlarge);
}
h3 {
  font-size: var(--xlarge);
}
h4 {
  font-size: var(--large);
}
h5 {
  font-size: var(--medium);
}
h6 {
  font-size: var(--semi);
}

address,
blockquote,
dl,
ol,
p,
pre,
table,
ul {
  color: currentColor;
  font-weight: var(--font-weight);
}
ul li {
  list-style: square;
  list-style-position: inside;
  margin-left: var(--element-vertical);
}
p {
  font-size: var(--size);
  line-height: var(--line-height);
}
hr {
  background: var(--primary);
  color: var(--primary);
  border: none;
  clear: both;
  float: none;
  height: 0;
  margin: var(--size) 0;
  width: 100%;
}
br {
  display: block;
  margin: 0.5rem 0;
  width: 100%;
  height: 0;
  float: none;
  overflow: hidden;
  clear: both;
}
small {
  font-size: var(--small, 1.2rem);
}
strong, b {
  font-weight: var(--font-bold-weight, 700);
}
em {
  font-family: var(--font-emphasis);
}
figure {
  img {
    width: 100%;
  }
}
table {
  padding: var(--size);
  margin: var(--size) 0;
  th {
    background-color: var(--primary-light);
    color: var(--primary-dark);
    padding: var(--size);
  }
  td {
    border-bottom-color: var(--primary-light);
    padding: var(--size);
  }
}
code,
pre,
samp {
  font-family: var(--font-monospace);
  overflow-x: auto;
  & > code {
    padding: var(--size);
  }
}
mark,
&::selection {
  background-color: var(--secondary);
  color: var(--secondary-on);
}

form {
  display: flex;
  flex-direction: column;
  gap: var(--size);
  &[role="row"] {
    flex-direction: row;
  }
}
fieldset {
  display: flex;
  flex-direction: column;
  gap: var(--size);
}
label {
  display: flex;
  gap: calc(var(--size) / 2);
  align-items: start;
  font-weight: bold;
  width: fit-content;
  flex-direction: column;
}
input,
select,
textarea {
  will-change: auto;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: var(--border-width) solid var(--element-border-color);
  border-radius: var(--border-radius);
  outline: 0;
  background-color: var(--element-background);
  color: var(--element-color);
  font-weight: var(--font-weight);
  transition: var(--transition);
}
input,
optgroup,
select,
textarea {
  overflow: visible;
  line-height: var(--line-height);
  font-family: inherit;
  letter-spacing: inherit;
  font-size: var(--size);
  &[disabled] {
    user-select: none;
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.4;
    background-color: var(--grey-200);
    border-color: var(--grey-500);
  }
}
input:not([type="checkbox"], [type="radio"], [type="range"]),
select,
textarea {
  padding: var(--element-vertical) var(--element-horizontal);
}
input:where(select, textarea):not([readonly]):is(:active, :focus),
input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="switch"],
    [readonly]
  ):is(:active, :focus) {
  border-color: var(--element-active-border-color);
  filter: brightness(1.05);
}
input::-webkit-input-placeholder,
input::placeholder,
select:invalid,
textarea::-webkit-input-placeholder,
textarea::placeholder {
  color: var(--element-placeholder-color);
  opacity: 1;
}
[type="checkbox"],
[type="radio"],
[type="range"],
progress {
  accent-color: var(--primary);
}
[type="checkbox"],
[type="radio"] {
  display: inline-block;
  position: relative;
  transition: 120ms all ease-in-out;
  margin: 0;
  flex: 0 0 auto;
  border-radius: var(--border-radius);
  background-color: var(--element-background);
  color: var(--surface);
  width: var(--medium);
  height: var(--medium);
  &:checked {
    transition: 120ms all ease-in-out;
    margin: 0;
    background-color: var(--primary);
    border-color: var(--primary);
  }
  &::before {
    content: "";
    position: absolute;
    top: 45%;
    left: calc(50% - 0.5rem);
    display: block;
    transform-origin: center;
    transform: rotateZ(0deg) translateX(-50%) translateY(-50%) scale(0);
    width: 0.7rem;
    height: 1.2rem;
    transition: 120ms all ease-in-out;
    border-bottom: 0.2rem solid var(--element-active-color);
    border-right: 0.2rem solid var(--element-active-color);
  }
  &:checked::before {
    border-color: var(--element-active-color);
    transition: 120ms all ease-in-out;
    transform: rotateZ(45deg) translateX(-50%) translateY(-50%) scale(1);
  }
}
[type="checkbox"][role="switch"] {
  position: relative;
  width: calc(var(--size) * 3);
  height: calc(var(--size) * 1.5);
  border-radius: var(--size);
  &::before {
    position: absolute;
    content: "";
    display: block;
    width: var(--size);
    height: var(--size);
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    border-radius: 100%;
    border: none;
    background-color: var(--primary);
    transition: var(--transition);
    will-change: auto;
  }
  &:checked {
    filter: brightness(1.1);
    background-color: var(--primary);
    &::before {
      background-color: var(--background);
      filter: brightness(1.1);
      left: calc(96% - var(--size));
    }
  }
}
[type="radio"] {
  border-radius: 100%;
  width: var(--medium);
  height: var(--medium);
  &::before {
    border: none;
    transform-origin: center;
    transform: rotateZ(0deg) translateX(-50%) translateY(-50%) scale(0);
    background-color: var(--surface);
    width: var(--xxsmall);
    height: var(--xxsmall);
    top: 50%;
    left: 50%;
    border-radius: 100%;
  }
  &:checked {
    background-color: var(--primary);
    border-color: var(--primary);
    &::before {
      background-color: var(--element-active-color);
      transform: rotateZ(0deg) translateX(-50%) translateY(-50%) scale(1);
    }
  }
}

blockquote {
  display: block;
  margin: var(--element-vertical) 0;
  padding: var(--size);
  border-right: none;
  border-left: 0.25rem solid var(--primary-light);
  border-inline-start: 0.25rem solid var(--primary-light);
  border-inline-end: none;
  footer {
    margin-top: calc(var(--element-vertical) * 0.5);
    color: var(--primary);
  }
}

body > header,
body > main,
body > footer {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: var(--element-vertical) var(--element-horizontal);
}

button[type="submit"],
[role="button"],
[type="button"],
[type="file"]::file-selector-button,
[type="reset"],
[type="submit"],
button {
  padding: var(--element-vertical)
    var(--element-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: 0;
  background-color: var(--accent);
  color: var(--accent-on);
  box-shadow: var(--box-shadow);
  font-weight: var(--font-weight);
  font-size: var(--size);
  line-height: var(--line-height);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition: var(--transition);
  will-change: transform;
  &:hover {
    transition: var(--transition);
  }
  &:active {
    transition: var(--transition);
  }
  &[role="alternative"] {
    background-color: var(--secondary);
    color: var(--secondary-on);
  }
}

nav {
  justify-content: space-between;
  overflow: visible;
  display: flex;
  & ul,
  & ol {
    display: flex;
    align-items: center;
    padding: 0;
    list-style: none;
    &:first-of-type {
      margin-left: calc(var(--element-horizontal) * -1);
    }
    li {
      display: inline-block;
      margin: 0;
      padding: var(--element-vertical)
        var(--element-horizontal);
    }
  }
}

/* Section */
section {
  padding: var(--spacing);
}

/* Tooltip */
[data-tooltip] {
  position: relative;
  will-change: auto;
  transition: var(--transition);
  &:not(a, button, input) {
    text-decoration: none;
    cursor: help;
  }
  &[data-placement="top"]::before,
  &::before  {
    display: block;
    z-index: 99;
    position: absolute;
    bottom: 100%;
    left: 50%;
    padding: var(--xxxsmall) var(--xxsmall);
    overflow: hidden;
    transform: translate(-50%, -0.25rem);
    border-radius: var(--xxsmall);
    content: attr(data-tooltip);
    background: var(--foreground);
    color: var(--background);
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
  }
  &[data-placement="bottom"]::before {
    top: 100%;
    bottom: auto;
    transform: translate(-50%, 0.25rem);
  }
  &[data-placement="left"]::before {
    top: 50%;
    right: 100%;
    bottom: auto;
    left: auto;
    transform: translate(-0.25rem, -50%);
  }
  &[data-placement="right"]::before {
    top: 50%;
    right: auto;
    bottom: auto;
    left: 100%;
    transform: translate(0.25rem, -50%);
  }
  &:focus::before,
  &:hover::before {
    opacity: 1;
  }
}
`