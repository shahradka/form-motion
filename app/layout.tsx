import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const iranSans = localFont({
  src: [
    {
      path: '../public/fonts/iransans.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-iranSans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'مبین خودرو',
  description: 'وب سایت رسمی مبین خودرو',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranSans} antialiased`}>
        <div className="simple-black-gradient"> {children}</div>
      </body>
    </html>
  );
}
