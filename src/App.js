import React, { useEffect, useRef, useState } from "react"; //hook
// import './css/test.css';
import './css/style.css';
import './css/reset.css';

/** screens */
import Page1 from "./screen/page1";
import Page2 from "./screen/page2";
import Page3 from "./screen/page3";
import Page4 from "./screen/page4";
import Page5 from "./screen/page5";
import Page6 from "./screen/page6";

const App = () => {
  /** 스크롤 위치저장 상태 */
  const [page, setPage] = useState(0);
  let savePage = 0;

  /** 스크롤 움직일때마다 실행 */
  // useEffect(() => {
  //   const mouseUp = () => {
  //     window.addEventListener("wheel", handleDocumentMouseUp);
  //   }

  //   mouseUp();
  //   return () => {
  //     window.removeEventListener('wheel', handleDocumentMouseUp);
  //   }
  // }, [])

  // /** 마우스 업 */
  // const handleDocumentMouseUp = (e) => {
  //   if(e.deltaY < 0) {
  //     console.log('뒤로가!');
  //     setPageY(page - 1);
  //     setPage(page - 1)
  //   } else if(e.deltaY > 0){
  //     console.log('앞으로가!');
  //     setPageY(page + 1);
  //     setPage(page + 1)
  //   }
  // }

  const setPageY = (count) => {
    let ySet = window.innerHeight * count;
    console.log(page)
    return window.scrollTo({top:ySet, behavior:'smooth'});
  }
  

  return (
    <html>
      <body>
        <header className="header">
          <a className="logo"></a>
          <div className="menu-list">
            <div onClick={()=>{setPageY(0)}}>화면 1</div>
            <div onClick={()=>{setPageY(1)}}>화면 2</div>
            <div onClick={()=>{setPageY(2)}}>화면 3</div>
            <div onClick={()=>{setPageY(3)}}>화면 4</div>
            <div onClick={()=>{setPageY(4)}}>화면 5</div>
            <div onClick={()=>{setPageY(5)}}>화면 6</div>
          </div>
        </header>

        <main>
          <Page1/>
          <Page2/>
          <Page3/>
          <Page4/>
          <Page5/>
          <Page6/>
        </main>
      </body>
      <footer>
        
      </footer>
    </html>
  );
}

export default App;