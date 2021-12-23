import React, { useEffect, useRef, useState } from "react";
import './css/test.css'
import ScrollHorizontal from 'react-scroll-horizontal';

import debounce from "@mui/utils/debounce";

/** 공통(hook) */
import { useHorizontalScroll } from "./common/useSideScroll";

/** 다른방식의 화면들 */
import HorizontalScroll from "./others/reactScroll";

/** screens */
import Index from "./screen/indexpage";
import Txtpage from "./screen/txtpage";
import Samples from "./screen/samples";
import Ourstack from "./screen/ourstack";
import Contact from "./screen/contact";


const App = () => {
  /** 스크롤 컨트롤 ref객체 */
  const scrollRef = useHorizontalScroll();

  /** 가로스크롤 ref객체 */
  const scRef = useRef()

  /** 스크롤 위치저장 상태 */
  const [scrollY, setScrollY] = useState(0);

  /** 화면 세로영역 크기, state로 저장하면 리렌더되기때문에 변수저장 */
  let nowScreenHeightSize = window.innerHeight;

  /** 가로/세로 스크롤 전환 flag */
  const [turnScroll, setTurnScroll] = useState(false)

  /** window 스크롤 값을 ScrollY에 저장 */
  const handleFollow = () => {
    /** 가로/세로 스크롤 감지하여 길이에 대한 offset 저장 포커싱 변경 */
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
    console.log(window.pageYOffset , window.pageXOffset); 

    if(scrollY >= (nowScreenHeightSize * 2)) { //세로스크롤을 끝까지 내렸는지 검사
      setTurnScroll(true) //가로스크롤 활성화
      console.log('가로모드')
    } 
    // else {
    //   setTurnScroll(false) //세로스크롤 활성화
    //   console.log('세로모드')
    // }
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

  /** 세로모드 뷰 */
  const ViewYOffset = () => {
    return (
      <>
        <Index />
        <Txtpage />
        <Samples />
      </>
    )
  }

  /** 가로모드 뷰 */
  const ViewXOffset = () => {
    return (
      <div style={{ height: `100vh` }}>
        <ScrollHorizontal
          ref={scRef}
          reverseScroll={true}
          config = {{ stiffness: 15, damping: 10 }}
        >
          <Samples />
          <Ourstack />
          <Contact />
        </ScrollHorizontal>
      </div>
    )
  }

  return (
    !turnScroll ? 
      <ViewYOffset />
      : 
      <ViewXOffset />
    // <HorizontalScroll/>
  );
}

export default App;