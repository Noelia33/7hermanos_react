import { useState } from 'react';
import { cartaSections } from '../../data/menuData';
import styles from './Carta.module.css';

function MenuItem({ item }) {
  if (item.warning) {
    return (
      <div className={`${styles.card} ${styles.cardWarning}`}>
        <p className={styles.warningText}>⚠ {item.note}</p>
      </div>
    );
  }
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardName}>{item.name}</span>
        <span className={styles.cardPrice}>{item.price}</span>
      </div>
      {item.note && <p className={styles.cardNote}>{item.note}</p>}
    </div>
  );
}

export default function Carta() {
  const [activeTab, setActiveTab] = useState('entrantes');
  const categories = Object.keys(cartaSections);

  return (
    <section id="menu" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Carta</h2>
          <p>Nuestra carta</p>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {categories.map((key) => (
            <button
              key={key}
              className={`${styles.tab} ${activeTab === key ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className={`${styles.grid} fade-up`} key={activeTab}>
          {cartaSections[activeTab].map((item, i) => (
            <MenuItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
