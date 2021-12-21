import React from "react";
import './css/test.css'

import Index from "./screen/indexpage";
import Txtpage from "./screen/txtpage";
import Samples from "./screen/samples";
import Ourstack from "./screen/ourstack";
import Contact from "./screen/contact";

const App = () => {

  return (
    <>
      <Index />
      <Txtpage />
      <Samples />
      {/** 여기부터 가로스크롤 */}
      <Ourstack />
      <Contact />
    </>
  );
}

export default App;