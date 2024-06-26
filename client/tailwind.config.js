/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        sandybrown: "#ffbb64",
        salmon: {
          "100": "#ff6868",
          "200": "rgba(255, 104, 104, 0.1)",
        },
        black: "#000",
        palegoldenrod: "#ffeaa7",
        gray: {
          "100": "#909090",
          "200": "#8e8e8e",
          "300": "#8a8a8a",
          "400": "#828282",
          "500": "#818181",
          "600": "#2c2c2c",
          "700": "#282828",
          "800": "#1c1c1c",
          "900": "#17161b",
          "1000": "#0b0b0b",
        },
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#f4f4f4",
          "300": "#ededed",
          "400": "#ebebeb",
        },
        bisque: "#ffe2bc",
        dimgray: {
          "100": "#717171",
          "200": "#6d6d6d",
          "300": "#696969",
          "400": "#676767",
          "500": "#666",
          "600": "#636363",
          "700": "#575757",
          "800": "#515151",
        },
        gainsboro: {
          "100": "#e8e7e5",
          "200": "#d9d9d9",
        },
        darkgray: {
          "100": "#b4b4b4",
          "200": "#a5a5a5",
          "300": "#a4a4a4",
          "400": "#9d9d9d",
          "500": "#9b9b9b",
          "600": "#9a9a9a",
          "700": "#999",
          "800": "#959595",
          "900": "rgba(175, 175, 175, 0.4)",
        },
        burlywood: "#daa273",
        lightseagreen: "#35a29f",
        midnightblue: {
          "100": "#071952",
          "200": "#070a52",
        },
        paleturquoise: "#97feed",
        crimson: "#d21312",
        tomato: {
          "100": "#ff5a5a",
          "200": "#f15a59",
        },
        darkslategray: {
          "100": "#464646",
          "200": "#414141",
          "300": "#333",
          "400": "#313131",
          "500": "#2f2f2f",
        },
        silver: "#c0c0c0",
        turquoise: "#00d7ca",
        mediumslateblue: "#7b61ff",
        green: "#159600",
        red: "#ff0000",
        blueviolet: "#9747ff",
        deepskyblue: "#00c7f3",
      },
      spacing: {},
      fontFamily: {
        "made-tommy": "'MADE TOMMY'",
        inter: "Inter",
        lato: "Lato",
        "vujahday-script": "'Vujahday Script'",
        "red-hat-display": "'Red Hat Display'",
        poppins: "Poppins",
        inherit: "inherit",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "51xl": "70px",
        "3xl": "22px",
        "45xl": "64px",
        "27xl": "46px",
        "19xl": "38px",
        "11xl": "30px",
        "14xl": "33px",
        "23xl": "42px",
        "8xl": "27px",
        "139xl": "158px",
        lgi: "19px",
        "7xl": "26px",
        "31xl": "50px",
        "2xs": "11px",
        "2xl": "21px",
        "4xs": "9px",
        xl: "20px",
        "120xl": "139px",
        "6xs": "7px",
        "20xl": "39px",
        "10xl": "29px",
        "8xs": "5px",
        "10xs": "3px",
      },
    },
    fontSize: {
      "5xl": "24px",
      xl: "20px",
      base: "16px",
      mini: "15px",
      "29xl": "48px",
      lg: "18px",
      "21xl": "40px",
      sm: "14px",
      "13xl": "32px",
      "2xs": "11px",
      xs: "12px",
      "7xl": "26px",
      "9xl": "28px",
      "17xl": "36px",
      smi: "13px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
