import { vinos } from '../../data/menuData';
import styles from './Vinos.module.css';

export default function Vinos() {
  return (
    <section id="vinos" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Vinos</h2>
          <p>Nuestros vinos</p>
        </div>

        {/* Cabecera de columnas */}
        <div className={styles.colHeaders}>
          <span />
          <span className={styles.colLabel}>Copa</span>
          <span className={styles.colLabel}>Botella</span>
        </div>

        {vinos.map((group) => (
          <div className={styles.group} key={group.category}>
            {/* Badge de categoría */}
            <div className={styles.categoryBadge}>
              {group.category.toUpperCase()}
            </div>

            {/* Items */}
            <div className={styles.grid}>
              {group.items.map((v, i) => (
                <div className={styles.item} key={i}>
                  <p className={styles.itemName}>{v.name}</p>
                  <span className={styles.itemPrice}>{v.copa ?? '—'}</span>
                  <span className={styles.itemPrice}>{v.botella ?? '—'}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
