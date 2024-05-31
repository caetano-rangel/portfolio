import { useState } from 'react'
import '../../styles/services.sass'

function Services() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What i offer</span>

        <div className="services-container container grid">
            <div className="services-content">
                <div>
                    <i className="uil uil-web-grid services-icon"></i>
                    <h3 className="services-title">Product <br /> Designer</h3>
                </div>

                <span className="services-button" onClick={() => toggleTab(1)} >View More<i className="uil uil-arrow-right services-button-icon"></i></span>

                <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
                    <div className="services-modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services-modal-close"></i>
                        <h3 className="services-modal-title">Product Designer</h3>
                        <p className="services-modal-description">Service with more than 3 years of experience. Providing 
                        quality work to clients and companies.</p>

                        <ul className="services-modal-services grid">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">I develop the user interface.</p>
                            </li>
                            
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Web page development.</p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">I create ux element interactions.</p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">I will deploy with domain.</p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">I will provide 24/7 support.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services-content">
                <div>
                    <i className="uil uil-arrow services-icon"></i>
                    <h3 className="services-title">Hard <br/> Skills</h3>
                </div>

                <span className="services-button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services-button-icon"></i></span>

                <div className={toggleState === 2 ? "services-modal active-modal" : "services-modal"}>
                    <div className="services-modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services-modal-close"></i>
                        <h3 className="services-modal-title">Hard Skills</h3>
                        <p className="services-modal-description">More than 4 years of experience studying and completing projects. 
                        Always focusing on quality and efficiency.</p>

                        <ul className="services-modal-services grid">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Web development.</p>
                            </li>
                            
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Mobile development.</p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Version control.</p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Information security.</p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Software architecture.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services-content">
                <div>
                    <i className="uil uil-edit services-icon"></i>
                    <h3 className="services-title">Soft <br/> Skills</h3>
                </div>

                <span className="services-button" onClick={() => toggleTab(3)}>View More<i className="uil uil-arrow-right services-button-icon"></i></span>

                <div className={toggleState === 3 ? "services-modal active-modal" : "services-modal"}>
                    <div className="services-modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services-modal-close"></i>
                        <h3 className="services-modal-title">Soft Skills</h3>
                        <p className="services-modal-description">Interpersonal skills that I have the ability to perform on
                         the job.</p>

                        <ul className="services-modal-services grid">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Communication.</p>
                            </li>
                            
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Team work.</p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Problem solving.</p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Critical thinking.</p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Creativity.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
