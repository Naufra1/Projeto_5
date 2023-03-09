import Accordion from "react-bootstrap/Accordion";
import "./Accordion.css";

function Resposta() {
  return (
    <Accordion flush>
      <Accordion.Item className="teste" eventKey="0">
        <Accordion.Header>O que é Covid 19?</Accordion.Header>
        <Accordion.Body>
          É a sigla da doença. O nome foi retirado das palavras “corona”,
          “vírus” e “doença”, com 2019 representando o ano em que surgiu (o
          surto foi relatado à OMS em 31 de dezembro).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Quando chegou no Brasil?</Accordion.Header>
        <Accordion.Body>
          O primeiro caso no país foi o de um paciente em São Paulo, que voltou
          de viagem à Itália. O Ministério da Saúde fez o anúncio em 26 de
          fevereiro de 2020.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Quais são os principais sintomas? </Accordion.Header>
        <Accordion.Body>
          A Covid-19 é similar a uma gripe. Geralmente é uma doença leve a
          moderada, mas alguns casos podem ficar graves. Os sintomas mais comuns
          são: febre persistente, tosse e dificuldade para respirar.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Como ocorre a transmissão?</Accordion.Header>
        <Accordion.Body>
          Por gotículas respiratórias (espirro ou tosse), contato direto com
          secreções (catarro, coriza), contato próximo (até 2 metros de
          distância) com alguém com sintomas ou por contato com objetos e
          superfícies contaminados.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          Como saber se você é suspeito de ter a covid 19?
        </Accordion.Header>
        <Accordion.Body>
          Se você tem gripe (febre, sintomas respiratórios como tosse, dor de
          garganta, dor de cabeça, dores no corpo), nesse momento há a suspeita
          de Covid-19.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          Como me prevenir contra o coronavírus ?
        </Accordion.Header>
        <Accordion.Body>
          Lave as mãos com água e sabão por pelo menos 20 segundos, várias vezes
          ao dia. A limpeza pode ser feita também com álcool gel 70%, desde que
          a mão não tenha sujeira aparente. Cubra o nariz e a boca ao espirrar
          ou tossir.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>
          O álcool em gel substitui a lavagem com água e sabão ?
        </Accordion.Header>
        <Accordion.Body>
          O álcool em gel pode substituir a lavagem das mãos com água e sabão,
          exceto quando houver sujeira visível.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>E serve que tipo de álcool ?</Accordion.Header>
        <Accordion.Body>
          O álcool deve ser a 70% com algum tipo de hidratante para não ressecar
          as mãos: pode ser em gel, glicerinado ou espuma.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>
          O coronavírus pode contaminar objetos e superfícies ?
        </Accordion.Header>
        <Accordion.Body>
          O grupo do coronavírus tem a capacidade de sobreviver fora do corpo
          humano e, por isso, os objetos e as superfícies não higienizados
          também podem ser fontes de contaminação. Lave as mãos após tocar em
          pontos como maçanetas e corrimãos, e não compartilhe objetos de uso
          pessoal, como telefones, copos, garrafas, talheres e pratos. Além
          disso, é importante ressaltar que os espaços coletivos devem estar
          sempre bem ventilados.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>Como devo limpar a superfície ?</Accordion.Header>
        <Accordion.Body>
          Elas devem ser limpas com desinfetantes aprovados pela Anvisa, álcool
          70% ou solução composta de água com hipoclorito de sódio a 1%.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Resposta;
