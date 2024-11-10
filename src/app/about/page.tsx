import Header from "../header/page"
import Footer from "../footer/page"
import "../style.css"
import "../script.js"

let Section = () => {
    return(
        <div>
           <Header></Header>
           <section className="about" id="about">
              <h2 className="heading">About<span>Me</span></h2>
              <div className="about-img">
                  <img src="/myselfimg.jpg" alt="img" />
                  <span className="circle-spin"></span>
              </div> 
              <div className="about-content">
                 <h3>Frontend Developer!</h3>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem enim perferendis odio aliquid tempora laboriosam cum ducimus voluptatem. Alias, distinctio. Dolores minima sit possimus mollitia magnam! Cum, temporibus fuga? Vitae eaque sit voluptatem similique ullam saepe quidem velit sed quia expedita porro hic obcaecati ipsam ab ipsum, earum dolorem iure?</p>
                 <div className="btn-box btns">
                     <a href="#" className="btn">More...</a>
                 </div>
               </div>
           </section>
           <Footer></Footer>
        </div>
    )
}

export default Section