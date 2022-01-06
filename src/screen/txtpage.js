import React, { useEffect } from "react";
import '../css/test.css';

const Txtpage = ({position}) => {
  
  let sizeRow = window.innerHeight;

  useEffect(()=>{
    console.log(position - sizeRow)
  }, [position])

  return (
    <div 
      className="bg bg1"
      style={{
        //backgroundPositionY: position - sizeRow
      }}
    >
      <div className="box1"></div>
      <div className="box2"></div>
      <div className="box3"></div>
    </div>
  );
}

export default Txtpage;

