import { useState } from "react";
import Button from "./FormParts/Button";
import Input from "./FormParts/Input";
import Message from "../Layout/Message";
import Title from "../Parts/Title";

function FormContato() {
  const [mensagem, setMensagem] = useState()
  const [type, setType] = useState()

  function Enviar(e) {
    setMensagem('')
    e.preventDefault()
    
    if(mensagem == '') {
      setMensagem('Mensagem enviada com sucesso.')
      setType('success')
    }
  }

  return (
    <section className="main form">
      <Title titulo='Entre em Contato' />
      {mensagem && <Message type={type} msg={mensagem} />}
      <form onSubmit={Enviar}>
        <div className="form-div">
          <Input
            type="email"
            name="email"
            text="Email:"
            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
            placeholder="Digite o seu email"
          />
          <Input
            type="text"
            name="subject"
            text="Assunto:"
            placeholder="Escreva o assunto"
          />
        </div>
        <textarea className="textArea" name="texto" rows="5"></textarea>
        <Button classButton="button-form" type='submit' text="Enviar" />
      </form>
    </section>
  );
}

export default FormContato;
