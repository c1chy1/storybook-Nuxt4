import type {Config} from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

const config: Config = {
    content: ['./src/**/*.{mdx,js,jsx,ts,tsx,vue}'],
    plugins: [
        forms({
            strategy: 'class',
        }),
        typography,
    ],
    theme: {
        fontFamily: {
            sans: ['Helsinki', 'Tahoma', 'sans-serif'],
        },
        fontSize: {
            'xs': ['.7rem', '1.4'],
            'sm': ['.8rem', '1.4'],
            'tiny': ['.9rem', '1.4'],
            'base': ['1rem', '1.4'],
            'lg': ['1.2rem', '1.4'],
            'xl': ['1.5rem', '1.4'],
            '2xl': ['1.8rem', '1.4'],
            '3xl': ['2.1rem', '1.4'],
            '4xl': ['2.4rem', '1.4'],
            '5xl': ['2.4rem', '1.4'],
            '6xl': ['2.4rem', '1.4'],
            '7xl': ['2.4rem', '1.4'],
        },
        extend: {
            backgroundImage: {
                'gradient-radial':
                    'radial-gradient(ellipse at top, #3486a3, #002329)',
            },
            colors: {
                'brand-primary': {
                    DEFAULT: '#003CC1',
                    background: '#F5F7FD',
                    lightest: '#EBEFFA',
                    lighter: '#D6E0F5',
                    light: '#ADC1EB',
                    dark: '#0032A2',
                    darker: '#002983',
                },
                'brand-secondary': {
                    DEFAULT: '#8FCB18',
                    background: '#F5F7F7',
                    lightest: '#F6FBED',
                    lighter: '#EBF6DA',
                    light: '#D3EBB3',
                    dark: '#78AB14',
                    darker: '#618A10',
                },
                'brand-tertiary': {
                    DEFAULT: '#00343D',
                    background: '#F5F7F7',
                    lightest: '#EBEFEF',
                    lighter: '#D6DEE0',
                    light: '#ADBEC1',
                    dark: '#002C33',
                    darker: '#002329',
                },
                'additional-danger': {
                    DEFAULT: '#FF432E',
                    background: '#FFF7F7',
                    lightest: '#FFF0EE',
                    lighter: '#FFE1DE',
                    light: '#FFC3BC',
                    dark: '#D63827',
                    darker: '#AD2E1F',
                },
                'additional-info': {
                    DEFAULT: '#5AC5F2',
                    background: '#F8FDFE',
                    lightest: '#F2FAFE',
                    lighter: '#E5F6FD',
                    light: '#CAECFB',
                    dark: '#4CA5CB',
                    darker: '#3D86A5',
                },
                'additional-success': {
                    DEFAULT: '#6BA43A',
                    background: '#F9FBF7',
                    lightest: '#F3F8EF',
                    lighter: '#E7F0DF',
                    light: '#D0E2C0',
                    dark: '#5A8A31',
                    darker: '#497027',
                },
                'additional-warning': {
                    DEFAULT: '#FF6D2E',
                    background: '#FFF9F7',
                    lightest: '#FFF3EE',
                    lighter: '#FFE8DE',
                    light: '#FFD0BC',
                    dark: '#D65C27',
                    darker: '#AD4A1F',
                },
                'additional-white': {
                    DEFAULT: '#FDFDFD',
                },
                'additional-black': {
                    DEFAULT: '#161616',
                },
                'additional-grey': {
                    DEFAULT: '#AAAEB7',
                    lightest: '#F8F9F9',
                    lighter: '#F1F2F3',
                    light: '#E4E5E8',
                    dark: '#8F929A',
                    darker: '#74767C',
                },
            },
            boxShadow: {
                'shadow-even-lg': '0 0 15px 0 rgba(0, 0, 0, 0.25)',
                'shadow-even-sm': '0 0 15px 0 rgba(0, 0, 0, 0.15)',
                'shadow-up': '0 -5px 20px 0 rgba(0, 0, 0, 0.1)',
                'shadow-down': '0 5px 20px 0 rgba(0, 0, 0, 0.1)',
                'shadow-dropped':
                    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'shadow-dropped-bottom-right':
                    '4px 4px 6px -2px rgba(0, 0, 0, 0.05)',
            },
            borderRadius: {
                'border-radius-sm': '4px',
                'border-radius-md': '8px',
                'border-radius-lg': '12px',
                'border-radius-full': '9999px !important',
            },
        },
    },
}

export default config