import React from "react";
import "./Collection.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import collection1 from "../../images/collection1.webp";
import collection2 from "../../images/collection2.webp";
import collection3 from "../../images/collection3.webp";
import collection4 from "../../images/collection4.webp";

const Collection = () => {
  return (
    <div className="collection">
      <h1>Collections</h1>
      <div className="collectionText">
        <p>
        Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends
        </p>
        <span>
          All collection in Mumbai <ArrowRightIcon />
        </span>
      </div>
      <div className="collectionCard">
        <div className="collectionImg">
          <img src={collection1} alt="img" />
          <h3>Top Trending Spots</h3>
          <span>
            33 Places <ArrowRightIcon />
          </span>
        </div>
        <div className="collectionImg">
          <img src={collection2} alt="img2" />
          <h3>Best Insta-worthy places</h3>
          <span>
            28 Places <ArrowRightIcon />
          </span>
        </div>
        <div className="collectionImg">
          <img src={collection3} alt="img4" />
          <h3>Newly Opend Places</h3>
          <span>
            29 Places <ArrowRightIcon />
          </span>
        </div>
        <div className="collectionImg">
          <img src={collection4} alt="img4" />
          <h3>Strawberry Sweet Treats</h3>
          <span>
            11 Places <ArrowRightIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Collection;