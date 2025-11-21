/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#10b981', // Emerald-500
                dark: {
                    900: '#0f172a', // Slate-900
                    800: '#1e293b', // Slate-800
                    100: '#f1f5f9', // Slate-100
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}