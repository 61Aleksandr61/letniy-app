import { NavLink, Link } from 'react-router-dom'
import Logo from '../img/logo.svg'
import {useState} from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className='logo-wrapper'>
                        <Link to={"/"} className="header-logo">
                            <img src={Logo} alt=""/>
                        </Link>
                    </div>
                    <div className={`navigation ${isOpen ? "open" : ""}`}>
                        <ul className="navigation__list">
                            <li className="navigation__item">
                                <NavLink to={"/"} className="navigation__link link">Главная</NavLink>
                            </li>
                            <li className="navigation__item">
                                <NavLink to={"/apartments?type=flat"} className="navigation__link link">Квартиры</NavLink>
                            </li>
                            <li className="navigation__item">
                                <NavLink to={"/catalog?type=all"} className="navigation__link link">Подборка квартир</NavLink>
                            </li>
                            {/*<li className="navigation__item">*/}
                            {/*    <Link to={"#"} className="navigation__link link">Акции</Link>*/}
                            {/*</li>*/}
                            <li className="navigation__item">
                                <Link to={"#"} className="navigation__link link">О нас</Link>
                            </li>
                            <li className="navigation__item">
                                <Link to={"#"} className="navigation__link link">Контакты</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='phones'>
                        <div className='phone-number'>
                            <p>Отдел продаж</p>
                            <Link to={"tel:+78126059146"} className="phone-link link">+7 (812) 605-91-46</Link>
                        </div>
                        <div className='phone-btn'>
                            <button className='callback-btn'>Заказать звонок</button>
                        </div>     
                    </div>
                    <svg className="burger-menu" width="24px" height="24px" viewBox="0 0 24 24" fill="none" onClick={() => {setIsOpen(!isOpen)}}>
                        <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Header