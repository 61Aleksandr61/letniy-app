import { useEffect, useState, useRef } from "react"
import Select from 'react-select'
import Drawing from "../img/product/drawing.png"
import { Link, useSearchParams } from "react-router-dom"
import ReactSlider from "react-slider"
import data from "../data/data.json"


const apartmentsType = [
    { value: 'all', label: 'Все' },
    { value: 'flat', label: 'Квартира' },
    { value: 'apartment', label: 'Апартаменты' }
]

const roominess = [
    { value: 'all', label: 'Все' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' }
]

const Apartments = () => {
    const [apartments, setApartments] = useState(data.data)
    const refData = useRef(data.data)

    const [selectedType, setSelectedType] = useState(null)

    const [selectedRoominess, setSelectedRoominess] = useState(null)

    const [diapasonPrice, setDiapasonPrice] = useState([6000000, 23000000])
    const [priceFrom, setPriceFrom] = useState(6000000)
    const [priceTo, setPriceTo] = useState(23000000)

    const [diapasonArea, setDiapasonArea] = useState([20, 100])
    const [areaFrom, setAreaFrom] = useState(20)
    const [areaTo, setAreaTo] = useState(100)

    const [floors, setFloors] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

    const [searchParams, setSearchParams] = useSearchParams()

    const handelApartmentsType = (value) => {
        setSelectedType(value)
        searchParams.set("type", value.value)
        setSearchParams(searchParams)
    }

    const handelRoominess = (value) => {
        setSelectedRoominess(value)
    }

    const changeDiapasonPrice = (values, index) => {
        setPriceFrom(values[0])
        setPriceTo(values[1])
    }

    const handlePriceFrom = (value) => {
        setPriceFrom(value * 1)
    }

    const handlePriceTo = (value) => {
        setPriceTo(value * 1)
    }

    const changeDiapasonArea = (values, index) => {
        setAreaFrom(values[0])
        setAreaTo(values[1])
    }

    const handleAreaFrom = (value) => {
        setAreaFrom(value * 1)
    }

    const handleAreaTo = (value) => {
        setAreaTo(value * 1)
    }

    const handelResetFilter = () => {
        setSelectedType(null)
        setSelectedRoominess(null)
        setPriceFrom(diapasonPrice[0])
        setPriceTo(diapasonPrice[1])
        setAreaFrom(diapasonArea[0])
        setAreaTo(diapasonArea[1])
    }

    useEffect(() => {
        setSelectedType(apartmentsType.find((item) => item.value == searchParams.get("type")))
    }, [])

    useEffect(() => {
        let result = refData.current
        if(selectedType && selectedType.value != "all") {
            result = refData.current.filter(apartment => apartment.type == searchParams.get("type"))
        }
        if(selectedRoominess && selectedRoominess.value != "all") {
            result = result.filter(apartment => apartment.rooms == selectedRoominess.value)
        }
        result = result.filter(apartment => apartment.price >= priceFrom && apartment.price <= priceTo)
        result = result.filter(apartment => apartment.area >= areaFrom && apartment.area <= areaTo)
        setApartments(result)
    }, [priceFrom, priceTo, areaFrom, areaTo, selectedType, selectedRoominess])

    return(
        <div className="container">
            <div className="apartments">
                <h2>Каталог квартир</h2>
                <div className="apartments-subtitle">Квартиры без отделок</div>
                <div className="catalog-apartments">
                    <div className="catalog-cards">
                        <div className='row'>
                            {apartments.map((apartment) => (
                                <div className='col' key={apartment.id}>
                                    <div className="product-card">
                                        <Link to={`/apartments/${apartment.id}`} className="product-card-link">
                                            <div className="product-card__img">
                                                <img src={Drawing} alt="" />
                                            </div>
                                            <div className='product-data'>
                                                <div className="product-category">{apartment.name}</div>
                                                <div className="product-card-data">
                                                    <p className="text-md-14">Этаж</p>
                                                    <div className="apartments-description">{apartment.floor}</div>
                                                </div>
                                                <div className="product-card-data">
                                                    <p className="text-md-14">Жил. площадь</p>
                                                    <div className="apartments-description">{apartment.area} м²</div>
                                                </div>
                                                <div className="product-card-data">
                                                    <p className="text-md-14">Кол-во комнат</p>
                                                    <div className="apartments-description">{apartment.rooms}</div>
                                                </div>
                                                <div className="apartments-sum">{apartment.price} &#8381;</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sidebar">
                        <div className="sidebar-title">
                            <div className="text-md">Сортировать</div>
                            <button className="reset-filter btn" onClick={handelResetFilter}>Сбросить</button>
                        </div>
                        <div className="select-filters">
                            <p className="text-md-14">Вид объекта</p>
                            <div className="select-object-type">
                                <Select 
                                    options={apartmentsType} 
                                    className="react-select" 
                                    classNamePrefix="react-select" 
                                    placeholder={"Квартира/апартаменты"}
                                    onChange={handelApartmentsType}
                                    value={selectedType}
                                />
                            </div>
                        </div>
                        <div className="select-filters">
                            <p className="text-md-14">Комнатность</p>
                            <div className="select-roominess">
                                <Select 
                                    options={roominess} 
                                    className="react-select" 
                                    classNamePrefix="react-select" 
                                    placeholder={"Кол-во комнат"}
                                    onChange={handelRoominess}
                                    value={selectedRoominess}
                                />
                            </div>
                        </div>
                        <div className="select-filters">
                            <p className="text-md-14">Стоимость</p>
                            <div className="select-filter-price">
                                <div className="filter-price__input">
                                    <div>
                                        <input type="number" className="form-input" placeholder={"От"} value={priceFrom} onChange={e => handlePriceFrom(e.target.value)}/>
                                    </div>
                                    <p className="text-md">–</p>
                                    <div>
                                        <input type="number" className="form-input" placeholder={"До"} value={priceTo} onChange={e => handlePriceTo(e.target.value)}/>
                                    </div>
                                </div>
                                <ReactSlider
                                    className="horizontal-slider"
                                    thumbClassName="example-thumb"
                                    trackClassName="example-track"
                                    defaultValue={diapasonPrice}
                                    value={[priceFrom, priceTo]}
                                    min={diapasonPrice[0]}
                                    max={diapasonPrice[1]}
                                    ariaLabel={['Lower thumb', 'Upper thumb']}
                                    pearling
                                    onChange={changeDiapasonPrice}
                                />
                            </div>
                        </div>
                        <div className="select-filters">
                            <p className="text-md-14">Площадь, м²</p>
                            <div className="select-filter-price">
                                <div className="filter-price__input">
                                    <div>
                                        <input type="number" className="form-input" placeholder={"От"} value={areaFrom} onChange={e => handleAreaFrom(e.target.value)}/>
                                    </div>
                                    <p className="text-md">–</p>
                                    <div>
                                        <input type="number" className="form-input" placeholder={"До"} value={areaTo} onChange={e => handleAreaTo(e.target.value)}/>
                                    </div>
                                </div>
                                <ReactSlider
                                    className="horizontal-slider"
                                    thumbClassName="example-thumb"
                                    trackClassName="example-track"
                                    defaultValue={diapasonArea}
                                    value={[areaFrom, areaTo]}
                                    min={diapasonArea[0]}
                                    max={diapasonArea[1]}
                                    ariaLabel={['Lower thumb', 'Upper thumb']}
                                    pearling
                                    onChange={changeDiapasonArea}
                                />
                            </div>
                        </div>
                        <div className="select-filters">
                            <p className="text-md-14">Этажи</p>
                            <div className="filter-number-floors">
                                <div className="row">
                                    {floors.map((floor) => (
                                        <div className="col-2" key={floor}>
                                            <button className="btn floor-selection">{floor}</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Apartments