import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



const Layout = ({ children }) => {
  return (
    <div className="container max-w-5xl mx-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
