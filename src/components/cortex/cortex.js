import React from "react";
import "./cortex.css";
import printer from "./printer2.svg";
import brain from "./brain2.svg";
import shadow from "./shadow.svg";
import { Grid, Typography } from "@material-ui/core";
import useWebAnimations from "@wellyshen/use-web-animations";



export default function Cortex() {

    const{ ref : brain1} = useWebAnimations({
        keyframes : {
            transform: "translateY(50px)",



        },

        timing : {
            duration : 2000,
            iterations : Infinity,
            easing: "ease-in-out"

        }
    })
  return (
    <Grid container className="cortex-container">
      <Grid item xs={6}>
        <Grid container justify="center" alignItems="center" direction ='column'>
          <div className="heading">CORTEX</div>
          <br />
          <div className="heading2">COPYWRITER</div>
          <div className="heading3">
            Enhance your communications with psychology-based copywriting and UX
            writing
          </div>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container justify="center" alignItems ="center" direction ='column'>
          <img ref = {brain1} className="brain-image" src={brain}  alt = ''/>
          <img className="printer-image" src={printer} alt = '' />
        </Grid>
      </Grid>
    </Grid>
  );
}
