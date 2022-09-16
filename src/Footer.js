import React from "react";

const Footer = (props) => {
  return (
    <footer className="footer">
      <ul>
        {props.data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
