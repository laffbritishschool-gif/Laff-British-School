import Link from 'next/link';
import './globals.css';

export const metadata = { title: 'Laff British Montessori School', description: 'A nurturing British Montessori school with a modern learning community.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><header className="site-header"><div className="container nav"><Link className="brand" href="/"><span className="brand-mark">LB</span><span>Laff British Montessori School</span></Link><nav><Link href="/about">About</Link><Link href="/academics">Academics</Link><Link href="/admissions">Admissions</Link><Link href="/news">News</Link><Link href="/contact">Contact</Link></nav><Link className="nav-button" href="/result-checker">Check Result</Link></div></header><main>{children}</main><footer className="footer"><div className="container footer-grid"><div><h3>Laff British Montessori School</h3><p>Growing confident, curious and compassionate learners.</p></div><div><strong>Quick links</strong><Link href="/result-checker">Result Checker</Link><Link href="/student-login">Student Login</Link><Link href="/id-card">Student ID Card</Link></div><div><strong>Contact</strong><span>Address details coming soon</span><span>Phone details coming soon</span><span>info@laffbritishschool.com</span></div></div><div className="container copyright">© 2026 Laff British Montessori School. All rights reserved.</div></footer></body></html>;
}
