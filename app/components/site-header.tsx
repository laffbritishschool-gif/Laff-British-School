import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="brand" href="/">
          <img className="brand-logo" src="https://i.ibb.co/whtP8S5v/image.png" alt="Laff British Montessori School logo" />
          <span>Laff British Montessori School<small>Learning • Character • Excellence</small></span>
        </Link>
        <nav className="nav" aria-label="Main navigation">
          <Link href="/about">About</Link>
          <Link href="/academics">Academics</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/news">News</Link>
          <Link href="/events">Events</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
          <Link className="nav-cta" href="/student/login">Student Login</Link>
        </nav>
      </div>
    </header>
  );
}
