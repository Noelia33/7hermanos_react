import { galleryImages } from '../../data/menuData';
import styles from './Galeria.module.css';

export default function Galeria() {
  return (
    <section id="gallery" className={`section section--alt ${styles.galeria}`}>
      <div className="container">
        <div className="section-title">
          <h2>Imágenes</h2>
        </div>
      </div>

      <div className={styles.grid}>
        {galleryImages.map((img, i) => (
          <div className={styles.item} key={i}>
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
