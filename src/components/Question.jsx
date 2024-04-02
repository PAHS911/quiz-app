import React, { useEffect, useState } from "react";
import Data from "../database/Data";

const Question = () => {
  const [checked, setChecked] = useState(undefined);

  const question= Data [0]

  useEffect(( ) =>{
    console.log(question)
  })

  function onSelect() {
    console.log("radio button change");
  }

  return (
    <>
    
      <h2 className="text-white pt-9  text-2xl">{question.question}</h2>

      <ul key={question.id}>
       {
        question.options.map((q, i) => (
          <li key={i} className="pt-9 ">
          <input className="  flex-row  "
            type="radio"
            value={checked}
            name="options"
            id={`q${i}-option`}
            onChange={onSelect}
            
          />

          <label className="text-white px-2" htmlFor={`q${i}-option`}>
            {q}
          </label>
          
        </li>
        ))
       }
      </ul>
    </>
  );
};

export default Question;
