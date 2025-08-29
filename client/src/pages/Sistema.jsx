import './Sistema.css';

export default function Sistema(){
    return(
        <div className='sistema'>
            <div className="informacoes-sistema">
                <h1>Bem vindo, usuario!</h1>
                <p>use a barra de navegação ao lado para navegar pelo sistema!</p>
            </div>
            <div className="img-sistema">
                <img src="../../public/images/navegacao.png" alt="icone de navegação" />
            </div>
        </div>
    )
}