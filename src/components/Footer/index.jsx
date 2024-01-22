import styles from "./styles.module.scss"
import { FaGithub, FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.icons}>
                    <a href="https://github.com/VictorOFV" target="_blank">
                        <FaGithub />
                    </a>
                    <a href="https://www.facebook.com/Mr.Victor.02/" target="_blank">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/victor.m.l.p/" target="_blank">
                        <FaInstagram />
                    </a>
                    <a href="https://discord.gg/PfYZqhUqbW" target="_blank">
                        <FaDiscord />
                    </a>
                </div>
                <hr />
                <p>© 2024 • Design por <a href="https://www.instagram.com/victor.m.l.p/" target="_blank">@VictorManoel</a> &amp; <a href="https://www.instagram.com/maxrcolen/" target="_blank">@MaxColen</a>, desenvolvido por <a href="https://www.instagram.com/victor.m.l.p/" target="_blank">@VictorManoel</a>.</p>

            </div>
        </footer>
    )
}

export default Footer