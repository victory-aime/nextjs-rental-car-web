// ! IMPORTANT: default color must be 500.

import { theme } from '@chakra-ui/react'

// ! IMPORTANT: 600 is hover color
const colors: { [color: string]: { [opacity: number]: string } } = {
    ...theme.colors,
    primary: {
        50: '#F6F5FD',
        100: '#E3DFF9',
        200: '#C3F0E9',
        300: '#b5f1c1',
        400: '#a0eda8',
        500: '#00A887',
        600: '#00B995',
        700: '#00CCA4',
        800: '#00E2B6',
        900: '#2C2C2C',
    },
    secondary: {
        50: '#dafbff',
        100: '#b3eafb',
        200: '#BCF5F1',
        300: '#5ccbed',
        400: '#06524C',
        500: '#06524C',
        600: '#387570',
        700: '#10AA9F',
        900: '#00141d',
    },
    tertiary: {
        50: '#defff0',
        100: '#d3d5d9',
        200: '#EFF0A3',
        300: '#d3d5aa',
        400: '#d3d557',
        500: '#D3D552',
        600: '#E5E85C',
        700: '#F9FC65',
        800: '#FDFFA7',
        900: '#001808',
    },
    quaternary: {
        200: '#FFB589',
        500: '#F4772C',
        400: '#FA8641',
        600: '#FF9B5F',
        700: '#FFB589',
    },
    purple: {
        500: '#4D4586',
        300: '#4D4586',
        600: '#5E3F99',
        900: '#aaa5d2',
    },
    blue: {
        100: '#4397D1',
        200: '#4397D1',
        300: '#4cc5ea',
        500: '#62BBD6',
        600: '#3EB6DB',
    },
    green: {
        100: '#02864d',
        200: '#02864d',
        300: '#1CC577',
        500: '#1CC577',
        600: '#00ff8f',
        700: '#E0F5F0',
    },
    gray: {
        500: '#6E7C7C',
        600: '#849292',
        700: '#95A4A4',
        800: '#AABABA',
        900: '#BCBCBC',
    },
    lightGray: {
        200: '#C2C7CA',
        500: '#C2C7CA',
        600: '#CACFD2',
        700: '#DEE2E4',
        800: '#EDEEEF',
    },
    overlay: {
        500: '#333333',
    },
    red: {
        400: '#FF4423',
        500: '#ff3b3b',
        600: '#EE312E',
    },
    black: {
        400: '#444444',
        500: '#4B4B4B',
        600: '#4B4B4B',
        700: '#575757',
        800: '#737373',
    },
    white: {
        500: '#ffffff',
    },
    focus: {
        500: '#49C4E9',
    },
    light: {
        500: '#D8D8E4',
    },
    lighter: {
        500: '#C7C7D2',
    },
    shadowColor: {
        500: '#0B0051',
    },
    keyboardShadow: {
        500: '#4B7DE1',
    },
    barChatCreditColor: {
        500: '#06524c',
    },
    barChatDebitColor: {
        500: '#d3d552',
    },
    barChatIncColor: {
        500: '#00A887',
    },
    barChatComColor: {
        500: '#06524C',
    },
}



export const getColorsWithOpacity = (color = 'primary', opacity = 500) => colors[color][opacity]

export const hexToRGB = (color: string, alpha?: number, op?: number) => {
    const hex = getColorsWithOpacity(color, op)
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    const a = alpha ? `, ${alpha}` : ''

    return `rgba(${r},${g},${b}${a})`
}


export default colors
