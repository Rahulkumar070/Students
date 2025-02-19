import React from "react";
import Landing from "../components/Landing";
import Second from "../components/Second";
import Horizontal from "../components/Horizontal";

import Card from "../components/Card";
import Connect from "../components/Connect";
import Cardss from "../components/Cardss";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="">
      <Landing />
      <Second />
      <Horizontal />
      <Cardss />
      <Card />
      <Connect />
      <Footer />
    </div>
  );
}

export default Home;
