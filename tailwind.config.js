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
            gray: colors.gray,
            green: colors.green,
            blue: colors.blue,
            primary: {
                b1: "#1e1f22",
                b2: "#232428",
                b3: "#2b2d31",
                b4: "#23272a",
                b5: "#313338",
                w1: "#41444a",
                w2: "#80848e",
                w3: "#ebebeb",
                w4: "#f2f3f5",
                w5: "#f6f6f6",
                hover: "#35373c",
                hover2: "#393b41",
                hover3: "#e8e9e9",
                active: "#3f4248",
                tooltip: "#111214",
            },
            secondary: {
                s1: "#5865f2",
                s2: "#404eed",
                s3: "#23a559",
                s1Hover: "#4752c4",
                s1Hover2: "#7289da",
            },
            font: {
                f1: "#ffffff",
                f2: "#dbdee1",
                f3: "#b5bac1",
                f4: "#949ba4",
            },
        },
        backgroundImage: {
            heroPattern: "url('/src/assets/HomePage/WallpaperTop.svg')",
            heroPatternNitro: "url('/src/assets/NitroPage/HeroBG.svg')",
            heroDiscoBackground:
                "url('/src/assets/DiscoverPage/HeroDiscoBG.svg')",
        },
        fontFamily: {
            ggsans: ["gg sans", "sans-serif"],
            ggsansNormal: ["gg sans Normal", "sans-serif"],
            gintoNord: ["ABC Ginto Nord Unlicensed Trial", "sans-serif"],
            gintoNormal: ["ABC Ginto Normal Unlicensed Trial", "sans-serif"],
        },
        animation: {
            tooltip: "tooltip-popup 0.1s ease-in",
            modal: "modal-popup 0.2s ease-in",
            fadeIn: "fade-in 0.3s ease-in",
            fadeOut: "fade-out 0.2s ease-in",
        },
        screens: {
            mobile479: "479px",
            tablet640: "640px",
            tablet767: "767px",
            tablet991: "991px",
            laptop1024: "1024px",
            desktop1110: "1110px",
            desktop1280: "1280px",
            desktop1440: "1440px",
            desktop1920: "1920px",
        },
        extend: {},
    },
    plugins: [],
};
