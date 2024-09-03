import React from "react";
import { Link } from "react-router-dom";  // Make sure to import Link
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="Our Agency Story" subtitle="Check out our company story and work process" />
            <p>Beulah is a premier luxury hotel developed by Afik Construction LTD, an international development and construction company known for its reliability and quality. Operating across Israel, Turkey, Cyprus, Germany, and Greece, Afik Construction LTD leverages its vast experience in the construction industry and its international contacts to initiate and construct exceptional projects like Beulah.</p>
            <p>Afik Construction LTD's commitment to excellence is reflected in the Beulah Hotel, which stands as a testament to superior construction quality and attention to detail. The hotel combines luxurious accommodations with unparalleled service, offering a curated selection of high-end rooms and suites in one of the most sought-after locations.</p>
            <p>Beulah also benefits from the expertise of Beulah Real Estate, a leading real estate firm specializing in luxury residential and commercial properties. Known for its focus on quality, innovation, and client satisfaction, Beulah Real Estate has brought its deep market knowledge and personalized service to the development of Beulah Hotel, ensuring that each guest enjoys a seamless and rewarding experience.</p>
            <p>Whether you're looking for a dream getaway, a lucrative investment, or a prime business location, Beulah is more than just a hotel—it’s a landmark of luxury, quality, and a symbol of exceptional craftsmanship by Afik Construction LTD and Beulah Real Estate.</p>
            <Link to="/about" className="btn2">
              More About Us
            </Link>
          </div>
          <div className="right row">
            <img src={img} alt="About Us" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

