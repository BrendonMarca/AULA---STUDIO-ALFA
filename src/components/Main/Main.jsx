import './Main.css'

function Main(){
    return(
        <main className='main'>
            <section className='hero'>
                <h1>Criamos sites que funcionam</h1>
                <p>Layouts responsivos, rapidos e acessiveis para o seu negocio crescer na web.</p>
            <div className='hero-buttons'>
                <a href="#orçamento" className='btn-primary'>Peça um orçamento</a>
                <a href="#portfolio" className='btn-secondary'>Ver portfólio</a>
            </div>
            </section>
            <section className='servico'>
                <h2>Nossos serviços</h2>

                <div className='servicos-grid'>
                    <div className='servico-card'>
                        <span>🤮</span>
                        <h3>Design de interface</h3>
                       <p>Telas claras, pensadas para o usuário</p> 
                    </div>

                    <div className='servico-card'>
                        <span>😍</span>
                        <h3>Responsividade</h3>
                       <p>O mesmo site em qualquer tela</p> 
                    </div>

                    <div className='servico-card'>
                        <span>👌</span>
                        <h3>Performance</h3>
                       <p>Páginas leves que carregam rápido.</p> 
                    </div>
                </div>
            </section>
        </main>
    
    )
}

export default Main