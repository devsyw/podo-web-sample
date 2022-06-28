import React, { useEffect } from "react";
import '../css/style.css';
import '../css/reset.css';

const Page5 = ({position}) => {

  return (
    <div className="container07">
      <div className="content"
        // style={{
        //   backgroundPositionY: position
        // }}
      >
        <h2>Contact Us</h2>
        <span>아래 주소의 팀 프로필을 확인하시어 관심 있으시다면 연락 부탁드리겠습니다.</span>
        <span>
          T + 82 10 4126 5701<br/>
          E + devsyw@gmail.com<br/>
          <a href="https://determined-brother-354.notion.site/65f4338ec75c41c1b0e116a236de0fd6?v=e3ad83e075f44e28ab08fe0c189e3269"></a>
        </span>
      </div>
    </div>
  );
}

export default Page5;

