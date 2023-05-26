import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination,Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Rinna",
    review:
      "But that doesn’t mean you can’t do anything at all. These peer-to-peer review sites are often one of the first places a potential customer looks when considering a purchase, so ensuring you have some positive reviews on each is important. ",
  },
  {
    avatar: AVTR2,
    name: "PRIYA",
    review:
      "But that doesn’t mean you can’t do anything at all. These peer-to-peer review sites are often one of the first places a potential customer looks when considering a purchase, so ensuring you have some positive reviews on each is important. ",
  },
  {
    avatar: AVTR3,
    name: "RIYA",
    review:
      "But that doesn’t mean you can’t do anything at all. These peer-to-peer review sites are often one of the first places a potential customer looks when considering a purchase, so ensuring you have some positive reviews on each is important. ",
  },
  {
    avatar: AVTR4,
    name: "KIA",
    review:
      "But that doesn’t mean you can’t do anything at all. These peer-to-peer review sites are often one of the first places a potential customer looks when considering a purchase, so ensuring you have some positive reviews on each is important. ",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonals</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar 1" />
              </div>
              <h5 className="clinet__name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
