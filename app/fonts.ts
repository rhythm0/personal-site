// app/fonts.ts
import { Playfair_Display, Geist } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
});

export const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});