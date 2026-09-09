import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-grid">
        <div><h3>Laff British Montessori School</h3><p>Building confident minds through academic excellence, character and purposeful learning.</p></div>
        <div><h3>Explore</h3><p><Link href="/about">About Us</Link><br/><Link href="/academics">Academics</Link><br/><Link href="/admissions">Admissions</Link><br/><Link href="/news">School News</Link></p></div>
        <div><h3>Services</h3><p><Link href="/result-checker">Result Checker</Link><br/><Link href="/student/login">Student Portal</Link><br/><Link href="/contact">Contact Us</Link></p></div>
        <div><h3>Contact</h3><p>Laff British Montessori School<br/>Nigeria<br/>Phone: +234 XXX XXX XXXX<br/>Email: info@laffbritishschool.com</p></div>
      </div>
      <div className="footer-bottom">© 2026 Laff British Montessori School. All rights reserved.</div>
    </footer>
  );
}
