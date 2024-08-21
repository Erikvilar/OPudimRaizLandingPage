import css from './SecaoForm.module.css'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SecaoForm=  ()=>{
const [form, setForm] = useState({nome: '', email: '', mensagem:''});		
const getData = (e)=>{
		setForm ({...form, [e.target.name]: [e.target.value]});
		console.log(form);

}

function validar(){
	if (form.nome === "" || form.email === "")
		alert("Preencha todos os campos");
	else {
		var templateParams = {
			from_name: form.nome,
			from_sobrenome: form.sobrenome,
			from_email: form.email,
			from_mensagem: form.mensagem
		  };

		  emailjs.send (
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
	<section class={css.bg}>
		<div className={css.container}>
		<h2>Entre em Contato Conosco</h2>
		<p>Tem alguma dúvida sobre nossos produtos? Quer mais informações? <br/> Preencha o formulário abaixo e entraremos em contato com você<br/></p>
		<div className={css.ComponentForm}>
		<form className={css.form}>
			<label htmlFor="">Nome:</label>
			<input type="text" name="nome" onChange={getData} />

			<label htmlFor="">Sobrenome:</label>
			<input type="text" name="sobrenome" onChange={getData}/>

			<label htmlFor="">Email</label>
			<input type="email" name="email" onChange={getData} />

			<label htmlFor="">Mensagem:</label>
			<input type="text" name="mensagem" onChange={getData} />

			<input type="button" value="Enviar" onClick={validar} />
		</form>
		</div>
		</div>
	</section>
);
 }
export default SecaoForm;