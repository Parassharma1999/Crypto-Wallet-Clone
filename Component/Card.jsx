import React,{useState} from "react";
import Toggler from "./Toggler";
import Toggler1 from "./Toggler1";
import cake from "../SVG/cake.svg";
import pencil from "../SVG/Vector.svg";
import arrow from "../SVG/coolicon.svg";
import close from "../SVG/icon.svg";
const Card = () => {
  const [toggle,setToggle] = useState(false);
  const [text, setText] = useState("Show Detail");

  const clickHandler = ()=>{
    setText("Hide Details");
    setToggle(!toggle);
  }
  return (
    <div className="cardWrapper">
      <div className="cardContainer">
        <div className="buttonBar">
          <button className="closeButton"><img src={close} alt="close" /></button>
        </div>

        <div className="header">
          <p>ROI Calculator</p>
        </div>

        <div className="navigationMenu">
          <div className="navbar">
            <img src={cake} alt="" style={{ width: "12px", height: "12px",marginRight:"-10px" }} />
            <p>Cake</p>
            <Toggler />
            <p>USD</p>
          </div>
        </div>

        <div className="cakeDisplay">
          <p
            style={{ fontSize: "20px", lineHeight: "30px", fontWeight: "bold", }}
          >
            2.10000 CAKE
          </p>
        </div>

        <div className="balanceNav">
          <div className="showBalance">
            <p
              style={{
                backgroundColor: "rgba(255, 249, 170, 1)",
                padding: "9px 23px",
                textAlign: "center",
                display: "flex",
                borderRadius: "10px",
              }}
            >
              USE BALANCE
            </p>

            <p
              style={{
                background: "#F8F8F8",
                padding: "9px 23px",
                textAlign: "center",
                display: "flex",
                borderRadius: "10px",
              }}
            >
              $1000
            </p>
            <p
              style={{
                background: "#F8F8F8",
                padding: "9px 23px",
                textAlign: "center",
                display: "flex",
                borderRadius: "10px",
              }}
            >
              $100
            </p>
          </div>

          <div className="balance">
            <p>~$20.82</p>
          </div>
        </div>

        <div>
          <p style={{ fontWeight: "600",marginTop:"15px" }}>Timeframe</p>
        </div>

        <div className="timeframe">
          <p id="button1">1Day</p>
          <p className="button2">7Day</p>
          <p className="button2">30Day</p>
          <p className="button2">1Year</p>
          <p className="button2">5Year</p>
        </div>

        <div className="enabler">
          <p style={{ fontWeight: "520", fontSize: "16px",marginTop:"20px" }}>
            Enable Accelerated APY
          </p>
          <Toggler1 />
        </div>

        <div>
          <p style={{ fontWeight: "600", fontSize: "14px", color: "#A3A3A3",marginTop:"20px" }}>
            Select Tier
          </p>
        </div>

        <div className="timeframe">
          <p className="button2">Tier1</p>
          <p className="button2">Tier2</p>
          <p className="button2">Tier3</p>
          <p id="button1">Tier4</p>
          <p className="button2">Tier5</p>
        </div>

        <div>
          <p
            style={{
              fontWeight: "600",
              fontSize: "14px",
              color: "#A3A3A3",
              display: "flex",
              justifyContent: "end",
              marginTop:"20px"
            }}
          >
            ROI at Current Rates
          </p>
        </div>

        <div className="displayer">
          <img src={pencil} alt="pencil" style={{ marginLeft: "2rem" }} />
          <input
            type="text"
            style={{
              border: "none",
              outline: "none",
              fontSize: "27px",
              lineHeight: "30px",
              fontWeight: "bold",
              direction: "rtl",
            }}
          />
        </div>

        <div className="balance1">
          <p>~ 3CAKE + 10 DON</p>
        </div>

        <div className="mainButton">
          <button className="mainButton1">Apply</button>
          <button className="mainButton2">Cancel</button>
        </div>

        <div className="toggleButton">
          <button className="showButton" onClick={clickHandler}>
            <p> {toggle?"Hide":"Show"} Details</p>
            <img style={{ marginLeft: "10px" }} src={arrow} alt="arrow" />
          </button>
        </div>

     { toggle &&
        <div className="toggleContent">
          <div className="firstHead">
            <p style={{ fontWeight: "600", fontSize: "14px" }}>APY</p>
            <p
              style={{
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "30px",
                color: "#FAC200",
              }}
            >
              63.34%
            </p>
          </div>
   
         <ul style={{display:"flex",flexDirection:"column",justifyContent:"center",paddingLeft:"25px",paddingRight:"25px",marginTop:"20px"}}>
           <li className="textStyle">Calculated based on current rates</li>
           <li className="textStyle">All fugures are estimates provided for your convenience only, 
               and by no means represent guaranted returns.</li>
         </ul>

        </div>
         }

      </div>
    </div>
  );
};

export default Card;
