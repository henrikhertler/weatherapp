import { ReactNode } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Providers from '@/app/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'How is the weather?',
    description: 'Next.js 13 PWA with Typescript and Tailwind CSS to show the weather',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
