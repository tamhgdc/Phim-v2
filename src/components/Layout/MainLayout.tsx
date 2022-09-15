import React from "react";
import BackToTop from "../BackToTop";
import Footer from "../Footer";
import Header from "../Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />

      <div className="container pt-[100px] pb-[50px] min-h-screen">
        {children}
      </div>

      <Footer />

      <BackToTop />
    </div>
  );
}

export default MainLayout;
