import { NavLink, Link } from 'react-router-dom'
import Logo from '../img/logo.svg'

const Header = () => {
    return(
        <div className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className='logo-wrapper'>
                        <Link to={"/"} className="header-logo">
                            <img src={Logo} alt=""/>
                        </Link>
                    </div>                  
                    <div className="navigation">
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
                        <div className='phone-namber'>
                            <p>Отдел продаж</p>
                            <Link to={"tel:+78126059146"} className="phone-link link">+7 (812) 605-91-46</Link>
                        </div>
                        <div className='phone-btn'>
                            <button className='callback-btn'>Заказать звонок</button>
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header