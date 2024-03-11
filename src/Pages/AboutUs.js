import React from "react";
import "../Styles/Styles.css";

function AboutUs() {
  return (
    <div className="container my-4" id="aboutus">
      <div className="row align-items-center g-4 my-4">
        <div className="col-lg-6 col-md-12">
          <div className="me-xl-8">
            <h1 className="mb-3">About Concrete Mitra</h1>
            <p className="about-info mb-6 me-xl-6">
              Mitra Enterprises is a trusted name in the field of industrial
              solutions, specializing in the distribution of high-quality
              equipment for various industrial applications. With a commitment
              to excellence and customer satisfaction, we have established
              ourselves as a reliable partner for businesses seeking top-notch
              products and services. Founded with a vision to cater to the
              evolving needs of industries, Mitra Enterprises has grown
              steadily, leveraging our expertise and industry knowledge to meet
              the demands of a dynamic market. Our extensive range of offerings
              includes industrial vibrators and vibratory equipment from Uras
              Techno - Japan, and Exen Corporation - Japan as well as Electro
              Magnetic Hammers from Nippon Magnetics Inc. Japan. At Mitra
              Enterprises, we pride ourselves on our ability to deliver tailored
              solutions that address the unique requirements of our clients. Our
              team of professionals is dedicated to providing exceptional
              service, technical expertise, and reliable products that meet the
              highest standards of quality and performance. As we continue to
              expand our reach and enhance our product portfolio, we remain
              committed to our core values of integrity, innovation, and
              customer focus. We look forward to serving you and contributing to
              your success in the industrial sector.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 ">
          <img
            src="https://source.unsplash.com/518x518/?city,public"
            alt="career"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
