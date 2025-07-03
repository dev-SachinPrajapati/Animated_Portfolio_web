import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sachin Prajapati | Full-Stack Developer & SDE Fresher",
  description: "Portfolio of Sachin Prajapati, showcasing projects, internships, and skills in full-stack development, system design, and problem-solving.",
  icons: {
    icon: "/profile.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
