import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Finalmente, formando",
  description: "Site para convidar amigos e familiares para a formatura",
  openGraph: {
    title: 'Convite para a Formatura de Marco Antônio',
    description: 'Junte-se a nós para celebrar a formatura de Marco Antônio.',
    url: 'https://graduation-invitation-phi.vercel.app/',
    images: [
      {
        url: 'https://github.com/tchez.png',
        width: 800,
        height: 600,
        alt: 'Convite para a Formatura de Marco Antônio',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-black">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
