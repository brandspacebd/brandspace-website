import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

import '@/assets/css/line-awesome.min.css';
import '@/assets/css/iconoir.css';
import '@/assets/css/fontawesome.min.css';
import '@/assets/css/animate.min.css';

import '@/assets/css/aixor-unit-test.css';
import '@/assets/css/style.css';
import '@/assets/css/responsive.css';

import type { Metadata } from "next";
import { Arapey, Urbanist } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import Dependency from '@/components/utilities/Dependency';

const arapey = Arapey({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: 'swap'
})

const urbanist = Urbanist({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Aixor - Marketing Agency React NextJS Template"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arapey.className} ${urbanist.className}`}>
        <ToastContainer />
        <Dependency />
        {children}
      </body>
    </html>
  );
}
