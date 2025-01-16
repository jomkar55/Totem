import React from "react";
import "./Accordian.scss";
import data from "../../data";
import AccordianContainer from "../accordianContainer/AccordianContainer";

const Accordian = () => {
  return (
    <div className="accContainer">
      <h2>Explore options near me</h2>
      {data.map((question) => (
        <AccordianContainer question={question} key={question.id} />
      ))}
    </div>
  );
};

export default Accordian;