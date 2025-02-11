import { Inter, Poppins } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'GFG PDEU Student Chapter',
  description: 'Geeks for Geeks PDEU Student Chapter Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

