import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import WhatsAppButton from "@/components/WhatsAppButton";
import FooterFun from "@/components/footer";
import HeadNav from "@/components/head";

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
        {/* Event snippet for Book appointment conversion page */}
        <script dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {'send_to': 'AW-17516594993/JMGmCM3Jg5AbELGOyKBB'});
          `,
        }} />
        <title>Guruji Real Estate | Property Dealer in Greater Noida</title>
        <meta name="description" content="Guruji Real Estate is a leading property dealer in Greater Noida, offering residential and commercial properties, investment consulting, and legal support. Find your dream home or perfect investment today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Guruji Real Estate | Property Dealer in Greater Noida" />
        <meta property="og:description" content="Find top residential and commercial properties in Greater Noida with Guruji Real Estate. Trusted consultants for buying, selling, and investing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gurujirealestate.com" />
        <meta property="og:image" content="/images/guruji-logo.png" />
      </head>
      <body>
        <HeadNav />
        <main role="main">{children}</main>
        <WhatsAppButton />
        <FooterFun />
      </body>
    </html>
  );
}

