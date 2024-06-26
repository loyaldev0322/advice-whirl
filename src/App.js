import { useEffect, useState } from "react";

import "./App.css";
// import { useEffect, useState } from "react";
import dice from "./dice.png";
// import divider from "./divider.png";

export default function App() {
const [advice,setAdvice] = useState("");  
const [adviceId,setAdviceId] = useState(0);

  async function getAdvice()
  {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json()
    setAdvice(data.slip.advice);
    setAdviceId(data.slip.id);
  }

  useEffect(function(){
    getAdvice();
  },[]);

  return (
    <div >
      <div className="advice-generator">
      <div className="advice-generator-output">
        <span className="advice-generator-advice-number">
          ADVICE #{adviceId}
        </span>
        <q className="advice-generator-quote">{advice}</q>

        <picture className="advice-generator-divider">
          {/* <img src={} alt="div" style={{ width: "10rem" }} /> */}
        </picture>
      </div>
      <button onClick={getAdvice} className="advice-generator-btn">
        <img
          src={dice}
          style={{ width: "4rem" }}
          alt="dice img"
          className="advice-generator-btn-img"
        />
      </button>
    </div>
    </div>
  );
}


