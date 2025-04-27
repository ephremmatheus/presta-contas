import { useState } from "react"
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './Nav.css';

/*assim q carregar verifica tamanho e poe */
export const Nav = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    function handleClick(){
        setClick(!click);
    }

    function closeMobileMenu(){
        setClick(false);
    }

    function showButton() {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    }

    window.onload = function(){
        showButton()
    }

    window.addEventListener('resize', showButton);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/" onClick={closeMobileMenu}>teste</Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <span className={"material-symbols-outlined"} >
                        {click? "close": "menu"}
                    </span>
                </div>
                <ul className={click? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" onClick={closeMobileMenu} className="nav-links">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" onClick={closeMobileMenu} className="nav-links">Funcionalidades</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" onClick={closeMobileMenu} className="nav-links">Demostração</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" onClick={closeMobileMenu} className="nav-links">Contato</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" onClick={closeMobileMenu} className="nav-links-mobile">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" onClick={closeMobileMenu} className="nav-links-mobile-cadastrar">Cadastre-se</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>CADASTRE-SE</Button>}
            </div>
        </nav>
    )
}