import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			screens: {
				"3xl": "1900px",
				// => @media (min-width: 1900px) { ... }

				"4xl": "2550px",
				// => @media (min-width: 2550px) { ... }

				"5xl": "3830px",
				// => @media (min-width: 3830px) { ... }
			},
			colors: {},
			keyframes: {
				shake: {
					"0%,100%": { transform: "rotate(0deg)" },
					"10%": { transform: "rotate(8deg)" },
					"20%,40%,60%": { transform: "rotate(-10deg)" },
					"30%,50%,70%": { transform: "rotate(10deg)" },
					"80%": { transform: "rotate(-8deg)" },
					"90%": { transform: "rotate(8deg)" },
				},
				jello: {
					"0%": { transform: "scale3d(1, 1, 1)" },
					"30%": { transform: "scale3d(1.25, 0.75, 1)" },
					"40%": { transform: "scale3d(0.75, 1.25, 1)" },
					"50%": { transform: "scale3d(1.15, 0.85, 1)" },
					"65%": { transform: "scale3d(0.95, 1.05, 1)" },
					"75%": { transform: "scale3d(1.05, 0.95, 1)" },
					"100%": { transform: "scale3d(1, 1, 1)" },
				},
				wobble: {
					"0%,100%": { transform: "translateX(0%)" },
					"15%": { transform: "translateX(-6px) rotate(-6deg)" },
					"30%": { transform: "translateX(6px) rotate(6deg)" },
					"45%": { transform: "translateX(-4px) rotate(-3.6deg)" },
					"60%": { transform: "translateX(4px) rotate(2.4deg)" },
					"75%": { transform: "translateX(-2px) rotate(-1.2deg)" },
					"100%": { transform: "scale3d(1, 1, 1)" },
				},
				flip: {
					"0%": { transform: "rotateY(0)" },
					"100%": { transform: "rotateY(360deg)" },
				},
				slideLeft: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
			},
			animation: {
				shake: "shake 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) both",
				jello: "jello 0.6s both",
				wobble: "wobble 0.6s both",
				flip: "flip 0.6s linear both",
				slideLeft: "slideLeft 90s linear both infinite",
			},
		},
	},
	plugins: [],
};
export default config;
