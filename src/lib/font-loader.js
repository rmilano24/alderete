/**
 * Font Loading Utility
 * Preloads critical fonts for better performance
 */

export function preloadFonts() {
  // Preload critical fonts
  const criticalFonts = [
    '/fonts/Matter-Regular.woff2',
    '/fonts/Matter-SemiBold.woff2',
    '/fonts/Reckless-Light.woff2'
  ];

  criticalFonts.forEach(fontUrl => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.href = fontUrl;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

/**
 * Check if fonts are loaded
 */
export function checkFontsLoaded() {
  return document.fonts.ready;
}

/**
 * Wait for fonts to load
 */
export async function waitForFonts() {
  await document.fonts.ready;
} 