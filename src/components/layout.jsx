"use client";
import Lenis from "./lenis";
import Header from "./header";
import Footer from "./footer";
import StoreProvider from "@/store/provider";

const Layout = ({ children }) => {
  return (
    <Lenis>
      <StoreProvider>
        <main className=" ">
          <Header />
          {children}
          <Footer />
        </main>
      </StoreProvider>
    </Lenis>
  );
};

export default Layout;
