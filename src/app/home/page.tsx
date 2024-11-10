import Header from "../header/page"
import LandingPage from "../landingPage/page"
import Footer from "../footer/page"
import "../style.css"
import "../script.js"

let Home = () => {
    return(
      <div>
        <Header></Header>
        <LandingPage></LandingPage>
        <Footer></Footer>
      </div>
    )
}

export default Home