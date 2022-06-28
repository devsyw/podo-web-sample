import React, { useEffect } from "react";
import '../css/style.css';
import '../css/reset.css';

const Page2 = ({position}) => {


  return (
    <div className="container02">
      <ul className="content"
        // style={{
        //   backgroundPositionY: position
        // }}
      >
        <li>
          <span className="s-color-11 tit">PODO WEB</span>
          <span className="s-color-11">
              PODO WEB은<br/>
              현직 풀스택 개발자 2명, 비쥬얼 퍼블리셔 1명으로 이루어진 젊은 팀입니다.<br/>
              우리는 클라이언트의 니즈를 공감하기위해 노력하고 그것을 놀라운 퀄리티로 구현하기위한 책임감또한 뛰어납니다. <br/>
              또한 팀원들은 다년간 SI 프로젝트 및 서비스 개발/운영을 경험한 바 있으며 각 분야에서 그 실력을 검증해왔습니다.
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Page2;

