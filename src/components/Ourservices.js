import React from "react";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import FirstDivInfo from "./DivInfoComponents/firstDivInfo";
import SecondDivInfo from "./DivInfoComponents/secondDivInfo";
import ThirdDivInfo from "./DivInfoComponents/thirdDivInfo";
import FourthDivInfo from "./DivInfoComponents/fourthDivInfo";
import FifthDivInfo from "./DivInfoComponents/fifthDivInfo";
import SixthDivInfo from "./DivInfoComponents/sixthDivInfo";

function Ourservices() {
  const [dispFirst, setDispFirst] = useState("block");
  const [bordFirst, setBordFirst] = useState("2px solid #192e91");
  const [backgrFirst, setbackgrFirst] = useState("blue");
  const [colorFirst, setcolorFirst] = useState("white");

  const [dispSecond, setDispSecond] = useState("none");
  const [bordSecond, setBordSecond] = useState("none");
  const [backgrSecond, setbackgrSecond] = useState("none");
  const [colorSecond, setcolorSecond] = useState("none");

  const [dispThird, setDispThird] = useState("none");
  const [bordThird, setBordThird] = useState("none");
  const [backgrThird, setbackgrThird] = useState("none");
  const [colorThird, setcolorThird] = useState("none");

  const [dispFourth, setDispFourth] = useState("none");
  const [bordFourth, setBordFourth] = useState("none");
  const [backgrFourth, setbackgrFourth] = useState("none");
  const [colorFourth, setcolorFourth] = useState("none");

  const [dispFifth, setDispFifth] = useState("none");
  const [bordFifth, setBordFifth] = useState("none");
  const [backgrFifth, setbackgrFifth] = useState("none");
  const [colorFifth, setcolorFifth] = useState("none");

  const [dispSixth, setDispSixth] = useState("none");
  const [bordSixth, setBordSixth] = useState("none");
  const [backgrSixth, setbackgrSixth] = useState("none");
  const [colorSixth, setcolorSixth] = useState("none");

  const dispNoneStyleFirst = {
    display: dispFirst,
  };
  const borderFirst = {
    border: bordFirst,
  };

  const backgroundFirst = {
    background: backgrFirst,
  };

  const colorTextFirst = {
    color: colorFirst,
  };

  const dispNoneStyleSecond = {
    display: dispSecond,
  };
  const borderSecond = {
    border: bordSecond,
  };

  const dispNoneStyleThird = {
    display: dispThird,
  };
  const borderThird = {
    border: bordThird,
  };

  const dispNoneStyleFourth = {
    display: dispFourth,
  };
  const borderFourth = {
    border: bordFourth,
  };

  const dispNoneStyleFifth = {
    display: dispFifth,
  };
  const borderFifth = {
    border: bordFifth,
  };

  const dispNoneStyleSixth = {
    display: dispSixth,
  };
  const borderSixth = {
    border: bordSixth,
  };

  const handleClickFirstOption = () => {
    setDispThird("none");
    setDispFirst("block");
    setDispSecond("none");
    setDispFourth("none");
    setDispFifth("none");
    setDispSixth("none");
    setBordThird("none");
    setBordFirst("2px solid #192e91");
    setBordSecond("none");
    setBordFourth("none");
    setBordFifth("none");
    setBordSixth("none");
  };

  const handleClickSecondOption = () => {
    setDispThird("none");
    setDispFirst("none");
    setDispSecond("block");
    setDispFourth("none");
    setDispFifth("none");
    setDispSixth("none");
    setBordThird("none");
    setBordFirst("none");
    setBordSecond("2px solid #192e91");
    setBordFourth("none");
    setBordFifth("none");
    setBordSixth("none");
  };

  const handleClickThirdOption = () => {
    setDispThird("block");
    setDispFirst("none");
    setDispSecond("none");
    setDispFourth("none");
    setDispFifth("none");
    setDispSixth("none");
    setBordThird("2px solid #192e91");
    setBordFirst("none");
    setBordSecond("none");
    setBordFourth("none");
    setBordFifth("none");
    setBordSixth("none");
  };

  const handleClickFourthOption = () => {
    setDispThird("none");
    setDispFirst("none");
    setDispSecond("none");
    setDispFourth("block");
    setDispFifth("none");
    setDispSixth("none");
    setBordThird("none");
    setBordFirst("none");
    setBordSecond("none");
    setBordFourth("2px solid #192e91");
    setBordFifth("none");
    setBordSixth("none");
  };

  const handleClickFifthOption = () => {
    setDispThird("none");
    setDispFirst("none");
    setDispSecond("none");
    setDispFourth("none");
    setDispFifth("block");
    setDispSixth("none");
    setBordThird("none");
    setBordFirst("none");
    setBordSecond("none");
    setBordFourth("none");
    setBordFifth("2px solid #192e91");
    setBordSixth("none");
  };

  const handleClickSixthOption = () => {
    setDispThird("none");
    setDispFirst("none");
    setDispSecond("none");
    setDispFourth("none");
    setDispFifth("none");
    setDispSixth("block");
    setBordThird("none");
    setBordFirst("none");
    setBordSecond("none");
    setBordFourth("none");
    setBordFifth("none");
    setBordSixth("2px solid #192e91");
  };

  return (
    <div className="our-services">
      <div className="our-services_view">
        <div className="headerWhoHelp">
          <h1 className="a">Czym się zajmujemy ?</h1>
        </div>

        {/* <div className="switchWhoHelp"> */}
        <div style={{justifyContent: 'center'}}>
          <Grid container>
            <Grid item lg={2} md={3}>
              <button onClick={handleClickFirstOption} style={borderFirst}>
                Przeglądy i
                <br />
                konserwacje
              </button>
            </Grid>
            <Grid item lg={2} md={3}>
              <button onClick={handleClickSecondOption} style={borderSecond}>
                Usługi
                <br />
                specjalistyczne
              </button>
            </Grid>
            <Grid item lg={2} md={3}>
              <button onClick={handleClickThirdOption} style={borderThird}>
                Audyty
                <br />i konsultacje techniczne
              </button>
            </Grid>
            <Grid item lg={2} md={3}>
              <button onClick={handleClickFourthOption} style={borderFourth}>
                Koncepcja prowadzenia
                <br />
                obsługi technicznej
              </button>
            </Grid>
            <Grid item lg={2} md={3}>
              <button onClick={handleClickFifthOption} style={borderFifth}>
                Pogotowie
                <br /> techniczne
              </button>
            </Grid>
            <Grid item lg={2} md={3}>
              <button onClick={handleClickSixthOption} style={borderSixth}>
                Narzędzia IT
              </button>
            </Grid>
          </Grid>
        </div>

        <div className="viewInfo">
          {/* FIRST DIV INFO*/}
          <div className="firstDivInfo" style={dispNoneStyleFirst}>
            <FirstDivInfo />
          </div>

          {/* SECOND DIV INFO*/}
          <div className="secondDivInfo" style={dispNoneStyleSecond}>
            <SecondDivInfo />
          </div>

          {/* THIRD DIV INFO*/}
          <div className="thirdDivInfo" style={dispNoneStyleThird}>
            <ThirdDivInfo />
          </div>

          {/* FOURTH DIV INFO*/}
          <div className="fourthDivInfo" style={dispNoneStyleFourth}>
            <FourthDivInfo />
          </div>

          {/* FIFTH DIV INFO */}
          <div className="fifthDivInfo" style={dispNoneStyleFifth}>
            <FifthDivInfo />
          </div>

          {/* SIXTH DIV INFO */}
          <div className="sixthDivInfo" style={dispNoneStyleSixth}>
            <SixthDivInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourservices;
