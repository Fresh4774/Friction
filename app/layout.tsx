import './global.css';
import type { Metadata } from 'next';
import Sidebar from './components/sidebar';

export const metadata: Metadata = {
  metadataBase: new URL('https://friction470.netlify.app'),
  title: {
    default: 'Friction',
    template: '%s | Friction',
  },
  description: 'Yo! Im Friction, Founder of Aquin.',
  openGraph: {
    title: 'Friction',
    description: 'Yo! Im Friction, Founder of Aquin.',
    url: 'https://friction470.netlify.app',
    siteName: 'Friction',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={'text-black bg-white dark:text-white dark:bg-[#111010]'}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
