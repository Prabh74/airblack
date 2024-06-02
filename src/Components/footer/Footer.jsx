import Facebg from "../facebg/Facebg"
import styles from "./footer.module.css"

export default function Footer() {
    return (
        <Facebg>
            <section className={styles.footer}>
                <h1 className={styles.footerHead}>
                    Join our growing <br /> community of <br /> 35,000+ alumni
                </h1>
                <button>Apply Now</button>
                <div className={styles.socials}>
                    <a href="">
                        <img src="/Images/instagram.png" alt="" />
                    </a>
                    <a href="">
                        <img src="/Images/facebook.png" alt="" />
                    </a>
                    <a href="">
                        <img src="/Images/linkedin.png" alt="" />
                    </a>
                    <a href="">
                        <img src="/Images/twitter.png" alt="" />
                    </a>
                </div>
            </section>
        </Facebg>
    )
}
