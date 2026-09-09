import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Laff British Montessori School',
  description: 'A nurturing Montessori school focused on academic excellence, character and leadership.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
