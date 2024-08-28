import Footer from "./components/BodyComponent/Footer/Footer"
import Header from "./components/BodyComponent/Header"
import Main from "./components/BodyComponent/main/main"
import "./styles/default.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <section className={"default"}>  
    <Header/>
    <Main/>
    <Footer/>
    </section>
  )
}

export default App
