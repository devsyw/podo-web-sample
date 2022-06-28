import React, { useEffect } from "react";
import '../css/style.css';
import '../css/reset.css';

const Page5 = ({position}) => {
  
  return (
    <div className="container05">
      <div className="content"
        // style={{
        //   backgroundPositionY: position
        // }}
      >
        <h2>Case Work</h2>
        <ul className="content">
          <li>
            <p>
              <span className="tit">브랜드 홍보</span>
              <span>풀페이지 스크롤 레이아웃 웹</span>
              <a className="btn-more">More</a>
            </p>
          </li>
          <li>
            <p>
              <span className="tit">온라인 스토어</span>
              <span>전자상거래 통홥 관리 시스템</span>
              <a className="btn-more">More</a>
            </p>
          </li>
          <li>
            <p>
              <span className="tit">CMS</span>
              <span>컨텐츠 관리 시스템</span>
              <a className="btn-more">More</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Page5;

