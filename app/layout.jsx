import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AGTM Partner - Your Gateway to Africa\'s Digital Economy',
  description: 'Leading Go-To-Market agency specializing in Web3, Fintech, and Digital Brands across Africa. Strategic market entry, partnerships, and growth solutions.',
  keywords: 'Web3 Africa, Fintech Nigeria, Digital Marketing Africa, Blockchain Growth, Market Entry Strategy',
  openGraph: {
    title: 'AGTM Partner - Your Gateway to Africa\'s Digital Economy',
    description: 'Leading Go-To-Market agency specializing in Web3, Fintech, and Digital Brands across Africa.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#228B22" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}