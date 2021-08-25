// example theme.js
export default {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  initialColorModeName: "code",
  colors: {
    normalColor: "#000",
    textColor: "#000",
    backgroundColor: "#fff",
    borderColor: "textColor",
    gradientColor1: "#ee0979",
    gradientColor2: "#ff6a00",
    modes: {
      code1: {
        normalColor: "#000",
        textColor: "#e63b19",
        backgroundColor: "#f0dfdb",
        borderColor: "textColor",
        gradientColor1: "#FFC837",
        gradientColor2: "#FF8008",
      },
      code2: {
        normalColor: "#000",
        textColor: "#3333ee",
        backgroundColor: "#efeffe",
        borderColor: "textColor",
        gradientColor1: "#8E54E9",
        gradientColor2: "#4776E6",
      },
      code3: {
        normalColor: "#fff",
        textColor: "#33ccff",
        backgroundColor: "#29112c",
        borderColor: "textColor",
        gradientColor1: "#00d2ff",
        gradientColor2: "#3a7bd5",
      },
      code4: {
        normalColor: "#000",
        textColor: "#002079",
        backgroundColor: "#a6ffcb41",
        borderColor: "textColor",
        gradientColor1: "#1FA2FF",
        gradientColor2: "#A6FFCB",
      },
    },
  },
};
