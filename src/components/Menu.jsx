'use client'
import Link from "next/link";

export default function Menu() {
    function menuShow() {
        let menuMobile = document.querySelector('.mobile-menu');
        let header = document.querySelector('header');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            document.querySelector('.icon').src = "/img/menu/menu_white.svg";
            header.style.borderBottom = '1px solid #34363E';
        } else {
            menuMobile.classList.add('open');
            document.querySelector('.icon').src = "/img/menu/close_white.svg";
            header.style.borderBottom = 'none';
        }
    }

    return (
        <header>
            <nav className="nav-bar">
                <div className="nav-list">
                    <ul>
                        <li className="nav-item" id="logo-item"><a href="#" className="nav-link" id="logo">Porto</a></li>
                        <li className="nav-item"><Link href={'/'} className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link href={'/vistoria'} className="nav-link">Vistoria</Link></li>
                        <li className="nav-item"><Link href={'/seguros'} className="nav-link">Seguros</Link></li>
                        <li className="nav-item"><Link href={'/integrantes'} className="nav-link">Integrantes</Link></li>
                        <li className="nav-item"><Link href={'/consumir'} className="nav-link">Consumo API</Link></li>
                    </ul>
                </div>
                <div className="login-button">
                    <button><Link href={'/login'}>Login</Link></button>
                </div>

                <div className="mobile-menu-icon">
                    <button onClick={menuShow}>
                        <img className='icon' src={"/img/menu/menu_white.svg"} alt="" />
                    </button>
                </div>
            </nav>
            <div className="mobile-menu">
                <ul>
                    <li className="nav-item"><Link href={'/'} className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link href={'/vistoria'} className="nav-link">Vistoria</Link></li>
                    <li className="nav-item"><Link href={'/seguros'} className="nav-link">Seguros</Link></li>
                    <li className="nav-item"><Link href={'/integrantes'} className="nav-link">Integrantes</Link></li>
                </ul>

                <div className="login-button">
                    <button><Link href={'/login'}>Entrar</Link></button>
                </div>
            </div>
        </header>
    )
}