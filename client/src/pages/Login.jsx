import { Footer } from "../components/Footer"
import './Login.css'

export default function Login(){
    return(
        <div className="login-page">
            <div className="navbar-login">
                <div className="navbar-login-container">
                    <div className="navbar-login-logo">
                        <a href="/">ContaClara</a>
                    </div>
                </div>
            </div>
            <div className="voltar">
                <a href="/"><span class="material-symbols-outlined">arrow_back</span>Voltar</a>
            </div>
            <div className="login-cadastro">
                <div className="cadastro-section">
                    <h2 className="cadastro-section-titulo">Cadastre-se</h2>
                    <form action="" method="post">

                        <label htmlFor="emailCadastroId">
                            <p>E-MAIL</p>
                            <input type="email" name="email" id="emailCadastroId"/>
                        </label>
                        <label htmlFor="passwordCadastroId">
                            <p>SENHA</p>    
                            <input type="password" name="password" id="passwordCadastroId"/>
                        </label>
                        <button className="button-login-cadastro" type="submit">CRIAR</button>
                    </form>
                </div>
                <div className="login-section">
                    <h2 className="login-section-titulo">Entrar</h2>
                    <form action="" method="post">

                        <label htmlFor="emailLoginId">
                            <p>E-MAIL</p>
                            <input type="email" name="email" id="emailLoginId"/>
                        </label>
                        <label htmlFor="passwordLoginId">
                            <p>SENHA</p>    
                            <input type="password" name="password" id="passwordLoginId"/>
                        </label>
                        <button className="button-login-cadastro" type="submit">ENTRAR</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}