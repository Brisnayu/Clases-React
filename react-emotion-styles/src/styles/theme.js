import { spacing } from "./utils";

export const breakPoints = {
  mobile: 576,
  tablet: 768,
  desktop: 992,
};

const lightPalette = {
  background: "#fffff",
  color: "#551951",
};

const darkPalette = {
  background: "#551951",
  color: "#FFFFFF",
};

export const themeLight = {
  palette: {
    background: lightPalette.background,
    color: lightPalette.color,
    alternative: "blue",
  },
  mediaquery: {
    mobile: `@media (max-width: ${breakPoints.mobile}px)`,
    tablet: `@media (min-width: ${breakPoints.tablet}px) and (max-width: ${breakPoints.desktop}px)`,
    desktop: `@media (min-width: ${breakPoints.desktop}px)`,
  },
  spacing,
};

export const themeDark = {
  palette: {
    background: darkPalette.background,
    color: darkPalette.color,
    alternative: "red"
  },
  mediaquery: {
    mobile: `@media (max-width: ${breakPoints.mobile}px)`,
    tablet: `@media (min-width: ${breakPoints.tablet}px) and (max-width: ${breakPoints.desktop}px)`,
    desktop: `@media (min-width: ${breakPoints.desktop}px)`,
  },
  spacing,
};
