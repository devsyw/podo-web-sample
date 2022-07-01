import React, { useEffect, useRef, useState } from "react"; //hook
import { FullPage, Slide } from "react-full-page";

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

  return (
    <html>
      <body>
        <header className="header">
          <a className="logo"></a>
          <div className="menu-list">
            <div onClick={()=>{}}>화면 1</div>
            <div onClick={()=>{}}>화면 2</div>
            <div onClick={()=>{}}>화면 3</div>
            <div onClick={()=>{}}>화면 4</div>
            <div onClick={()=>{}}>화면 5</div>
            <div onClick={()=>{}}>화면 6</div>
          </div>
        </header>

        <main>
          <FullPage controls>
            <Slide>
              <Page1/>
            </Slide>
            <Slide>
              <Page2/>
            </Slide>
            <Slide>
              <Page3/>
            </Slide>
            <Slide>
              <Page4/>
            </Slide>
            <Slide>
              <Page5/>
            </Slide>
            <Slide>
              <Page6/>
            </Slide>
          </FullPage>
        </main>
      </body>
      <footer>
        
      </footer>
    </html>
  );
}

export default App;