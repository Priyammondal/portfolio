import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div> &#169; Designed by Priyam Mondal</div>
      <div>{new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;
