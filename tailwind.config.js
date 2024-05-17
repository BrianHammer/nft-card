/////////////////////////////
// START EDITING ME COMMAND:
/////////////////////////////
//
// npx tailwindcss -i ./input.css -o ./output.css --watch
//



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
    fontFamily: {
      "abc": ["Outfit"]
    },
    fontWeight: {
      light: "300",
      normal: "400",
      heavy: "600"
    },
    colors: {
      "cyan-blue": "hsl(215, 51%, 70%)",
      "cyan": "hsl(178, 100%, 50%)",
      "main-color": "hsl(217, 54%, 11%)",
      "card-color": " hsl(216, 50%, 16%)",
      "line-color": "hsl(215, 32%, 27%)",
      "white": "hsl(0, 0%, 100%)"
    }
  },
  plugins: [],
}

