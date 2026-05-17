import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Carta',     href: '#menu' },
  { label: 'Menús',     href: '#carta' },
  { label: 'Vinos',     href: '#vinos' },
  { label: 'Ubicación', href: '#contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      {/* Top bar */}
      <div className={styles.topbar}>
        <span className={styles.topbarIcon}>📞</span> 965 63 25 01
      </div>

      {/* Branding + nav */}
      <div className={styles.branding}>
        <a href="#hero" className={styles.logo}>
          <em>7</em> Hermanos
        </a>

        <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={styles.navLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.logoWrap}>
          <a className={styles.btnReservarMobile} href="#book-a-table">
            Reservar
          </a>
        </div>

        <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
