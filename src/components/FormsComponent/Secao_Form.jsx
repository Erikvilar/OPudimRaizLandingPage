import { useState } from "react";
import css from "./Secao_Form.module.css";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Secao_Form() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

const notifyError = ()=> toast.error("Ocorreu um erro ao enviar Email!")
const notifyAccept =()=> toast.success("Email enviado com sucesso!")
const notifyAlert = ()=> toast.info("Campos nulos ou não preenchidos!")
  function getData(e) {
    setForm({ ...form, [e.target.name]: [e.target.value] });
    console.log(form);
  }

  function validar() {
    if (form.nome === "" || form.email === "")
      notifyAlert();
    else {
      var templateParams = {
        from_name: form.nome,
        from_sobrenome: form.sobrenome,
        from_email: form.email,
        from_mensagem: form.mensagem,
      };

      emailjs
        .send(
          "service_0t7ah1a",
          "template_te6s3xb",
          templateParams,
          "SMgydBVs1wp8cvlQt"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            notifyAccept();
          },
          (error) => {
            console.log("FAILED...", error);
            notifyError();
          }
        );
      emailjs.send(
        service_0t7ah1a,
        template_te6s3xb,
        templateParams,
        SMgydBVs1wp8cvlQt
      );
    }
  }

  return (
    <section id="formSection">
 
      <div className={css.bgForm}>
        <div className={css.container}>
          <h1 className={css.title}>ENTRE EM CONTATO CONOSCO</h1>
          <div className={css.formContainer} data-aos="zoom-in">
          <ToastContainer position="top-center"/>
            <form className={css.form}>
           
              <h2 className={css.titleForm}>Contate-nos</h2>
              <label htmlFor="">Digite o seu nome*</label>
              <input type="text" name="nome" onChange={getData} placeholder="example name"/>

              <label htmlFor="">Digite o seu sobrenome*</label>
              <input type="text" name="sobrenome" onChange={getData} placeholder="last name" />

              <label htmlFor="">Digite o seu e-mail*</label>
              <input type="email" name="email" onChange={getData}placeholder="example@gmail.com"/>

              <label htmlFor="">Deixe sua mensagem*</label>
              <input type="text" name="mensagem" onChange={getData} placeholder="deixe aqui sua mensagem"/>
              <input type="button" value="Enviar" onClick={validar} />
            </form>

            <div className={css.contactContainer}>
              <p className={css.description}>
                Tem alguma dúvida sobre nossos produtos? Quer mais informações?
                Preencha o formulário e entraremos em contato com você.
              </p>
              <div className={css.contactInfo}>
                <div className={css.contactItem}>
                  <FaPhoneVolume />
                  <span> (34)99241-6676</span>
                </div>
                <div className={css.contactItem}>
                  <MdMarkEmailRead />
                  <span>opudimraiz@gmail.co</span>
                </div>
                <div className={css.contactItem}>
                  <FaLocationDot />
                  <span>
                    Rua João Tobias, 15 - Presidente Roosevelt Uberlândia - MG
                  </span>
                </div>
              </div>
              <div className={css.iframeForm}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.3869735530527!2d-48.27902321093755!3d-18.89710701130478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4453eb0b8f3cd%3A0x2936ef7d678b6f2f!2sO%20Pudim%20Raiz!5e0!3m2!1spt-BR!2sbr!4v1725590964997!5m2!1spt-BR!2sbr"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
}

export default Secao_Form;
