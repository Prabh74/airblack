import "./App.css"
import Certificate from "./Components/Certificate/Certificate"
import Footer from "./Components/footer/Footer"
import FormContainer from "./Components/formContainer/FormContainer"
import Header from "./Components/header/Header"
import Whytojoin from "./Components/why/Whytojoin"

function App() {
    return (
        <div className="App">
            <Header />
            <FormContainer />
            <Whytojoin />
            <Certificate />
            <Footer />
        </div>
    )
}

export default App
