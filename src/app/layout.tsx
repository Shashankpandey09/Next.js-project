import type { Metadata } from "next";

import "./globals.css";
import { Montserrat } from "next/font/google";

const mons=Montserrat({
  subsets: ["latin"],
  weight:['400']
})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
 
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css" integrity="sha512-MqL4+Io386IOPMKKyplKII0pVW5e+kb+PI/I3N87G3fHIfrgNNsRpzIXEi+0MQC0sR9xZNqZqCYVcC61fL5+Vg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={mons.className}>
      <script src="https://cdn.tailwindcss.com"></script>
        {children}</body>
  
    </html>
  );
}
