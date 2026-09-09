import Link from 'next/link';

const programs = [
  ['01', 'Early Years', 'A caring foundation where children learn through curiosity, play and guided discovery.'],
  ['02', 'Basic Education', 'Strong academic foundations, confidence, discipline and practical learning for growing minds.'],
  ['03', 'Senior Secondary', 'Focused preparation for examinations, university pathways and responsible leadership.'],
];

const reasons = [
  ['01', 'Academic Excellence', 'Purposeful teaching and learning designed to help every learner reach their potential.'],
  ['02', 'Character & Values', 'We develop disciplined, respectful and confident young people prepared to make a difference.'],
  ['03', 'Safe Learning Environment', 'A supportive school community where students can learn, grow and thrive.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="nav-wrap">
          <Link className="brand" href="/">
            <span className="brand-mark">LBS</span>
            <span>Laff British School<small>Learning • Character • Excellence</small></span>
          </Link>
          <nav className="nav" aria-label="Main navigation">
            <Link href="/about">About</Link>
            <Link href="/academics">Academics</Link>
            <Link href="/admissions">Admissions</Link>
            <Link href="/news">News</Link>
            <Link href="/events">Events</Link>
            <Link href="/contact">Contact</Link>
            <Link className="nav-cta" href="/student/login">Student Login</Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div>
            <span className="eyebrow">Welcome to Laff British School</span>
            <h1>Building confident minds for a brighter future.</h1>
            <p>We provide a balanced education that combines academic excellence, strong character and the skills young people need to succeed in a changing world.</p>
            <div className="actions">
              <Link className="btn btn-primary" href="/admissions">Explore Admissions</Link>
              <Link className="btn btn-secondary" href="/about">Discover Our School</Link>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-inner">
              <span className="eyebrow">Our promise</span>
              <strong>Every child. Every opportunity. Every day.</strong>
              <p>Creating an inspiring environment for learning, leadership and lifelong growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="eyebrow">Why choose us</span>
          <h2>Education that goes beyond the classroom.</h2>
          <p>At Laff British School, we believe a great school develops both the learner and the person.</p>
        </div>
        <div className="grid-3">
          {reasons.map(([number, title, text]) => (
            <article className="card" key={title}>
              <div className="card-icon">{number}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="section-alt">
        <section className="section">
          <div className="section-head">
            <span className="eyebrow">Academic programmes</span>
            <h2>A strong pathway from early learning to graduation.</h2>
          </div>
          <div className="grid-3">
            {programs.map(([number, title, text]) => (
              <article className="program" key={title}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="section">
        <div className="news">
          <article className="news-main">
            <span className="eyebrow">School community</span>
            <h3>Stay connected with what is happening at Laff British School.</h3>
            <p>School news, events, announcements and stories will appear here as they are published.</p>
            <Link className="btn btn-primary" href="/news">View School News</Link>
          </article>
          <div className="news-side">
            <article className="news-item"><small>LATEST NEWS</small><h3>Welcome to our new school website</h3><p>Our new digital home brings school information and services together in one place.</p></article>
            <article className="news-item"><small>RESULTS</small><h3>Check student results online</h3><p>Use the secure public result checker to access published academic results.</p><Link href="/result-checker">Check a Result →</Link></article>
          </div>
        </div>
      </section>

      <section className="cta">
        <span className="eyebrow">Admissions</span>
        <h2>Give your child a strong start.</h2>
        <p>Learn about our admissions process, programmes and how to begin your child’s journey with Laff British School.</p>
        <Link className="btn" href="/admissions">Start Your Enquiry</Link>
      </section>

      <footer>
        <div className="footer-grid">
          <div><h3>Laff British School</h3><p>Building confident minds through academic excellence, character and purposeful learning.</p></div>
          <div><h3>Explore</h3><p><Link href="/about">About Us</Link><br/><Link href="/academics">Academics</Link><br/><Link href="/admissions">Admissions</Link><br/><Link href="/news">School News</Link></p></div>
          <div><h3>Services</h3><p><Link href="/result-checker">Result Checker</Link><br/><Link href="/student/login">Student Portal</Link><br/><Link href="/contact">Contact Us</Link></p></div>
          <div><h3>Contact</h3><p>Laff British School<br/>Nigeria<br/>Phone: +234 XXX XXX XXXX<br/>Email: info@laffbritishschool.com</p></div>
        </div>
        <div className="footer-bottom">© 2026 Laff British School. All rights reserved.</div>
      </footer>
    </main>
  );
}
