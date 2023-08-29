import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h3>💟 Designed & developed by Prem Kumar</h3>
      </div>
      <div className="footer-right">
        <a
          href="https://www.linkedin.com/in/prem-kr/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a
          href="https://www.twitter.com/premstwt/"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://www.youtube.com/rprem/"
          target="_blank"
          rel="noreferrer"
        >
          Youtube
        </a>
      </div>
    </div>
  );
};

export default Footer;
