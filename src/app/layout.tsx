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
  title: "Brandspace - Creative Agency",
  description: "Brandspace is a full-service creative agency transforming bold ideas into compelling realities.",
  metadataBase: new URL("https://www.brandspacebd.com"),
  icons: {
    icon: [
      { url: "/logo/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo/favicon.svg",
    apple: [
      { url: "/logo/graphlink-viewer.svg", sizes: "180x180", type: "image/svg+xml" },
      { url: "/logo/favicon.svg" }
    ],
  },
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
