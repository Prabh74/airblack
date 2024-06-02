import Form from "./Form/Form"
import styles from "./formContainer.module.css"
export default function FormContainer() {
    return (
        <section className={styles.formContainer}>
            <h1 className={styles.title}>Professional Online Makeup Course</h1>
            <div className={styles.certiContainer}>
                <div className={styles.certi}>
                    <img src="/Images/certificateLogo.svg" alt="" />
                    <p>Certification Programme</p>
                </div>
                <div className={styles.rating}>
                    <img src="/Images/star.svg" alt="" />
                    <p>Rated 4.85/5</p>
                </div>
            </div>
            <ul>
                <li>
                    <img src="/Images/tick.svg" alt="" />
                    <p>India’s No.1 Online Makeup Course</p>
                </li>
                <li>
                    <img src="/Images/tick.svg" alt="" />
                    <p>Learn by LIVE Do-it-Together Classes</p>
                </li>
                <li>
                    <img src="/Images/tick.svg" alt="" />
                    <p>Unlimited Practise Session to master skills</p>
                </li>
            </ul>
            <Form />
        </section>
    )
}
