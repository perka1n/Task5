import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

class Game extends Component {

    constructor(props) {
        super(props);
        this.numberAttemps = {
            count: 3
        }
        this.boxClass = ["","","","","","","","","","","","","","","","","","","","","","","","",""]
        this.randomNumberForWin = Math.round(Math.random() * this.boxClass.length)
        this.randomNumberForAddedAttempt = Math.round(Math.random() * this.boxClass.length - 1)
        this.boxClass[this.randomNumberForWin] = "win"
        this.boxClass[this.randomNumberForAddedAttempt] = "AddedAttempt"
        this.disable = false

    }

    handleClick = (e) => {
        setTimeout(() => {
            console.log(this.boxClass)

            if(this.disable == false){
                if (e.target.className == "gameItemwin"){
                    document.querySelector(".notification").innerHTML = "ты победил!!!"
                    e.target.className = "itemWin"
                    this.handleClick = null
                    e.target.innerHTML = ""
                    this.disable = true

                }else if(e.target.className == "gameItemAddedAttempt"){
                    document.querySelector(".notification").innerHTML = "Тебе повезло, плюс 1 попытка"
                    this.setState({ count: this.numberAttemps.count += 1 })
                    e.target.className = "itemAddedAttempt"
                    e.target.innerHTML = ""

                }else if((e.target.className !== "gameItemAddedAttempt") || (e.target.className !== "gameItemwin" )) { 
                        this.setState({ count: this.numberAttemps.count -= 1 })
                        document.querySelector(".notification").innerHTML = "неправильно, попробуй другую"
                        e.target.className = "itemLose"
                        e.target.innerHTML = ""
                    }}
            
            if(this.numberAttemps.count === 0){
                document.querySelector(".notification").innerHTML = "Ты проиграл, кончились попытки";
                 this.handleClick = null 
            }
        }, 1);
    }

  render() {
    return (
      <>
        <div className="logo">
          <p className="logo-text">Logo</p>
        </div>

        <div className="nav gameList">
          <span className="linkWrap">Сапер</span>
          <span className="notificationBlock" >
            <p className="attemps">Попыток:{this.numberAttemps.count}</p>
            <p className="notification">Нажмите на одну из ячеек</p>
          </span>

          <div className="area">
                <div className="firstRow">
                    <span data-id="0" className={"gameItem" + this.boxClass[0]} onClick={this.handleClick}>A1</span>
                    <span data-id="1" className={"gameItem" + this.boxClass[1]}  onClick={this.handleClick}>A2</span>
                    <span data-id="2" className={"gameItem" + this.boxClass[2]}  onClick={this.handleClick}>A3</span>
                    <span data-id="3" className={"gameItem" + this.boxClass[3]}  onClick={this.handleClick}>A4</span>
                    <span data-id="4" className={"gameItem" + this.boxClass[4]}  onClick={this.handleClick}>A5</span>
                </div>
                <div className="secondRow">
                    <span data-id="5" className={"gameItem" + this.boxClass[5]}  onClick={this.handleClick}>B1</span>
                    <span data-id="6" className={"gameItem" + this.boxClass[6]}  onClick={this.handleClick}>B2</span>
                    <span data-id="7" className={"gameItem" + this.boxClass[7]}  onClick={this.handleClick}>B3</span>
                    <span data-id="8" className={"gameItem" + this.boxClass[8]}  onClick={this.handleClick}>B4</span>
                    <span data-id="9" className={"gameItem" + this.boxClass[9]}  onClick={this.handleClick}>B5</span>
                </div>
                <div className="thirdRow">
                    <span data-id="10" className={"gameItem" + this.boxClass[10]}  onClick={this.handleClick}>C1</span>
                    <span data-id="11" className={"gameItem" + this.boxClass[11]}  onClick={this.handleClick}>C2</span>
                    <span data-id="12" className={"gameItem" + this.boxClass[12]}  onClick={this.handleClick}>C3</span>
                    <span data-id="13" className={"gameItem" + this.boxClass[13]}  onClick={this.handleClick}>C4</span>
                    <span data-id="14" className={"gameItem" + this.boxClass[14]}  onClick={this.handleClick}>C5</span>
                </div>
                <div className="fourthRow">
                    <span data-id="15" className={"gameItem" + this.boxClass[15]}  onClick={this.handleClick}>D1</span>
                    <span data-id="16" className={"gameItem" + this.boxClass[16]}  onClick={this.handleClick}>D2</span>
                    <span data-id="17" className={"gameItem" + this.boxClass[17]}  onClick={this.handleClick}>D3</span>
                    <span data-id="18" className={"gameItem" + this.boxClass[18]}  onClick={this.handleClick}>D4</span>
                    <span data-id="19" className={"gameItem" + this.boxClass[19]}  onClick={this.handleClick}>D5</span>
                </div>
                <div className="fifthRow">
                    <span data-id="20" className={"gameItem" + this.boxClass[20]}  onClick={this.handleClick}>E1</span>
                    <span data-id="21" className={"gameItem" + this.boxClass[21]}  onClick={this.handleClick}>E2</span>
                    <span data-id="22" className={"gameItem" + this.boxClass[22]}  onClick={this.handleClick}>E3</span>
                    <span data-id="23" className={"gameItem" + this.boxClass[23]}  onClick={this.handleClick}>E4</span>
                    <span data-id="24" className={"gameItem" + this.boxClass[24]}  onClick={this.handleClick}>E5</span>
                </div>
            </div>
        </div>

        

        <div className="gamesBack">
          <div className="linkWrap">
            <Link to={"/"}>назад</Link>
          </div>
        </div>
      </>
    );
  }
}

function Games() {
  return (
    <div>
      <Game />
    </div>
  );
}

export { Games };