import { Link, useParams } from "react-router-dom"
import DrawingCard from "../img/product/product-card/drawing-card.png"
import { useState } from "react"
import data from "../data/data.json"

const Product = () => {

    const {id} = useParams()

    const [apartment, setApartment] = useState(data.data.find((item) => item.id == id))

    return(
        <div className="container">
            <div className="product">
                <div className="product__img">
                    <img src={DrawingCard} alt="" />
                </div>
                <div className="product-info">
                    <div className="product-info__title">
                        <h3>{apartment.name}</h3>
                    </div>
                    <div className="product-info-data">
                        <div className="product-card-data">
                            <p>Корпус</p>
                            <div className="product-description">3</div>
                        </div>
                        <div className="product-card-data">
                            <p>Кол-во комнат</p>
                            <div className="product-description">{apartment.rooms}</div>
                        </div>
                        <div className="product-card-data">
                            <p>Этаж</p>
                            <div className="product-description">{apartment.floor}</div>
                        </div>
                        <div className="product-card-data">
                            <p>Общая площадь</p>
                            <div className="product-description">{apartment.area}</div>
                        </div>
                        <div className="product-card-data">
                            <p>Жилая площадь</p>
                            <div className="product-description">21.1 м²</div>
                        </div>
                        <div className="product-card-data">
                            <p>Сан. узел</p>
                            <div className="product-description">Совмещённый</div>
                        </div>
                    </div>
                    <div className="product-info__price">
                        <p>Цена</p>
                        <div className="product-info__sum">{apartment.price} &#8381;</div>
                    </div>
                    <Link to={"#"} className='btn btn-green'>Забронировать</Link>
                </div>
            </div>
        </div>
    )
}

export default Product