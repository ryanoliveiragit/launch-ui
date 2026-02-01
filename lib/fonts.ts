/**
 * Font configuration. Uses a system font stack to avoid fetching from Google Fonts
 * at build time (which can fail offline or with restricted network).
 * Matches the previous Inter-like sans-serif look on most systems.
 */
const fontSansClassName = "font-sans";

export const inter = {
  className: fontSansClassName,
};
