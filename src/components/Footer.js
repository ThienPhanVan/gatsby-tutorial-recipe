import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>SimplyRecipes</span>. Built with{" "}
      </p>
      <a href="https://www.facebook.com/PVThien96">Gatsby-Blue</a>
    </footer>
  );
};

export default Footer;
