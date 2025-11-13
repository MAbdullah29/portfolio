import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header";


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />

      <main className=" m-0 p-0">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
