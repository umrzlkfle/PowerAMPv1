const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.blade.php'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
              // Primary Colors
              primary: {
                DEFAULT: '#3B82F6', // A standard blue
                light: '#60A5FA',    // Lighter shade
                dark: '#2563EB',     // Darker shade
              },
              // Secondary Colors
              secondary: {
                DEFAULT: '#10B981', // A standard green
                light: '#34D399',    // Lighter shade
                dark: '#059669',     // Darker shade
              },
              // Accent Colors
              accent: {
                DEFAULT: '#F59E0B', // A standard orange
                light: '#FBBF24',    // Lighter shade
                dark: '#D97706',     // Darker shade
              },
              // Neutral Colors (Gray Scale)
              neutral: {
                50: '#F9FAFB',  // Very light gray
                100: '#F3F4F6', // Light gray
                200: '#E5E7EB', // Medium light gray
                300: '#D1D5DB', // Medium gray
                400: '#9CA3AF', // Medium dark gray
                500: '#6B7280', // Dark gray
                600: '#4B5563', // Very dark gray
                700: '#374151', // Almost black
                800: '#1F2937', // Blackish
                900: '#111827', // Pure black
              },
              // Semantic Colors
              success: '#10B981', // Green for success
              warning: '#F59E0B', // Orange for warnings
              error: '#EF4444',   // Red for errors
              info: '#3B82F6',    // Blue for informational messages
            },

            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
