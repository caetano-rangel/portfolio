import '../../styles/testimonials.sass'
import { Data } from "./Data"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper/modules'

import "swiper/css"
import "swiper/css/pagination"


function Testimonials() {
  return (
    <section className="testimonial container section">
        <h2 className="section_title">My clients say</h2>
        <span className="section_subtitle">Testimonial</span>

        <Swiper className="testimonial-container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        >
            {Data.map(({id, image, title, description}) => {
                return (
                    <SwiperSlide className="testimonial-card" key={id}>
                        <img src={image} className='testimonial-img' />

                        <h3 className="testimonial-name">{title}</h3>
                        <p className="testimonial-description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Testimonials
