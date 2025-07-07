import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 

const mainHeading = <h1 className="heading-1">Welcome to Paaru's Kitchen</h1>;
const subHeading = <p className="desc">Authentic Kannada Nati Cuisine in Tummy Town, Thallaghattapura</p>;

const tagline = <p className="tagline">Kabab and Biryani</p>;
const description = <p className="description">
              At Paaru's Kitchen, we bring the rich flavors of Karnataka’s countryside straight to your plate. Located in the vibrant Tummy Town, Thallaghattapura, our passion is to serve authentic nati-style biryani and kababs, crafted with traditional recipes and the freshest local ingredients.</p>;

const endDesc = <p className="end-desc">Come and visit us today</p>;

const Home = () => {
  return (
    <div className="home">
        <header className="home-header">
            {mainHeading}
            {subHeading}
        </header>

        <div className="home-content">
          <div className="home-content-left">
            {mainHeading}
            {tagline}
            {description}
          </div>
          <div className="home-content-right">
            <img src="images\logo1.png" alt="Paarus Kitchen" className="home-image" />
          </div>
        </div>

        <div className="featured-menu">
          <h1 className="featured-menu-heading">Featured Menu</h1>
          
          <div className="menu-item-list">
            <div className="menu-item">
              <img src="https://placehold.co/200x150" alt="Chicken-Biryani" className="menu-image" />
              <h2 className="menu-title">Chicken Biryani</h2>
              <p className="menu-description">Aromatic rice dish with tender meat and spices.</p>
            </div>
            
            <div className="menu-item">
              <img src="https://placehold.co/200x150" alt="Chicken-Kebab" className="menu-image" />
              <h2 className="menu-title">Chicken Kebab</h2>
              <p className="menu-description">Deep fried marinated chicken meat, bursting with flavor.</p>
            </div>

            <div className="menu-item">
              <img src="https://placehold.co/200x150" alt="Chicken-Chops" className="menu-image" />
              <h2 className="menu-title">Chicken Chops</h2>
              <p className="menu-description">Fried pieces of marinated meat, with gravy like dish.</p>
            </div>

            <div className="menu-item">
              <img src="https://placehold.co/200x150" alt="Chilly-Chicken" className="menu-image" />
              <h2 className="menu-title">Chilly Chicken</h2>
              <p className="menu-description">Authentic Indo-Chinese style stir fried chicken</p>
            </div>
        </div>
        </div>

        <div className="home-end">
            {endDesc}
            <button className="call-now-button">Call now</button>
        </div>
    </div>
  );
};

export default Home;