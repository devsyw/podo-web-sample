import React, { useEffect, useRef, useState } from "react";
import './css/test.css'
import { FullPage, Slide } from 'react-full-page';

/** screens */
import Index from "./screen/indexpage";
import Txtpage from "./screen/txtpage";
import Samples from "./screen/samples";
import Ourstack from "./screen/ourstack";
import Contact from "./screen/contact";

const App = () => {
  /** 스크롤 위치저장 상태 */
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollMode, setScrollMode] = useState(1);

  /** 스크롤 움직일때마다 실행 */
  useEffect(() => {
    const watch = () => {      
      window.addEventListener('scroll', handleFollow);
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    }
  })

  /** window 스크롤 값을 ScrollY에 저장 */
  const handleFollow = () => {
    setScrollY(window.pageYOffset)
    if(scrollMode === 1) {
      console.log(window.innerHeight * 2, window.pageYOffset)
    }
    else if(scrollMode === 2) console.log(window.innerHeight * 2, window.pageXOffset)
    else console.log(window.innerHeight * 2, window.pageYOffset)

    if((scrollMode === 1) && ((window.innerHeight * 2) <= window.pageYOffset)) {
      console.log('x모드')
      setScrollMode(2)
    } 

    if((scrollMode === 2) && (window.innerHeight * 2 >= window.pageYOffset)) {
      console.log('y모드')
      setScrollMode(1)
    }
  }

  return (
    <FullPage controls className="wrapper">
      <Slide>
        <Index id="first"/>
      </Slide>

      <Txtpage id="second" position={scrollY}/>

      <Slide>
        <Samples id="third" status={scrollMode}/>
      </Slide>
    </FullPage>
  );

  // return (
  //   <div className="wrapper">
  //     <Index id="first"/>
  //     <Txtpage id="second" position={scrollY}/>
  //     <Samples id="third" status={scrollMode}/>
  //   </div>
  // );
}

export default App;