import "../style.css"
import "../script.js"

let LandingPage = () => {
    return(
        <div>
            <section className="homes" id="home">
        <div className="home-content">
            <h1>Hi, I'm <span>Fahad</span></h1>
            <div className="text-animate">
                <h3>Frontend Developer</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio fugit eius ipsa, delectus iure ea tempora molestiae? Magnam vel quidem, enim in sed laborum!</p>
            <div className="btn-box">
                <a href="#" className="btn">Hire Me</a>
                <a href="#" className="btn">Let's Talk</a>
            </div>
        </div>   
        <div className="about-img">
         <img src="/myselfimg.jpg" alt="img" />
         <span className="circle-spin"></span>
        </div> 
         
      </section>
      <div className="home-sci">
        <img src="/instagram.svg" alt="insta" width={60}/>
        <img src="/linkedin.svg" alt="insta" width={60}/>
        <img src="/twitter.svg" alt="insta" width={60}/>

       </div>
        </div>
    )
}

export default LandingPage