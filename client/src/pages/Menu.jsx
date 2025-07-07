import React from "react";
import "./Menu.css";

const menuItems = [
  // Sunday Special
  { name: "Benne Mutton Biryani", price: "₹280", img: "https://placehold.co/200x150", category: "Sunday Special" },
  { name: "Paya Leg Soup", price: "₹120", img: "https://placehold.co/200x150", category: "Sunday Special" },
  { name: "Mutton Chops", price: "₹220", img: "https://placehold.co/200x150", category: "Sunday Special" },
  { name: "Mutton Keema Balls", price: "₹150", img: "https://placehold.co/200x150", category: "Sunday Special" },
  { name: "Keema Gojju", price: "₹160", img: "https://placehold.co/200x150", category: "Sunday Special" },
  { name: "Borti Gojju", price: "₹140", img: "https://placehold.co/200x150", category: "Sunday Special" },

  // Weekdays Special
  { name: "Chicken Biryani", price: "₹180", img: "https://placehold.co/200x150", category: "Weekdays Special" },
  { name: "Kabab", price: "₹120", img: "https://placehold.co/200x150", category: "Weekdays Special" },
  { name: "Chicken Sabakki Lollipop", price: "₹140", img: "https://placehold.co/200x150", category: "Weekdays Special" },
  { name: "Chicken Masala", price: "₹160", img: "https://placehold.co/200x150", category: "Weekdays Special" },
  { name: "Chicken Fry", price: "₹150", img: "https://placehold.co/200x150", category: "Weekdays Special" },
  { name: "Chicken Dry", price: "₹150", img: "https://placehold.co/200x150", category: "Weekdays Special" },
  { name: "Chicken Pepper Dry", price: "₹170", img: "https://placehold.co/200x150", category: "Weekdays Special" },
  { name: "Chicken Pepper Fry", price: "₹170", img: "https://placehold.co/200x150", category: "Weekdays Special" },
  { name: "Palak Chicken", price: "₹160", img: "https://placehold.co/200x150", category: "Weekdays Special" },

  // Special Items
  { name: "Kadai Chicken", price: "₹180", img: "https://placehold.co/200x150", category: "Special Items" },
  { name: "Raj Chicken", price: "₹200", img: "https://placehold.co/200x150", category: "Special Items" },
  { name: "Chicken Enne Khara", price: "₹190", img: "https://placehold.co/200x150", category: "Special Items" },
  { name: "Black Chicken", price: "₹210", img: "https://placehold.co/200x150", category: "Special Items" },

  // Mutton
  { name: "Benne Mutton Biryani", price: "₹280", img: "https://placehold.co/200x150", category: "Mutton" },
  { name: "Paya/Leg Soup", price: "₹120", img: "https://placehold.co/200x150", category: "Mutton" },
  { name: "Mutton Liver Fry", price: "₹170", img: "https://placehold.co/200x150", category: "Mutton" },
  { name: "Keema Dry", price: "₹160", img: "https://placehold.co/200x150", category: "Mutton" },
  { name: "Keema Fry", price: "₹160", img: "https://placehold.co/200x150", category: "Mutton" },

  // Chicken
  { name: "Chicken Biryani", price: "₹180", img: "https://placehold.co/200x150", category: "Chicken" },
  { name: "Chicken Chops", price: "₹150", img: "https://placehold.co/200x150", category: "Chicken" },
  { name: "Chilly Chicken", price: "₹140", img: "https://placehold.co/200x150", category: "Chicken" },
  { name: "Chicken Dry/Fry", price: "₹150", img: "https://placehold.co/200x150", category: "Chicken" },

  // Kabab
  { name: "Chicken Kabab", price: "₹120", img: "https://placehold.co/200x150", category: "Kabab" },
  { name: "Sholley Kabab", price: "₹130", img: "https://placehold.co/200x150", category: "Kabab" },
  { name: "Sabbakki Lollypop", price: "₹140", img: "https://placehold.co/200x150", category: "Kabab" },
  { name: "Chicken Raja", price: "₹150", img: "https://placehold.co/200x150", category: "Kabab" },

  // Extras
  { name: "Chicken Meals", price: "₹120", img: "https://placehold.co/200x150", category: "Extras" },
  { name: "Chapathis", price: "₹40", img: "https://placehold.co/200x150", category: "Extras" },
  { name: "Parota", price: "₹30", img: "https://placehold.co/200x150", category: "Extras" },
  { name: "Omlette", price: "₹25", img: "https://placehold.co/200x150", category: "Extras" },
  { name: "Boiled Egg", price: "₹20", img: "https://placehold.co/200x150", category: "Extras" },
];

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menu-title">Menu</h1>
      <div className="menu-items">
        {menuItems.map((item, idx) => (
          <div className="menu-item" key={idx}>
            <img src={item.img} alt={item.name} className="menu-image" />
            <h2 className="menu-item-title">{item.name}</h2>
            <p className="menu-item-price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;