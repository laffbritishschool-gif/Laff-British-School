import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Laff British School',
  description: 'Excellence in education, character and leadership.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
