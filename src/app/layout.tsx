import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import FloatingNav from '@/components/layout/Navbar/FloatingNav';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mintel Solutions - Leading Mobile Banking Solutions for SACCOs',
  description: 'Market leader in mobile banking solutions integrations for SACCOs. We integrate M-PESA, Airtel Money, and Equitel Eazzy Pay solutions for financial institutions.',
  keywords: 'SACCO, mobile banking, M-PESA, Airtel Money, Equitel, ERP, CRM, Core Banking',
  openGraph: {
    title: 'Mintel Solutions - Mobile Banking Solutions for SACCOs',
    description: 'Integrate mobile banking solutions including M-PESA, Airtel Money, and Equitel Eazzy Pay for your financial institution.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FloatingNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}