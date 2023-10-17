import Header from "../components/Header"
import Content from "../components/Content"
import Product from "../components/Product"
import Footer from "../components/Footer"


const Card = () => {
    return(
        <>
            <Header/>
            <Content>
                <Product/>
            </Content>
            <Footer/>
        </>
    )
}

export default Card