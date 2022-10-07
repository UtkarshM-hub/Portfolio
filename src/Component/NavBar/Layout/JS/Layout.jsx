import React from "react";
import Footer from "../../../Footer/JS/Footer";
import NavBar from "../../JS/NavBar";
import classes from "../CSS/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={classes.Layout}>
      <NavBar />
      <main><div className={classes.Layout_Marginner} >{children}</div></main>
      <Footer />
    </div>
  );
};

export default Layout;
