import Beach from '../../img/icon/beach-icon.svg'
import Time from '../../img/icon/time-icon.svg'
import Sum from '../../img/icon/sun-icon.svg'
import Design from '../../img/icon/design-icon.svg'
import Map from '../../img/icon/map-icon.svg'

const Complex = () => {
    return(
        <div className="complex">
            <div className="container">
                <div className="about-complex">
                    <div className="about-complex-left">
                        <div className="about-complex-top">
                            <h2>О ЖК «Летний»</h2>
                            <p className="text-md">Жить здесь — это жить на полную в обществе современных стильных и свободных людей, которые хотят путешествовать, общаться и развиваться. Это прекрасный круглогодичных отдых для детей. Именно отдых, а не среда для жизни</p>
                        </div>
                        <div className="about-complex-bottom">
                            <div className="complex-item">
                                <div className="complex-item__quantity">
                                    7
                                </div>
                                <div className="complex-item__label">
                                    Домов
                                </div>       
                            </div>
                            <div className="complex-item">
                                <div className="complex-item__quantity">
                                    12
                                </div>
                                <div className="complex-item__label">
                                    Этажей
                                </div>
                            </div>
                            <div className="complex-item">
                                <div className="complex-item__quantity">
                                    2278
                                </div>
                                <div className="complex-item__label">
                                    Помещений
                                </div>
                            </div>
                            <div className="complex-item">
                                <div className="complex-item__quantity">
                                    65127
                                </div>
                                <div className="complex-item__label">
                                    Квадратных метров
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-complex-right">
                        <h3>В нашем комплексе:</h3>
                        <div className="about-complex__list">
                            <img src={Beach} alt="" />
                            <div className='md-16'>Пляж в шаговой доступности, обустроенная набережная на территории комплекса</div>
                        </div>
                        <div className="about-complex__list">
                            <img src={Time} alt="" />
                            <div className='md-16'>15 минут до олимпийского парка</div>
                        </div>
                        <div className="about-complex__list">
                            <img src={Sum} alt="" />
                            <div className='md-16'>Подойдет для постоянного проживания холостого человека и пары без детей</div>
                        </div>
                        <div className="about-complex__list">
                            <img src={Design} alt="" />
                            <div className='md-16'>Современнтый дизайн</div>
                        </div>
                        <div className="about-complex__list">
                            <img src={Map} alt="" />
                            <div className='md-16'>20 минут до центра сочи, центральной набережной и морского порта</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Complex