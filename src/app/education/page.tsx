import Header from "../header/page"
import Footer from "../footer/page"
import "../style.css"
import "../script.js"

let Section = () => {
    return(
        <div>
            <Header></Header>

            <section className="education" id="education">
        <h2 className="heading">My <span>Journey</span></h2>
        <div className="education-row">
            <div className="education-column">
                <h3 className="title">Education</h3>
                <div className="education-box">
                    <div className="education-content">
                        <div className="content">
                            <div className="year"><img src="/calender.svg" alt="calender" width={20}/>2012 - 2022</div>
                            <h3>Matriculation-Degree</h3>
                            <p>I Pass My Matriculation Degree From Hawk Grammar School In 2022 and My Subject Is Computer Science With a Percentage Of 86.67%</p>
                        </div>
                    </div>

                    <div className="education-content">
                        <div className="content">
                            <div className="year"><img src="/calender.svg" alt="calender" width={20}/>2022 - 2024</div>
                            <h3>Intermediate-Degree</h3>
                            <p>I Pass My Intermediate Degree From Govt Superior Science College In 2024 and My Subject Is Computer Science With a Percentage Of 62.18%</p>
                        </div>
                    </div>

                    {/* <div className="education-content">
                        <div className="content">
                            <div className="year"><i className='bx bxs-calendar'></i>2012 - 2022</div>
                            <h3>Matriculation-Degree</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur nobis assumenda at praesentium iure eligendi quos placeat tenetur dolores.</p>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className="education-column">
                <h3 className="title">Experince</h3>
                <div className="education-box">
                    <div className="education-content">
                        <div className="content">
                            <div className="year"><img src="/calender.svg" alt="calender" width={20}/>2023 Dec - 2024 March</div>
                            <h3>Bano-qabil 2.0 Program</h3>
                            <p>I Recently Jion Bano-qabil 2.0 Program In Dec 2023 Where i Learn Html Css and Basic Of Javascript and i learn a lot of There i build a lot of projects there</p>
                        </div>
                    </div>

                    <div className="education-content">
                        <div className="content">
                            <div className="year"><img src="/calender.svg" alt="calender" width={20}/>2014 Feb - 2024 Present</div>
                            <h3>GIAIC Quater 1 Program</h3>
                            <p>I Pass my Exam In GIAIC Test Program and Select as a Student in GIAIC Quater 1 Program Where i learned Typescript Language.</p>
                        </div>
                    </div>

                    {/* <div className="education-content">
                        <div className="content">
                            <div className="year"><i className='bx bxs-calendar'></i>2012 - 2022</div>
                            <h3>Web Developer-Company</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur nobis assumenda at praesentium iure eligendi quos placeat tenetur dolores.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
    <Footer></Footer>
        </div>
    )
}

export default Section