import React from "react";
import "./uxwritting.css";
import { Grid, Typography } from "@material-ui/core";
import useWebAnimations,{heartBeat} from "@wellyshen/use-web-animations";
import service5 from "./services-5.svg";
import service6 from "./services-6.svg";
import service7 from "./services-7.svg";

export default function UxWritting() {

    const { ref : animservice6 , getAnimation} = useWebAnimations({...heartBeat});

    const play = ()=>{
      getAnimation().play();
    };



      

  return (
    <div>
      <Grid container className="ux-container">
        <Grid item xs={6}>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <div>
              <img ref = {animservice6}  onScroll = {play} className="service6" src={service6} alt={""} />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <div className="heading">UX Writing</div>
            <div className="text">
              I develop clear and useful text in product interfaces to help
              users reach a specific goal, whether that's completing a form or
              tapping a button. This includes every type of content from
              on-screen help systems, user onboarding and in-app messages to
              push notifications and tooltips.
            </div>
          </Grid>
        </Grid>
      </Grid>
      {/* *********************SECOND SERVICE******************* */}
      <Grid style={{ marginTop: -120 }} container className="ux-container">
        <Grid item xs={6}>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <div style={{ marginLeft: 60 }} className="heading">
              Website Copywriting
            </div>
            <div style={{ marginLeft: 60 }} className="text">
              Your website is a dialogue with your audience. I capture the
              essence of your business and communicate it clearly. Carefully
              considered writing and SEO best practices allow me to craft the
              perfect user journey online. Let me draw the map that guides users
              every step of the way from discovery, to consideration, to
              conversion.
            </div>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <div>
              <img className="service6" src={service7} alt={""} />
            </div>
          </Grid>
        </Grid>
      </Grid>

      {/* *********************thired SERVICE******************* */}
      <Grid style={{ marginTop: -120 }} container className="ux-container">
        <Grid item xs={6}>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <div>
              <img className="service6" src={service5} alt={""} />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <div style={{ marginLeft: 60 }} className="heading">
              Content Writing
            </div>
            <div style={{ marginLeft: 60 }} className="text">
              Give your business a competitive edge with powerful content that
              can be targeted to any segment of your audience. No matter how
              large or complex your project, my custom-built solutions including
              articles, eDMs, and case studies will help you implement a plan
              that maximizes your business’s online exposure.
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
