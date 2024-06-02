import codes from "country-calling-code"
import styles from "./form.module.css"

export default function Form() {
    return (
        <section className={styles.form}>
            <p>Fill the form below to enquire</p>

            <label>*Enter your name</label>
            <input type="text" name="name" placeholder="Eg. Aneesha Mehra" />
            <label>*Enter your WhatsApp Number</label>
            <div className={styles.number}>
                <select name="numbercode">
                    {codes
                        .sort((a, b) => a.countryCodes[0] - b.countryCodes[0])
                        .map((e) => (
                            <option value={e.country}>
                                +{e.countryCodes[0]}
                            </option>
                        ))}
                </select>
                <input
                    type="number"
                    name="number"
                    placeholder="Eg. 0000000000"
                />
            </div>
            <label>*Select your profession</label>
            <select name="profession">
                <option value="" disabled selected>
                    Choose the most relevant option
                </option>
                <option value="Student">Student</option>
                <option value="Employed">Employed</option>
                <option value="SelfEmployed">Self-Employed</option>
                <option value="Retired">Retired</option>
                <option value="Unemployed">Unemployed</option>
            </select>
            <label>*Select your goal</label>
            <select name="goal">
                <option value="study further">To study further</option>
                <option value="" disabled selected>
                    Choose the most relevant option
                </option>
                <option value="Work">To Work at Airblack</option>
            </select>
            <label>*Select your city</label>
            <select name="city">
                <option value="" disabled selected>
                    Choose the most relevant option
                </option>
                <option value="a">City A</option>
                <option value="b">City B</option>
                <option value="c">City C</option>
            </select>
            <button>Submit</button>
        </section>
    )
}
