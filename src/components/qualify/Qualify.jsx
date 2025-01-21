import { useState } from 'react';
import '../../styles/qualify.sass'

function Qualify() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualify section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personel journey</span>

        <div className="qualify-container">
            <div className="qualify-tabs">
                <div className={toggleState === 1 ? "qualify-button qualify-active button--flex" : "qualify-button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualify-icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualify-button qualify-active button--flex" : "qualify-button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualify-icon"></i> Experience
                </div>
            </div>

            <div className="qualify-sections">
                <div className={toggleState === 1 ? "qualify-content qualify-content-active" : "qualify-content"}>
                    <div className="qualify-data">
                        <div>
                            <h3 className="qualify-title">Web Design</h3>
                            <span className="qualify-subtitle">São Caetano do Sul</span>
                            <div className="qualify-calendar">
                                <i className="uil uil-calendar-alt"></i>2016 - 2018
                            </div>
                        </div>

                        <div>
                            <span className="qualify-rounder"></span>
                            <span className="qualify-line"></span>
                        </div>
                    </div>

                    <div className="qualify-data">
                        <div></div>

                        <div>
                            <span className="qualify-rounder"></span>
                            <span className="qualify-line"></span>
                        </div>

                        <div>
                            <h3 className="qualify-title">Systems analysis and Development</h3>
                            <span className="qualify-subtitle">Uniasselvi</span>
                            <div className="qualify-calendar">
                                <i className="uil uil-calendar-alt"></i>2021 - Present
                            </div>
                        </div>
                    </div>

                    <div className="qualify-data">
                        <div>
                            <h3 className="qualify-title">Web Development</h3>
                            <span className="qualify-subtitle">CC50 - Harvard</span>
                            <div className="qualify-calendar">
                                <i className="uil uil-calendar-alt"></i>2022 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualify-rounder"></span>
                            <span className="qualify-line"></span>
                        </div>
                    </div>

                    <div className="qualify-data">
                        <div></div>

                        <div>
                            <span className="qualify-rounder"></span>
                            <span className="qualify-line"></span>
                        </div>

                        <div>
                            <h3 className="qualify-title">Blockchain Development</h3>
                            <span className="qualify-subtitle">NearX</span>
                            <div className="qualify-calendar">
                                <i className="uil uil-calendar-alt"></i>2024 - Present
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualify-content qualify-content-active" : "qualify-content"}>
                    <div className="qualify-data">
                        <div>
                            <h3 className="qualify-title">Mobile Development</h3>
                            <span className="qualify-subtitle">Voluntary</span>
                            <div className="qualify-calendar">
                                <i className="uil uil-calendar-alt"></i>2022 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualify-rounder"></span>
                            <span className="qualify-line"></span>
                        </div>
                    </div>

                    <div className="qualify-data">
                        <div></div>

                        <div>
                            <span className="qualify-rounder"></span>
                            <span className="qualify-line"></span>
                        </div>

                        <div>
                            <h3 className="qualify-title">Web Development</h3>
                            <span className="qualify-subtitle">Babytimee.com</span>
                            <div className="qualify-calendar">
                                <i className="uil uil-calendar-alt"></i>2024 - Present
                            </div>
                        </div>
                    </div>

                    <div className="qualify-data">
                        <div>
                            <h3 className="qualify-title">Smart Contracts Development</h3>
                            <span className="qualify-subtitle">Voluntary</span>
                            <div className="qualify-calendar">
                                <i className="uil uil-calendar-alt"></i>2024 - 2025
                            </div>
                        </div>

                        <div>
                            <span className="qualify-rounder"></span>
                            <span className="qualify-line"></span>
                        </div>
                    </div>

                    <div className="qualify-data">
                        <div></div>

                        <div>
                            <span className="qualify-rounder"></span>
                            <span className="qualify-line"></span>
                        </div>

                        <div>
                            <h3 className="qualify-title">MicroSaaS Development</h3>
                            <span className="qualify-subtitle">Clicktripp.com</span>
                            <div className="qualify-calendar">
                                <i className="uil uil-calendar-alt"></i>2024 - Present
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualify
