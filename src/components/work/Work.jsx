import '../../styles/work.sass'
import Works from './Works'

function Work() {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">Most recent works</span>

        <Works />
    </section>
  )
}

export default Work
