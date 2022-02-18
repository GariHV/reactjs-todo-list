import React from 'react'
import "./ProgresBar.css"


export function ProgresBar({exp}){
  console.log(exp);
  const fullExp = [];
  function setExp(v){
    for (let i = 0; i < v; i++) {
      fullExp.push(<div className="block-meter"/>)
    }
  }
    return(
      <div className="loader-bar">
        <div className="block-border"/>
        <div className="block-border"/>
        <div className="block-border"/>
        <div className="block-border"/>
        <div className="block-border"/>
        <div className="block-border"/>
        <div className="block-border"/>
        <div className="block-border"/>
        {setExp(1)}
        {fullExp}
      </div>
    )
}


export function ProgrerLive({progress}){
  return(
    <div className="container25" >
    <div className="progressbar-container">
      <div className="progressbar-complete" style={{width: `${progress}%`}}>
        <div className="progressbar-liquid">.</div>
      </div>
      <span className="progress">{progress}Hp</span>
    </div>
  </div>
  )
}