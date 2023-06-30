/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            width: {
                128: '32rem',
            },
            height: {
                128: '32rem',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-1deg) translateY(-3px)' },
                    '50%': { transform: 'rotate(1deg) translateY(3px)' },
                },
            },
            animation: {
                'bounce-slow': 'wiggle 5s linear infinite',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
