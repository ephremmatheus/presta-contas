import { Outlet } from 'react-router-dom';
import NavSistema from '../components/NavSistema';
import './Layout.css'

export default function Layout(){
    return(
        <div style={{ display: 'flex' }}>
            <NavSistema />
            <main>
                <Outlet />
            </main>
        </div>
    )
}