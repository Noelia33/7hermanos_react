import styles from './Ubicacion.module.css';

export default function Ubicacion() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Ubicación</h2>
          <p>Nuestra ubicación</p>
        </div>

        <div className={styles.grid}>
          {/* Mapa */}
          <div className={styles.mapWrap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12503.233906462016!2d-0.40495034302181926!3d38.42279076029695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd623bbc7d2e1e6f%3A0x29a456e660c82171!2sRestaurante%20Siete%20Hermanos!5e0!3m2!1ses!2ses!4v1751204003827!5m2!1ses!2ses"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Restaurante 7 Hermanos"
            />
          </div>

          {/* Info */}
          <div className={styles.infoList}>
            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}>📍</div>
              <div>
                <h3>Localización</h3>
                <p>Av. Xixona, 7, 03560 El Campello, Alicante</p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}>🕐</div>
              <div>
                <h3>Horario</h3>
                <p>Lunes: CERRADO</p>
                <p>Martes a viernes: 9:00 – 15:45</p>
                <p>Sábados y domingos: 9:30 – 16:00</p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}>📞</div>
              <div>
                <h3>Teléfono</h3>
                <p>965 63 25 01</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
