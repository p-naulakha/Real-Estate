import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import WhatsAppButton from "@/components/WhatsAppButton";
// 

export const metadata: Metadata = {
  title: "Guruji Real Estate ",
  description: "Find your dream home with Guruji Real Estate.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17516594993"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17516594993');
          `,
        }} />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

