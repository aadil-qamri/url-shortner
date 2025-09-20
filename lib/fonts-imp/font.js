import localFont from "next/font/local";

const zalando = localFont({
  src: "./fonts/font.ttf", // absolute path from public/
  variable: "--font-zalanso",
  style: "normal",
  weight: "400",
});

export default zalando;
