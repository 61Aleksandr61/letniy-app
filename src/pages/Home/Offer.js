import { Link } from 'react-router-dom'
import Family from '../../img/happy-family.png'

const Offer = () => {
    return(
        <div className="offer">
            <div className="container">
                <div className="offer-container">
                    <div className='offer__img'>
                        <img src={Family} alt="" />
                    </div>
                    <div className='offer__discount'>
                        <h3>Скидка 10% на квартиры в 4 - ом корпусе</h3>
                        <p className='text-md'>Жить здесь — это жить на полную в обществе современных стильных и свободных людей, которые хотят путешествовать, общаться и развиваться. Это прекрасный круглогодичных отдых для детей. Именно отдых, а не среда для жизни</p>
                        <div className='offer-catalog'>
                            <p>Посмотреть в каталоге:</p>
                            <Link to={"/apartments?type=flat"} className='btn btn-green'>Квартиры</Link>
                            <Link to={"/apartments?type=apartment"} className='btn btn-green'>Апартаменты</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer