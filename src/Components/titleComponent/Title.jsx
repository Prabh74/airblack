import styles from "./title.module.css"

export default function Title({ children }) {
    return (
        <div className={styles.header}>
            <img className={styles.img} src="/Images/line.svg" alt="" />
            {children}
            <img
                className={`${styles.img} ${styles.reverse}`}
                src="/Images/line.svg"
                alt=""
            />
        </div>
    )
}
