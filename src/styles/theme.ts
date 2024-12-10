export const theme = {
  colors: {
    navy: '#1B1F2E',     // Deep navy background
    gold: '#C5A572',     // Metallic gold
    beige: '#E5D5B7',    // Light beige
    champagne: '#D4C4A1', // Champagne accent
    navyLight: '#252A3D', // Lighter navy for hover states
  },
  fonts: {
    primary: '"Garamond", serif',     // Elegant serif font for headings
    secondary: '"Inter", sans-serif',  // Clean sans-serif for body text
  },
} as const;

export type Theme = typeof theme;
