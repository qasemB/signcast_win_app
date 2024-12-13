import React from "react";
import Header from "../layout/header/Header";
import Navbar from "../layout/navbar/Navbar";
import Gallery from "./gallery/Gallery";

const Main = () => {
  return (
    <main className="bg-white h-screen rounded-xl overflow-hidden flex flex-col">
      <Header />
      <section className="flex-1">
        <Gallery />
      </section>
      <Navbar />
    </main>
  );
};

export default Main;
