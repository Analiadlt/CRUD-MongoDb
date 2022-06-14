import styles from './NavBar.module.css';
import basto from '../../img/basto.png';


export default function NavBar() {
    return (
        <div>
        <img src={basto} alt='' />
        <p className={styles.name}>Establecimiento Ganadero</p>
        </div>
    )
}