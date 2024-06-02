import Title from "../titleComponent/Title"
import styles from "./certificate.module.css"

export default function Certificate() {
    return (
        <section className={styles.certificateContainer}>
            <Title>
                <h1 className={styles.certificateHead}>
                    Get Certified From <br /> India’s Biggest <br /> Beauty
                    Platform
                </h1>
            </Title>
            <img src="/Images/certificate.png" alt="" />
        </section>
    )
}
