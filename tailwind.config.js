/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const colors = require("tailwindcss/colors");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            green: colors.green,
            blue: colors.blue,
            primary: {
                b1: "#1e1f22",
                b2: "#232428",
                b3: "#2b2d31",
                b4: "#313338",
                w1: "#41444a",
                w2: "#80848e",
                w3: "#ebebeb",
                w4: "#f2f3f5",
                hover: "#35373c",
                hover2: "#393b41",
                active: "#3f4248",
                tooltip: "#111214",
            },
            secondary: {
                s1: "#5865f2",
                s2: "#23a559",
                s1Hover: "#4752c4",
            },
            font: {
                f1: "#ffffff",
                f2: "#dbdee1",
                f3: "#b5bac1",
                f4: "#949ba4",
            },
        },
        fontFamily: {
            ggsans: ["gg sans", "sans-serif"],
            ggsansNormal: ["gg sans Normal", "sans-serif"],
        },
        animation: {
            tooltip: "tooltip-popup 0.1s ease-in",
            modal: "modal-popup 0.2s ease-in",
        },
        extend: {},
    },
    plugins: [],
};
