import React from "react";
import "./Cities.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Cities = () => {
  return (
    <div className="cities">
      <h1>
        Popular localities in and around <span>Mumbai</span>
      </h1>
      <div className="cityContainer">
        <div className="city">
          <div className="cityLeft">
            <h3>Lower Parel</h3>
            <span>493 Places</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Powai</h3>
            <span>443 Places</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Malad West</h3>
            <span>960 Places</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Borivali West</h3>
            <span>691 Places</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Bandra Kurla Complex</h3>
            <span>161 Places</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Vashi</h3>
            <span>667 Places</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Fort</h3>
            <span>291 Places</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Juhu</h3>
            <span>250 Places</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>See more</h3>
          </div>
          <div className="icon">
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;