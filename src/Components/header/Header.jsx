import Facebg from "../facebg/Facebg"
import styles from "./header.module.css"

export default function Header() {
    return (
        <Facebg>
            <section className={styles.headerContainer}>
                <img src="/Images/fullLogo.svg" alt="" />
                <p>PRESENTS</p>
            </section>
        </Facebg>
    )
}
