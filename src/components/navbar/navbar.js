import React from "react";
import "./navbar.css";
import RainbowText from "./rainbowText";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

export default function Navbar() {
  return (
    <div>
      <Accordion className="nav-container">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#1eff00" }} />}
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
