import Facebg from "../facebg/Facebg"
import styles from "./whytojoin.module.css"
import Title from "../titleComponent/Title.jsx"

export default function Whytojoin() {
    return (
        <Facebg>
            <section className={styles.whyContainer}>
                <Title>
                    <h1>
                        Why Should You <br /> Join Airblack
                    </h1>
                </Title>
                <div className={styles.tickersContainer}>
                    <div className={styles.whyTickers}>
                        <img src="/Images/zoom.png" alt="" />
                        <p>
                            Do-it-together,
                            <br /> live on zoom
                        </p>
                    </div>
                    <div className={styles.whyTickers}>
                        <img src="/Images/star.png" alt="" />
                        <p>
                            4.8/5 <br />
                            Rated Classes
                        </p>
                    </div>
                    <div className={styles.whyTickers}>
                        <img src="/Images/members.png" alt="" />
                        <p>
                            35000+ <br />
                            Members
                        </p>
                    </div>
                </div>
                <button>Apply Now</button>
            </section>
        </Facebg>
    )
}
