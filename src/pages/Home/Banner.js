import { Link } from 'react-router-dom'
import Building from '../../img/icon/building_icon.svg'
import House from '../../img/icon/house_icon.svg'

const Banner = () => {
    return(
        <div className="banner">
            <div className='banner-backdrop'></div>
            <div className="container">
                <div className="banner-title">
                    <h1>Жилой комплекс у реки с видом на море</h1>
                    <p>Живите так, как другие мечтают отдыхать!</p>
                </div>
                <div className="infrastructure">
                    <div className="infrastructure-info">
                        <img src={Building} alt="" />
                        <div className='info-wrapper'>
                            <p>Потрясающие виды на леса национального парка сочи и море</p>
                        </div>                
                    </div>
                    <div className="infrastructure-info">
                        <img src={House} alt="" />
                        <div className='info-wrapper'>
                            <p>Объекты образования и магазины в пешей доступности</p>
                        </div>
                    </div>
                    <div className="infrastructure-info">
                        <img src={Building} alt="" />
                        <div className='info-wrapper'>
                            <p>Благоустроенная и безопасная территория с современном дизайном</p>
                        </div>
                    </div>
                </div>
                <div className='banner-catalog'>
                    <p>Посмотреть в каталоге:</p>
                    <Link to={"/apartments?type=flat"} className='btn btn-green'>Квартиры</Link>
                    <Link to={"/apartments?type=apartment"} className='btn btn-green'>Апартаменты</Link>
                </div>
            </div>
        </div>
    )
}

export default Banner