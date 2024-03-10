import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Anis',
  description: 'Portfolio and projects list',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
