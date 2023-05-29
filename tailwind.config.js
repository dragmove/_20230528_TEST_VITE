const range = (start, end) => {
  return Array.from(Array(Math.abs(end - start) + 1), (_, i) => start + i);
};

const pxToRem = (px, base = 16) => `${px / base}rem`;

/**
 * @see https://tailwindcss.com/docs/installation
 */
// TODO: use pxr unit.
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       spacing: {
//         ...range(1, 9999).reduce((acc, px) => {
//           acc[`${px}pxr`] = pxToRem(px);
//           return acc;
//         }, {}),
//       },
//     },
//   },
//   plugins: [],
// };
