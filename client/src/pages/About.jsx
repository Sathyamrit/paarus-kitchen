import React from "react";
import "./About.css";

const aboutTitle = <h1 className="about-title">About Paaru's Kitchen</h1>;

const aboutTagline = (
  <p className="about-tagline">
    Bringing Authentic Kannada Nati Cuisine to Tummy Town, Thallaghattapura
  </p>
);

const aboutParagraph1 = (
  <p>
    Paaru's Kitchen was born from a passion to share the rich, rustic flavors of
    Karnataka’s countryside with the city. Our founders (founder_Name), true food
    lovers, wanted to create a space where everyone could experience the warmth
    and authenticity of nati-style biryani, kababs, and traditional home-cooked
    meals.
  </p>
);

const aboutParagraph2 = (
  <p>
    Every dish at Paaru's Kitchen is crafted with care, using fresh, locally
    sourced ingredients and time-honored recipes passed down through generations.
    From our signature Benne Mutton Biryani to our flavorful kababs and Sunday
    specials, we strive to deliver a memorable dining experience that feels like
    home.
  </p>
);

const aboutParagraph3 = (
  <p>
    Whether you’re a fan of spicy, hearty meals or looking to explore the unique
    tastes of Karnataka, Paarus Kitchen welcomes you with open arms and a full
    plate. Join us and discover why we’re Tummy Town’s favorite spot for
    authentic nati cuisine!
  </p>
);

const aboutImage = (
  <div className="about-image-container">
    <img
      src="https://placehold.co/500x500"
      alt="About Paaru's Kitchen"
      className="about-image"
    />
  </div>
);

const About = () => (
  <div className="about-container about-flex">
    <div className="about-main-content">
      {aboutTitle}
      {aboutTagline}
      <div className="about-content">
        {aboutParagraph1}
        {aboutParagraph2}
        {aboutParagraph3}
      </div>
    </div>
    {aboutImage}
  </div>
);

export default About;