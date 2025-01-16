import React from "react";
import "./Card.scss";
import Dine from "../../images/Dine-Out.png";
import Night from "../../images/Night-Life.png";
import Online from "../../images/Online-Food.png";

const Card = () => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={Online} alt="dineImg" />
        <h1>Order Online</h1>
        <span>Stay home and order to your doorstep</span>
      </div>
      <div className="cardImg">
        <img src={Dine} alt="onlineImg" />
        <h1>Dinning</h1>
        <span>Views the city's favourite venues</span>
      </div>
      <div className="cardImg">
        <img src={Night} alt="nightImg" />
        <h1>Live Events</h1>
        <span>Discover India's best events & concerts</span>
      </div>
    </div>
  );
};

export default Card;