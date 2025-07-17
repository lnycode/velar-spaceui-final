import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Velar – Migräne Vorhersage',
  description: 'Die futuristische Migräne-App mit KI, Logs und PDF-Export.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
