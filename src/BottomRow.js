import React, { useState } from "react";
import "./App.css";


const BottomRow = () => {
const [downCount, setDownCount] = useState(0)
const [toGoCount, setToGoCount] = useState(0)
const [BallOn, setBallOn] = useState(0)
const [Quarter, setQuarter] = useState(0)
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value" onClick={() => {setDownCount( downCount < 4 ? downCount + 1  : 0)}} > {downCount} </div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value" onClick={() => {setToGoCount( toGoCount < 10 ? toGoCount + 1  : 0)}} > {toGoCount} </div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value" onClick={() => {setBallOn( BallOn < 99 ? BallOn + 1  : 0)}}> {BallOn} </div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value" onClick={() => {setQuarter( Quarter < 4 ? Quarter + 1  : 0)}}> {Quarter} </div>
      </div>
    </div>
  );
};
export default BottomRow;
