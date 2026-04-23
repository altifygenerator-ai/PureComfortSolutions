import "./globals.css";
import { Inter, Oswald } from "next/font/google";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const headingFont = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Pure Comfort Solutions",
  description:
    "Heating, AC and landscaping in Goshen Arkansas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
