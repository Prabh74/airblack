import styles from "./facebg.module.css"

export default function Facebg({ children }) {
    return <section className={styles.facebgContainer}>{children}</section>
}
