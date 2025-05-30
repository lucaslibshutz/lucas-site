import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Lucas Site",
  description: "Portfolio inspired by Apple.com",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
