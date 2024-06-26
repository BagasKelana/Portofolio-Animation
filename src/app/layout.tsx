import Navbar from '@/components/Navbar';
import './globals.css';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import Modal from '@/components/ui/modal/modal';
import { Metadata } from 'next';

const helveticaNowDisplay = localFont({
  variable: '--font-helveticaNowDisplay',
  src: [
    {
      weight: '100',
      style: 'normal',
      path: '/assets/fonts/HelveticaNowDisplay-Thin.woff2'
    },
    {
      weight: '300',
      style: 'normal',
      path: '/assets/fonts/HelveticaNowDisplay-Light.woff2'
    },
    {
      weight: '300',
      style: 'normal',
      path: '/assets/fonts/HelveticaNowDisplay-ExtLt.woff2'
    },
    {
      weight: '400',
      style: 'normal',
      path: '/assets/fonts/HelveticaNowDisplay-Regular.woff2'
    },
    {
      weight: '500',
      style: 'normal',
      path: '/assets/fonts/HelveticaNowDisplay-Medium.woff2'
    },
    {
      weight: '800',
      style: 'normal',
      path: '/assets/fonts/HelveticaNowDisplay-ExtraBold.woff2'
    },
    {
      weight: '900',
      style: 'normal',
      path: '/assets/fonts/HelveticaNowDisplay-Black.woff2'
    },
    {
      weight: 'bold',
      style: 'normal',
      path: '/assets/fonts/HelveticaNowDisplay-Bold.woff2'
    },
    {
      weight: 'normal',
      style: 'normal',
      path: '/assets/fonts/HelveticaNowDisplay-Regular.woff2'
    }
  ],
  preload: true
});

const anton = localFont({
  src: '/assets/fonts/Anton-Regular.woff2',
  variable: '--anton-font',
  weight: '400',
  preload: true
});

export const metadata: Metadata = {
  title: 'Bagas Kelana - Portfolio Website',
  description:
    "Welcome to my portfolio! I'm a web developer specializing in responsive design, intuitive user experiences, and optimal performance. Explore my projects showcasing expertise in both frontend and backend development, as well as my proficiency with various technologies like HTML, CSS, JavaScript, and more.",
  keywords: [
    'M Hilal Bagas Kelana',
    'Bagas Kelana',
    'Portfolio',
    'Portfolio Website',
    'Web Developer',
    'React JS',
    'Next JS'
  ],
  category: 'portfolio',
  authors: { name: 'Bagas Kelana' },
  creator: 'M Hilal Bagas Kelana',
  publisher: 'M Hilal Bagas Kelana',
  openGraph: {
    title: 'Bagas Kelana - Portfolio Website',
    description:
      "I'm a web developer with strong focus on web animation & responsive design.",
    url: 'https://bagaskelana.vercel.app/',
    siteName: 'Bagas Kelana',
    images: ['https://bagaskelana.vercel.app/screenshotWebsite.PNG'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bagas Kelana - Portfolio Website',
    description:
      "I'm a web developer with strong focus on web animation & responsive design.",
    images: ['https://bagaskelana.vercel.app/screenshotWebsite.PNG']
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${helveticaNowDisplay.variable} ${anton.variable}`}
    >
      <body>
        <Navbar />
        <Modal />
        {children}
      </body>
    </html>
  );
}
