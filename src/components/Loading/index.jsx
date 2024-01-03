import pikachu from '../../assets/pikachu.gif'
import styles from './styles.module.scss'

function Loading() {
    return (
        <div className={styles.loading}>
            <h2>Carregando...</h2>
            <img src={pikachu} alt="Pikachu-Loading" />
        </div>
    )
}

export default Loading