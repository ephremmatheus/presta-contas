import "./Funcionalidades.css";

export const Funcionalidades = () =>{
    return(
        
        <div className="funcionalidades">
            <h2 className="funcionalidade-titulo">Funcionalidades</h2>
            <div className="funcionalidades-container">
                <div className="card armazenamento-mensal">
                    <img src="../../public/images/cloud.png" alt="Cloud" />
                    <h3 className="card-titulo">Armazenamento Mensal</h3>
                    <p className="card-sobre">Registre e organize as prestações de contas de cada mês com histórico acessível.</p>
                </div>

                <div className="card resumo-financeiro">
                    <img src="../../public/images/bar-graph.png" alt="Gráfico" />
                    <h3 className="card-titulo">Resumo Financeiro</h3>
                    <p className="card-sobre">Acompanhe entradas, saídas e saldo com gráficos claros e interativos.
                    </p>
                </div>

                <div className="card gera-pdf">
                    <img src="../../public/images/document.png" alt="Documento" />
                    <h3 className="card-titulo">Geração de PDF</h3>
                    <p className="card-sobre">Exporte documentos mensais com um clique e facilite assembleias e auditorias.</p>
                </div>

                <div className="card classifica-gastos">
                    <img src="../../public/images/tags.png" alt="Tag" />
                    <h3 className="card-titulo">Classificação de Gastos</h3>
                    <p className="card-sobre">Categorize cada despesa e saiba exatamente onde o dinheiro está sendo usado.</p>
                </div>

                <div className="card acesso-seguro">
                    <img src="../../public/images/lock.png" alt="Cadeado/Segurança" />
                    <h3 className="card-titulo">Acesso Seguro</h3>
                    <p className="card-sobre">Controle de permissões para síndico, administradora e moradores.</p>
                </div>

            </div>
        </div>
    )
}