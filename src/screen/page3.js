import React, { useEffect } from "react";
import '../css/style.css';
import '../css/reset.css';

const Page3 = ({position}) => {

  return (
    <div 
      className="container03"
    >
      <div className="content"
        // style={{
        //   backgroundPositionY: position
        // }}
      >
        <span>우리의 시작점,</span>
        <h2>UNBOUND<br/>THINKING.</h2>
        <span>
            포도웹은 '레거시 유저가 없다는 것은 환경의 문제가 아니라 실력의 문제이다' 라는<br/>
            슬로건 아래 젊고 트렌디한 내일을 위한 새로운 웹의 기준을 제시합니다.
        </span>
      </div>
    </div>
  );
}

export default Page3;

