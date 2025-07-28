import { useState } from 'react';
import './NavSistema.css';

export default function NavSistema(){
    const [aberto, setAberto] = useState(false);

    function changeNav(){
        setAberto(!aberto);
    }

    return (
        <div id="navSistema" className={aberto ? 'open' : ''}>
            <div className="navSistema-content">
                <div className="user">
                    <div className="img">
                        <img src="../../public/images/perfil.png" alt="Imagem de perfil" />
                    </div>
                    <p className='user-infos'>
                        <span>EDIFICIO ALAN</span>
                        <span>Síndico</span>
                    </p>
                </div>
           
                <ul className='side-items'>
                    <li className='side-item'>
                        <a href="/registros">
                            <span className="material-symbols-outlined">folder</span>
                        </a>
                        <p className="item-description">Registros</p>
                    </li>
                    <li className='side-item'>
                        <a href="/prestacao">
                            <span className="material-symbols-outlined">assignment_add</span>
                        </a>
                        <p className="item-description"> Prestação</p>
                    </li>
                </ul>
            
                <button className={aberto ? 'open-btn' : 'close-btn'} onClick={changeNav}>
                    <span className="material-symbols-outlined">
                        {aberto ? 'chevron_backward' : 'chevron_forward'}
                    </span>
                </button>
            </div>
           <hr className='navSistema-hr'/>
            <div className="logout">
                <a className='logout-btn' href="/login">
                    <span className="material-symbols-outlined">logout</span>
                    <p className="item-description">Sair</p>
                </a>
            </div>
        </div>
    )
}
