import React, { useEffect } from "react";
import '../css/style.css';
import '../css/reset.css';

const Page1 = ({position}) => {

  return (
    <div className="container01">
      <div className="maintext"
        // style={{
        //   backgroundPositionY: position
        // }}
      >
        Podo Web is<br/>
        the new<br/>
        agency standard
      </div>
    </div>
  );
}

export default Page1;

