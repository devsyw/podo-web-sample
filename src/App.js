import React, { useEffect, useRef, useState } from "react"; //hook
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
  }, [])

  /** window 스크롤 값을 ScrollY에 저장 */
  const handleFollow = () => {
    setScrollY(window.pageYOffset)
  }

  return (
    <div className="wrapper">
      <Index aa={a} setAA={setA}/>
      <Txtpage position={scrollY}/>
      <Samples status={scrollMode}/>
    </div>
  );
}

export default App;