import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thrilltopia Park",
  description: "Thrilltopia Park is a theme park that offers a variety of thrilling rides and attractions for all ages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
