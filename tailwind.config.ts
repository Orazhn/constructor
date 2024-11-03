import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	screens: {
		'sm': '320px',
		// => @media (min-width: 640px) { ... }
  
		'md': '760px',
		// => @media (min-width: 768px) { ... }
  
		'lg': '1024px',
		// => @media (min-width: 1024px) { ... }
  
		'xl': '1280px',
		// => @media (min-width: 1280px) { ... }
  
		'2xl': '1536px',
		// => @media (min-width: 1536px) { ... }
	  },
  	extend: {

		  fontFamily: {
			mono: ['"Anonymous Pro"', 'monospace'], // Add Google font for use
		  },
		  keyframes: {
			typewriter: {
			  '0%': { width: '0' },
			  '100%': { width: '19em' },
			},
			blinkTextCursor: {
			  '0%, 100%': { 'border-right-color': 'rgba(255, 255, 255, 0.75)' },
			  '50%': { 'border-right-color': 'transparent' },
			},
		  },
		  animation: {
			typewriter: 'typewriter 4s steps(44) 1s 1 normal both',
			blinkTextCursor: 'blinkTextCursor 500ms steps(44) infinite normal',
		  },
		  width: {
			'24em': '24em',
		  },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
};
export default config;
