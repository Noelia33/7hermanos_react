import styles from './Reservar.module.css';

export default function Reservar() {
  return (
    <section id="book-a-table" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Reservar</h2>
          <p>Reserva una mesa</p>
        </div>

        <div className={styles.box}>
          <p>
            Para realizar una reserva, llámanos al{' '}
            <strong>965 63 25 01</strong>, estaremos encantados de atenderte.
          </p>
          <a href="tel:965632501" className={styles.btnCall}>
            Llamar ahora
          </a>
        </div>
      </div>
    </section>
  );
}
