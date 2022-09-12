import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <ul className="footer">
        {props.data.map((item) => {
          return <li key={item.id}>{item}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
