import styles from './Historia.module.css';
import cocinera from '../../assets/img/cocinera.jpg';

export default function Historia() {
  return (
    <section id="historia" className="section section--alt">
      <div className="container">
        <div className="section-title">
          <h2>Historia</h2>
          <p>Nuestra historia</p>
        </div>

        <div className={styles.inner}>
          <div className={styles.imgWrap}>
            <img className={styles.img} src={cocinera} alt="Cocinera del restaurante" />
          </div>

          <div className={styles.text}>
            <h3>Desde 1988, una tradición familiar</h3>
            <p>
              <em>El Restaurante 7 Hermanos abrió sus puertas en 1988</em> como un pequeño
              negocio familiar fundado por una pareja que, además de pasión por la cocina,
              compartía una gran familia: siete hijos, que dieron nombre al establecimiento.
            </p>
            <p>
              A lo largo de los años, el restaurante ha pasado de generación en generación,
              manteniendo intactos los valores con los que nació: cocina casera, ingredientes
              de calidad y un trato cercano. Hoy continúa su andadura bajo la dirección de
              su hija, que sigue ofreciendo a cada comensal el sabor auténtico de una historia
              familiar con raíces profundas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
