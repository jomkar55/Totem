import React, { useState } from "react";
import "./Callto.scss";
import Google from "../../images/Google-Play.png";
import App from "../../images/App-Store.png";
// import Phone from "../../images/Iphone.png";

const CallTo = () => {
  const [email, setEmail] = useState(true);
  const [phone, setPhone] = useState(false);

  return (
    <div className="cta">
      <div className="left">
        <img src={"https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png"} alt="phone" />
      </div>
      <div className="right">
        <h1>Get the Zomato app</h1>
        <p>
          We will send you a link, open it on your phone to download the app
        </p>
        <div className="radio">
          <div className="radioBtn">
            <input
              type="radio"
              value="email"
              id="email"
              name="radio"
              onClick={() => setEmail(true) || setPhone(false)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="radioBtn">
            <input
              type="radio"
              value="phone"
              id="pnone"
              name="radio"
              onClick={() => setPhone(true) || setEmail(false)}
            />
            <label htmlFor="phone">Phone</label>
          </div>
        </div>
        <form className="input">
          {email && <input type="email" placeholder="Email" />}
          {phone && <input type="number" placeholder="Number" />}
          <button type="submit">Share App Link</button>
        </form>
        <span>Download app from</span>
        <div className="img">
          <img src={Google} alt="google" />
          <img src={App} alt="google" />
        </div>
      </div>
    </div>
  );
};

export default CallTo;