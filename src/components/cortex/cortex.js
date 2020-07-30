import React from "react";
import "./cortex.css";
import printer from "./printer2.svg";
import brain from "./brain2.svg";
import shadow from "./shadow.svg";
import { Grid, Typography } from "@material-ui/core";
import useWebAnimations, {backInUp ,backInLeft}from "@wellyshen/use-web-animations";
import service6 from '../uxwritting/services-6.svg';


export default function Cortex() {
  const { ref: brain1 } = useWebAnimations({
    keyframes: {
      transform: "translateY(50px)",
        },
    timing: {
      duration: 2000,
      iterations: Infinity,
      direction : 'alternate',
      easing: "ease-in-out"
    },

    
  });

  const {ref : cortexAnim}=  useWebAnimations({...backInLeft});
  const {ref : copywritterAnim}=  useWebAnimations({...backInLeft});
  const {ref : textAnim}=  useWebAnimations({...backInUp});




  return (
    <Grid container className="cortex-container">
      <Grid item xs={6}>
        <Grid container justify="center" alignItems="center" direction="column">
          <div ref = {cortexAnim} className="heading1">CORTEX</div>
          <br />
          <div ref = {copywritterAnim} className="heading2">COPYWRITER</div>
          <div ref = {textAnim} className="heading3">
            Enhance your communications with psychology-based copywriting and UX
            writing
          </div>
          <div className = 'button'>Send a message</div>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container justify="center" alignItems="center" direction="column">
          <div>
            <img ref={brain1} className="brain-image" src={brain} alt="" />
          </div>
          <div>
            <img className="printer-image" src={printer} alt="" />
          </div>{" "}
        </Grid>
      </Grid>
      </Grid>
  
  );
}
