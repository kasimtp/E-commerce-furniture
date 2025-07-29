// tailwind.config.js
export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Adjust to match your file structure
    ],
    theme: {
      extend: {
        fontFamily: {
            Ephesis: ['Ephesis', 'cursive'],
            Outfit: ['Outfit','sans-serif;'],
            Poppins: ['Poppins','sans-serif']

        },
        },
      },
    plugins: [],
  };
  


// // tailwind.config.js
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         poppins: ['Poppins', 'sans-serif'], // 👉 ഇവിടെ add ചെയ്യുന്നു
//       },
//     },
//   },
//   plugins: [],
// }
