import React, { useEffect, useRef, useState } from "react";
import './css/test.css'

/** screens */
import Index from "./screen/indexpage";
import Txtpage from "./screen/txtpage";
import Samples from "./screen/samples";
import Ourstack from "./screen/ourstack";
import Contact from "./screen/contact";

//서버 실행 npm start
//서버 종료 ctrl + c

/** 다은이 전용, 퍼블용 */
const App = () => {

  return (
    <>
      <Index />
      <Txtpage />
      <Samples />
      <Ourstack />
      <Contact />
    </>
  );
}

export default App;