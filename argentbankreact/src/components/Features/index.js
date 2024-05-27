import React from "react";
import "./style.scss";

const Features = ({ list }) => {
  return (
    <div className="features">
      {list &&
        list.map((feature, index) => {
          return (
            <div className="feature-item" key={index}>
              <img
                src={feature.src}
                alt={feature.alt}
                className="feature-icon"
              />
              <h3 className="feature-item-title">{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Features;
