import "../style.css"
import "../script.js"
import YourComponent from "../script.js";


let Header = () => {
    return(
        <header className="header">
          <a href="#" className="logo">Fahad</a>
             <div className="bx bx-menu" id="menu-icon"><img id="menu-icon" src="/threeline.svg" alt="img" width={50} /></div>
         <nav className="navbar">
            <a href="/home" className="active">Home</a>
            <a href="/about">About</a>
            <a href="/education">Education</a>
            <a href="/skills">Skills</a>
            <a href="/contact">Contact</a>

            <span className="active-nav"></span>
         </nav>
       </header>
    )
}

export default Header