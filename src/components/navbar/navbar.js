import React from "react";
import "./navbar.css";
import RainbowText from "./rainbowText";
import {
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position : "fixed"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));



export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className="nav-container">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#1eff00" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"


        >
          <RainbowText />
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
