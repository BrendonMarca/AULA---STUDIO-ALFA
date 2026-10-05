import "./Main.css";
import ServicoCard from "../ServicoCard/ServicoCard";

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h1>Criamos sites que funcionam</h1>
        <p>
          Layouts responsivos, rapidos e acessiveis para o seu negocio crescer
          na web.
        </p>
        <div className="hero-buttons">
          <a href="#orçamento" className="btn-primary">
            Peça um orçamento
          </a>
          <a href="#portfolio" className="btn-secondary">
            Ver portfólio
          </a>
        </div>
      </section>
      <section className="servico">
        <h2>Nossos serviços</h2>

        <div className="servicos-grid">
          <ServicoCard
            titulo="Design de interface"
            icone="🤢"
            descricao="Telas claras, pensadas para o usuário"
          />
          <ServicoCard
            titulo="Responsividade"
            icone="😻"
            descricao="O mesmo site em qualquer tela"
          />
          <ServicoCard
            titulo="Performance"
            icone="👌"
            descricao="Páginas leves que carregam rápido"
          />
        </div>
      </section>
    </main>
  );
}

export default Main;
