import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"
import Apartments from "../components/Apartments"

const Catalog = () => {
    return(
        <>
            <Header/>
            <Content>
                <Apartments/>
            </Content>
            <Footer/>
        </>
    )
}

export default Catalog