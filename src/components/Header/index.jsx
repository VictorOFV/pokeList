import logo from "../../assets/Logo.png"
import styles from "./styles.module.scss"

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo" />
        </header>
    )
}

export default Header