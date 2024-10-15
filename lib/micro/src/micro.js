import { complement, parseToHsl, mix, hsl, shade, readableColor, rgba, adjustHue } from "polished";
import { createGlobalStyle } from "styled-components";

export const defaultTheme = {
  "colors": {
    "primary": "#007DEA"
  },
  "sizes": {
    "base": 16
  },
  "font": {
    "font": "'Helvetica Neue', 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    "line-height": "130%",
    "font-weight": 400,
    "font-bold-weight": 800
  }
}

const colorShades = (name, color, tint) => {
  let configTint = tint || 1;
  let weights = {
    50: ["#fafafa", 0.05],
    100: ["#f5f5f5", 0.2],
    200: ["#e5e5e5", 0.3],
    300: ["#d4d4d4", 0.5],
    400: ["#a3a3a3", 0.7],
    500: ["#737373", 1],
    600: ["#525252", 0.7],
    700: ["#404040", 0.5],
    800: ["#262626", 0.4],
    900: ["#171717", 0.3],
    950: ["#0a0a0a", 0.2],
  };
  let shades = {};
  Object.entries(weights).map(key => {
    let weight = parseInt(key[0]);
    let mixColor = key[1][0].toString();
    let ratio = key[1][1];
    let element;
    element = { [name + "-" + weight]: mix(configTint, mix(ratio, color, mixColor), mixColor) };
    shades = Object.assign({ ...shades, ...element });
  });
  return shades;
}

const isObject = (v) => v && typeof v === 'object';
const merge = (a, b) => ({ ...Object.keys(b).reduce((_, k) => (_[k] = isObject(b[k]) ? merge(a[k], b[k]) : b[k], _), a) });

export const createMicroTheme = (config) => {
  let t = config;
  let d = defaultTheme;
  let themeConfig = merge(d, t);
  const base = themeConfig.sizes.base;
  const secondary = themeConfig.colors.secondary ? themeConfig.colors.secondary : complement(themeConfig.colors.primary);
  
  themeConfig["colors"] = { ...themeConfig.colors, secondary };

  Object.entries(themeConfig.colors).map(([key, value]) => {
    themeConfig["colors"] = { ...themeConfig.colors, ...colorShades(key, value) };
  })

  const colors = {
    background: themeConfig["colors"]["primary-100"],
    foreground: themeConfig["colors"]["primary-900"],
    "primary-on": themeConfig["colors"]["primary-100"],
    "secondary-on": themeConfig["colors"]["secondary-100"],
    "element-border-color": themeConfig["colors"]["primary-200"],
    "element-background": themeConfig["colors"]["primary-50"],
    "element-color": themeConfig["colors"]["primary-800"]
  }

  themeConfig["colors"] = { ...themeConfig.colors, ...colors };

  const font = {
    font: t.font?.font || d.font.font,
    "font-headings": t.font?.headings || d.font.font,
    "font-monospace": t.font?.monospace || d.font["font-monospace"],
    "font-emphasis": t.font?.emphasis || d.font.font,
    icons: t.font?.icons || d.font["font-icons"],
  }
  themeConfig["font"] = { ...themeConfig.font, ...font }

  const sizes = {
    base: base,
    size: `${(base / 10).toFixed(1)}rem`,
    "border-radius": `${(base / 10).toFixed(1)}rem`,
    "border-width": `${(base / 128).toFixed(1)}rem`,
    spacing: `${((base / 10) * 3).toFixed(0)}vw`,
    xxxlarge: `${(base / 4).toFixed(1)}rem`,
    xxlarge: `${(base / 5).toFixed(1)}rem`,
    xlarge: `${(base / 6).toFixed(1)}rem`,
    large: `${(base / 7).toFixed(1)}rem`,
    medium: `${(base / 8).toFixed(1)}rem`,
    semi: `${(base / 9).toFixed(1)}rem`,
    normal: `${(base / 10).toFixed(1)}rem`,
    small: `${(base / 11).toFixed(1)}rem`,
    xsmall: `${(base / 12).toFixed(1)}rem`,
    xxsmall: `${(base / 13).toFixed(1)}rem`,
    xxxsmall: `${(base / 14).toFixed(1)}rem`,
    xxxxsmall: `${(base / 16).toFixed(1)}rem`,
    "element-vertical": `${(base / 20).toFixed(1)}rem`,
    "element-horizontal": `${(base / 10).toFixed(1)}rem`,
    "transition": "all ease 200ms"
  }
  themeConfig["sizes"] = { ...themeConfig.sizes, ...sizes }

  const sizesStyles = Object.entries(themeConfig.sizes).map(([key, value]) => {
    if (typeof value != "object") {
      return `\n--${key}:${value};`;
    }
    if (typeof value === "object") {
      // @ts-ignore
      return Object.entries(value).map(([vkey, vvalue]) => `\n--${key}-${vkey}:${vvalue};`).join("")
    }
  }).join("");

  const fontStyles = Object.entries(themeConfig.font).map(([key, value]) => {
    return `\n--${key}:${value};`;
  }).join("");

  const colorsStyles = Object.entries(themeConfig.colors).map(([key, value]) => {
    return `\n--${key}:${value};`;
  }).join("");

  let css = `
    ${fontStyles}
    ${colorsStyles}
    ${sizesStyles}
  `.trim();
  let theme = { ...themeConfig, css };
  return theme;
}

export const StylesMicro = createGlobalStyle`
  :root {
    ${(props) => props.theme && props.theme.css};
  }
`