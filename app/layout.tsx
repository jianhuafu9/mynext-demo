import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
