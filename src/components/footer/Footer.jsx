import '../../styles/footer.sass'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container container">
            <h1 className="footer-title">Caetano</h1>

            <ul className="footer-list">
                <li>
                    <a href="#about" className="footer-link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer-link">Portfolio</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer-link">Testimonials</a>
                </li>
            </ul>

            <div className="footer-social">
                <a href="https://instagram.com/caetano_rangel" className="footer-social-link" target='_blank'>
                    <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/caetano-rangel/" className="footer-social-link" target='_blank'>
                    <i className="bx bxl-linkedin"></i>
                </a>
                <a href="https://github.com/caetano-rangel" className="footer-social-link" target='_blank'>
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer-copy">&#169; Caetano - All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
