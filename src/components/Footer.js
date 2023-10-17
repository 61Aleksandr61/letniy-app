import { Link } from 'react-router-dom'
import Logo from '../img/logo.svg'
import Vk from '../img/icon/vk.svg'
import Ok from '../img/icon/ok.svg'
import Telegram from '../img/icon/telegram.svg'
import Youtube from '../img/icon/youtube.svg'
import Yandex from '../img/icon/yandex.svg'

const Footer = () => {
    return(
        <div className='footer'>
            <div className='container'>
                <div className='footer-wrapper'>
                    <Link to={"/"} className="footer-logo">
                        <img src={Logo} alt=""/>
                    </Link>
                    <div className='footer-social'>
                        <p>Наши соц сети</p>
                        <div className="footer-social-icon">
                            <Link to={"#"} className="icon-social-vk link">
                                <img src={Vk} alt="vkontakte"/>
                            </Link>
                            <Link to={"#"} className="icon-social-ok link">
                                <img src={Ok} alt="odnoklassniki"/>
                            </Link>
                            <Link to={"#"} className="icon-social-telegram link">
                                <img src={Telegram} alt="telegram"/>
                            </Link>
                            <Link to={"#"} className="icon-social-youtube link">
                                <img src={Youtube} alt="youtube"/>
                            </Link>
                            <Link to={"#"} className="icon-social-yandex link">
                                <img src={Yandex} alt="yandex"/>
                            </Link>
                        </div>
                    </div>
                    <div className='confidentiality'>
                        <p>© 2022. Застройщик ООО «СЗ Громитус»</p>
                        <Link to={"#"} className='link'>Политика конфедециальности</Link>
                    </div>
                    <div className='footer-phones'>
                        <Link to={"tel:+78126059146"} className="footer-phone-link link">+7 (812) 605-91-46</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer