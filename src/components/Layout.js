import React from "react";
import "../assets/css/main.css";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
