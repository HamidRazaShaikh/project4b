import React from "react";
import { Typography } from "@material-ui/core";
import useWebAnimations from "@wellyshen/use-web-animations";

export default function RainbowText() {
  const { ref: ref1 } = useWebAnimations({
    keyframes: {
      color: ["#CC33FF", "#6633FF", "#3366FF", "#33CCFF", "#33FFCC", "#33FF66", "#FFCC33", "#ff6633", "#ff3366"],
    },

    timing: {
      duration: 4000,
      iterations: Infinity,
    },
  });

  const { ref: ref2 } = useWebAnimations({
    keyframes: {
      color: ["#6633FF", "#3366FF", "#33CCFF", "#33FFCC", "#33FF66", "#FFCC33", "#ff6633", "#ff3366","#CC33FF" ],
    },

    timing: {
      duration: 4000,
      iterations: Infinity,
    },
  });

  const { ref: ref3 } = useWebAnimations({
    keyframes: {
      color: [ "#3366FF", "#33CCFF", "#33FFCC", "#33FF66", "#FFCC33", "#ff6633", "#ff3366","#CC33FF","#6633FF" ],
    },

    timing: {
      duration: 4000,
      iterations: Infinity,
    },
  });

  const { ref: ref4 } = useWebAnimations({
    keyframes: {
      color: ["#33CCFF", "#33FFCC", "#33FF66", "#FFCC33", "#ff6633", "#ff3366","#CC33FF","#6633FF", "#3366FF" ],
    },

    timing: {
      duration: 4000,
      iterations: Infinity,
    },
  });

  const { ref: ref5 } = useWebAnimations({
    keyframes: {
      color: ["#33FFCC", "#33FF66", "#FFCC33", "#ff6633", "#ff3366","#CC33FF","#6633FF", "#3366FF","#33CCFF" ],
    },

    timing: {
      duration: 4000,
      iterations: Infinity,
    },
  });

  const { ref: ref6 } = useWebAnimations({
    keyframes: {
      color: ["#33FF66", "#FFCC33", "#ff6633", "#ff3366","#CC33FF","#6633FF", "#3366FF","#33CCFF","#33FFCC" ],
    },

    timing: {
      duration: 4000,
      iterations: Infinity,
    },
  });
  const { ref: ref7 } = useWebAnimations({
    keyframes: {
      color: ["#FFCC33", "#ff6633", "#ff3366","#CC33FF","#6633FF", "#3366FF","#33CCFF","#33FFCC","#33FF66" ],
    },

    timing: {
      duration: 4000,
      iterations: Infinity,
    },
  });
  const { ref: ref8 } = useWebAnimations({
    keyframes: {
      color: ["#ff6633", "#ff3366","#CC33FF","#6633FF", "#3366FF","#33CCFF","#33FFCC","#33FF66","#FFCC33" ],
    },

    timing: {
      duration: 4000,
      iterations: Infinity,
    },
  });

  const { ref: ref9 } = useWebAnimations({
    keyframes: {
      color: ["#ff3366","#CC33FF","#6633FF", "#3366FF","#33CCFF","#33FFCC","#33FF66","#FFCC33" ,"#ff6633"],
    },

    timing: {
      duration: 4000,
      iterations: Infinity,
    },
  });

  const { ref: ref10 } = useWebAnimations({
    keyframes: {
      color: ["#CC33FF","#6633FF", "#3366FF","#33CCFF","#33FFCC","#33FF66","#FFCC33" ,"#ff6633","#ff3366"],
    },

    timing: {
      duration: 4000,
      iterations: Infinity,
    },
  });

  const { ref: ref11 } = useWebAnimations({
    keyframes: {
      color: ["#6633FF", "#3366FF","#33CCFF","#33FFCC","#33FF66","#FFCC33" ,"#ff6633","#ff3366","#CC33FF"],
    },

    timing: {
      duration: 4000,
      iterations: Infinity,
    },
  });

  const { ref: ref12 } = useWebAnimations({
    keyframes: {
      color: [ "#3366FF","#33CCFF","#33FFCC","#33FF66","#FFCC33" ,"#ff6633","#ff3366","#CC33FF","#6633FF"],
    },

    timing: {
      duration: 4000,
      iterations: Infinity,
    },
  });


  const { ref: ref13 } = useWebAnimations({
    keyframes: {
      color: [ "#33CCFF","#33FFCC","#33FF66","#FFCC33" ,"#ff6633","#ff3366","#CC33FF","#6633FF","#3366FF"],
    },

    timing: {
      duration: 4000,
      iterations: Infinity,
    },
  });

  const { ref: ref14 } = useWebAnimations({
    keyframes: {
      color: ["#33FFCC","#33FF66","#FFCC33" ,"#ff6633","#ff3366","#CC33FF","#6633FF","#3366FF", "#33CCFF"],
    },

    timing: {
      duration: 4000,
      iterations: Infinity,
    },
  });

  const { ref: ref15 } = useWebAnimations({
    keyframes: {
      color: ["#33FF66","#FFCC33" ,"#ff6633","#ff3366","#CC33FF","#6633FF","#3366FF", "#33CCFF","#33FFCC"],
    },

    timing: {
      duration: 4000,
      iterations: Infinity,
    },
  });

  const { ref: ref16 } = useWebAnimations({
    keyframes: {
      color: ["#FFCC33" ,"#ff6633","#ff3366","#CC33FF","#6633FF","#3366FF", "#33CCFF","#33FFCC","#33FF66"],
    },

    timing: {
      duration: 4000,
      iterations: Infinity,

    },
  });




  

  return (
    <div style = {{display : 'flex' , flexDirection : 'row', boxShadow:20}}>
      <Typography style = {{ marginLeft : 0.5 , fontSize : 20 , fontFamily :'sans-serif', textShadow : '200px 200px transparent'}}  ref={ref1}>
        S
      </Typography>
      <Typography style = {{ marginLeft : 0.5 ,fontSize : 20 , fontFamily :'sans-serif', textShadow : '20px 20px transparent'}}   ref={ref2}>
        w
      </Typography>
      <Typography style = {{ marginLeft : 0.5 , fontSize : 18 , fontFamily :'sans-serif', textShadow : '20px 20px transparent'}}   ref={ref3}>
        i
      </Typography>
      <Typography style = {{  marginLeft : 0.5 ,fontSize : 20 , fontFamily :'sans-serif', textShadow : '20px 20px transparent'}}   ref={ref4}>
        t
      </Typography>
      <Typography style = {{  marginLeft : 0.5 ,fontSize : 20 , fontFamily :'sans-serif', textShadow : '20px 20px transparent'}}   ref={ref5}>
        c
      </Typography>
      <Typography style = {{  marginLeft : 0.5 ,fontSize : 20 , fontFamily :'sans-serif', textShadow : '20px 20px transparent'}}   ref={ref6}>
        h
  
      </Typography>
      &nbsp;
      <Typography style = {{  marginLeft : 0.5 ,fontSize : 20 , fontFamily :'sans-serif', textShadow : '20px 20px transparent'}}   ref={ref7}>
        e
      </Typography>
      <Typography style = {{  marginLeft : 0.5 ,fontSize : 20 , fontFamily :'sans-serif', textShadow : '20px 20px transparent'}}   ref={ref8}>
        x
      </Typography>
      <Typography style = {{ marginLeft : 0.5 , fontSize : 20 , fontFamily :'sans-serif', textShadow : '20px 20px transparent'}}   ref={ref9}>
        p
      </Typography>
      <Typography style = {{  marginLeft : 0.5 ,fontSize : 20 , fontFamily :'sans-serif', textShadow : '20px 20px transparent'}}   ref={ref10}>
        e
      </Typography>
      <Typography style = {{ marginLeft : 0.5 , fontSize : 20 , fontFamily :'sans-serif', textShadow : '20px 20px transparent'}}   ref={ref11}>
        r
      </Typography>
      <Typography style = {{  marginLeft : 0.5 ,fontSize : 20 , fontFamily :'sans-serif', textShadow : '20px 20px transparent'}}   ref={ref12}>
        i
      </Typography>
      <Typography style = {{ marginLeft : 0.5 , fontSize : 20 , fontFamily :'sans-serif', textShadow : '20px 20px transparent'}}   ref={ref13}>
        e
      </Typography>
      <Typography style = {{ marginLeft : 0.5 , fontSize : 20 , fontFamily :'sans-serif', textShadow : '20px 20px transparent'}}   ref={ref14}>
        n
      </Typography>
      <Typography style = {{ marginLeft : 0.5 , fontSize : 20 , fontFamily :'sans-serif', textShadow : '20px 20px transparent'}}   ref={ref15}>
        c
      </Typography>
      <Typography style = {{  marginLeft : 0.5 ,fontSize : 20 , fontFamily :'sans-serif', textShadow : '20px 20px transparent'}}   ref={ref16}>
        e
      </Typography>
      
      
      

    </div>
  );
}
