import Header from "../../components/Header"
import Content from "../../components/Content"
import Footer from "../../components/Footer"
import Banner from "./Banner"
import Offer from "./Offer"
import Complex from "./Complex"

const Home = () => {
    return(
        <>
            <Header/>
            <Content>
                <Banner/>
                <Offer/>
                <Complex/>
            </Content>
            <Footer/>
        </>
    )
}

export default Home