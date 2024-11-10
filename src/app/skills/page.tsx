import "../style.css"
import "../script.js"

let skills = () => {
    return(
        <div>
             <header className="header">
       <a href="#" className="logo">Fahad</a>
       <div className="bx bx-menu" id="menu-icon"></div>
       <nav className="navbar">
          <a href="/home" className="active">Home</a>
          <a href="/about">About</a>
          <a href="/education">Education</a>
          <a href="/skills">Skills</a>
          <a href="/contact">Contact</a>

          <span className="active-nav"></span>
        </nav>
      </header>
            <section className="skills" id="skills">
        <h2 className="heading">My <span>Skills</span></h2>

        <div className="skills-row">
            <div className="skills-column">
                <h3 className="title">Coding Skills</h3>

                <div className="skills-box">
                    <div className="skills-content">
                        <div className="progress">
                            <h3>HTML <span>90%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>

                        <div className="progress">
                            <h3>CSS <span>85%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>

                        <div className="progress">
                            <h3>Javascript <span>55%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>

                        <div className="progress">
                            <h3>Typescript <span>45%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skills-column">
                <h3 className="title">Professional Skills</h3>

                <div className="skills-box">
                    <div className="skills-content">
                        <div className="progress">
                            <h3>Web Design<span>25%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>

                        <div className="progress">
                            <h3>Web Development <span>40%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>

                        <div className="progress">
                            <h3>Gaming <span>95%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>

                        <div className="progress">
                            <h3>Learning <span>75%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer className="footer">
    <div className="footer-text">
        <p>Copyright &copy; 2023 by Fahad Developer | All Rights Reserved</p>
    </div>
</footer>
        </div>
    )
}

export default skills