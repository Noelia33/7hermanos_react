import { menus } from '../../data/menuData';
import styles from './Menus.module.css';

export default function Menus() {
  return (
    <section id="carta" className="section section--alt">
      <div className="container">
        <div className="section-title">
          <h2>Menús</h2>
          <p>Nuestros menús</p>
        </div>

        <div className={styles.grid}>
          {menus.map((m, i) => (
            <div className={styles.tile} key={i}>
              <div className={styles.tileHeader}>
                <span className={styles.tileName}>{m.name}</span>
                <span className={styles.tilePrice}>{m.price}</span>
              </div>
              <p className={styles.tileDesc}>{m.desc}</p>
              {m.warning && <p className={styles.tileWarn}>⚠ {m.warning}</p>}
            </div>
          ))}
        </div>

        <p className={styles.note}>
          Todos los menús incluyen una bebida por persona, pan y postre.
        </p>
      </div>
    </section>
  );
}
