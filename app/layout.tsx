import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";


const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CarePulse",
  description:
    "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  style={{colorScheme: 'dark'}} lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen  bg-dark-300 font-sans antialiased",
          fontSans.variable
        )}
      >
         {children}
      </body>
    </html>
  );
}