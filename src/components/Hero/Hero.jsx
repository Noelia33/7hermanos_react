import styles from './Hero.module.css';
import heroBg from '../../assets/img/principal.png';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <img className={styles.heroImg} src={heroBg} alt="Restaurante 7 Hermanos" />
      <div className={styles.overlay} />

        <div className={`container ${styles.content}`}>

            <h1 className={styles.title}>
                7<br/><em>Hermanos</em>
            </h1>
            <p className={styles.eyebrow}>Restaurante · El Campello, Alicante</p>
            <p className={styles.sub}>Desde 1988</p>
            <div className={styles.ctas}>
                <a className={styles.ctaPrimary} href="#menu">Carta</a>
                <a className={styles.ctaSecondary} href="#carta">Menús</a>
            </div>
        </div>
    </section>
  );
}
