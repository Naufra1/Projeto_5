import Button from "./FormParts/Button";
import Input from "./FormParts/Input";

function FormContato() {
  return (
    <div className="form">
      <div className="form-title">
        <h2>Entre em Contato</h2>
      </div>
      <form>
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
    </div>
  );
}

export default FormContato;
