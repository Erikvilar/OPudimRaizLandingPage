
import Footer from "./components/BodyComponent/Footer/Footer"
import Header from "./components/BodyComponent/Header"
import Main from "./components/BodyComponent/main/main"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/default.css"


import AOS from 'aos';
import 'aos/dist/aos.css';
import React from "react";




function App() {

  React.useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
    });
  });
  return (
    <section className={"default"}>  

    <Main/>
    <Footer/>
    </section>
  )
}

export default App
