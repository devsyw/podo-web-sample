import React, { useEffect } from "react";
import '../css/style.css';
import '../css/reset.css';


const Page4 = ({position}) => {
  
  return (
    <div className="container04">
      <div className="content"
        // style={{
        //   backgroundPositionY: position
        // }}
      >
          <h2>Our Capabilities</h2>
          <ul>
              <li class="lsy">
                  <a href="https://determined-brother-354.notion.site/Charles-257f3cac220c424e8253cdcccaeb94fa">
                      DEVELOPER
                      Charls Lee<br/>
                      <span>안녕하세요. 4년차 개발자 Charls입니다.<br/>18년도에 학사시스템 구축을 시작으로<br/>현재 홈페이지, 행정프로그램 개발 유지보수를 하고있으며<br/>책임감있고 의사소통에 있어 고객에 입장에서 생각하는것이 장점입니다.</span>
                  </a>
              </li>
              <li class="syw">
                  <a href="https://determined-brother-354.notion.site/David-1da95554ccd04a96baba3a29643d55d6">
                      DEVELOPER
                      David Seo<br/>
                      <span>안녕하세요. 팀 포도웹의 기술리드를 맡고있는 David입니다.<br/>다년간의 SI 프로젝트 및 서비스 개발경험을 바탕으로<br/>늘 사용자 입장에서 의미있는 고민을 합니다.<br/>개발자로서 지속가능하고 재미있는 서비스를 만들어내는 것을 즐깁니다.</span>
                  </a>
              </li>
              <li class="evon">
                  <a href="https://determined-brother-354.notion.site/Evon-49e99044981540e0b77006bb4dc4da2d">
                      PUBLISHER
                      Evon Lee<br/>
                      <span>안녕하세요. 7년차 퍼블리셔 이다은입니다.<br/>웹 사용자들에게 유용한 정보들을 더 편리하게 제공할 수 있는 방향으로 끊임없이 고민하고 찾아가며 구현합니다.</span>
                  </a>
              </li>
          </ul>
      </div>
    </div>
  );
}

export default Page4;

