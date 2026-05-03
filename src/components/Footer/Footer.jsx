import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © Copyright{' '}
        <strong>Restaurante 7 Hermanos</strong>{' '}
        — Todos los derechos reservados.
      </p>
      <p className={styles.credits}>
        Diseñado por <a href="#">Noelia Sánchez Manzano</a>
      </p>
    </footer>
  );
}
