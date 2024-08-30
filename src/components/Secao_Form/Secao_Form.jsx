import { useState } from 'react';
import css from './Secao_Form.module.css'
import { FaPhoneVolume, FaLocationDot  } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import emailjs from '@emailjs/browser';



function Secao_Form() {

	const [form, setForm] = useState({ nome	: '', email: '', mensagem: '' });

	function getData(e) {
		setForm({ ...form, [e.target.name]: [e.target.value] });
		console.log(form);

	}

	function validar() {
		if (form.nome === "" || form.email === "")
			alert("Preencha todos os campos");
		else {
			var templateParams = {
				from_name: form.nome,
				from_sobrenome: form.sobrenome,
				from_email: form.email,
				from_mensagem: form.mensagem
			};

			emailjs.send(
				"service_0t7ah1a",
				"template_te6s3xb",
				templateParams,
				"SMgydBVs1wp8cvlQt"

			)
				.then(
					(response) => {
						console.log('SUCCESS!', response.status, response.text);
						alert('Email enviado com sucesso');
					},
					(error) => {
						console.log('FAILED...', error);
						alert('Erro ao enviar email');
					},
				);
			emailjs.send(service_0t7ah1a, template_te6s3xb, templateParams, SMgydBVs1wp8cvlQt);
		}
	}

	return (
		<section className={css.bg}>
				<div className={css.container}>
				<h1 >Entre em Contato Conosco</h1>
					<div className={css.formContainer} data-aos="zoom-in" >
					<form className={css.form} >
				<label htmlFor="">Digite o seu nome*</label>
				<input type="text" name="nome" onChange={getData} />

				<label htmlFor="">Digite o seu sobrenome*</label>
				<input type="text" name="sobrenome" onChange={getData}/>

				<label htmlFor="">Digite o seu e-mail*</label>
				<input type="email" name="email" onChange={getData} />

				<label htmlFor="">Digite sua mensagem*</label>
				<input type="text" name="mensagem" onChange={getData} />

				<input type="button" value="Enviar" onClick={validar} />
			</form>
					</div>
					<div className={css.contactContainer}>
				
						<p className={css.description}>
							Tem alguma dúvida sobre nossos produtos? Quer mais informações?
							Preencha o formulário e entraremos em contato com você
						</p>
						<div className={css.contactInfo}>
							<div className={css.contactItem}>
							<FaPhoneVolume />
								<span>+553490000-000</span>
							</div>
							<div className={css.contactItem}>
							<MdMarkEmailRead />
								<span>tania@gmail.com</span>
							</div>
							<div className={css.contactItem}>
							<FaLocationDot />
								<span>Uberlândia MG 38410-288 | Maria de Paulo 43 | Jardim Sol</span>
							</div>
						</div>
					</div>
				</div>
		</section>
	);
}

export default Secao_Form;