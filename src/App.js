import React, { useEffect, useState } from "react";
import './css/test.css'
import { useHorizontalScroll } from "./common/useSideScroll";

import ScrollHorizontal from 'react-scroll-horizontal';

import Index from "./screen/indexpage";
import Txtpage from "./screen/txtpage";
import Samples from "./screen/samples";
import Ourstack from "./screen/ourstack";
import Contact from "./screen/contact";


const App = () => {
  /** 스크롤 컨트롤 ref객체 */
  const scrollRef = useHorizontalScroll();

  /** 스크롤 위치저장 상태 */
  const [scrollY, setScrollY] = useState(0);

  /** 화면 세로영역 크기, state로 저장하면 리렌더되기때문에 변수저장 */
  let nowScreenHeightSize = window.innerHeight;

  /** 가로/세로 스크롤 전환 flag */
  const [turnScroll, setTurnScroll] = useState(false)

  /** window 스크롤 값을 ScrollY에 저장 */
  const handleFollow = () => {
    if(!turnScroll) {
      setScrollY(window.pageYOffset);
    } else {
      setScrollY(window.pageXOffset);
    } 
  }

  /** ScrollY가 변화할때마다 값을 콘솔에 출력 */
  useEffect(() => {
    nowScreenHeightSize = window.innerHeight;
    console.log("ScrollY is ", scrollY, " / ", nowScreenHeightSize); 

    if(scrollY >= (nowScreenHeightSize * 2)) { //세로스크롤을 끝까지 내렸는지 검사
      setTurnScroll(true) //가로스크롤 활성화
    } else {
      setTurnScroll(false) //세로스크롤 활성화
    }
  }, [scrollY])

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

  return (
    !turnScroll ? 
        <>
          <Index />
          <Txtpage />
          <Samples />
        </>
      : 
        // <div ref={scrollRef} style={{ overflow: "auto" }}>
        //   <div style={{ whiteSpace: "nowrap" }}>
        <ScrollHorizontal>
          <Samples />
          <Ourstack />
          <Contact />
        </ScrollHorizontal>
  );
}

export default App;