import React, { useState } from "react";

const Question = () => {
  const [checked, setChecked] = useState(undefined);

  function onSelect() {
    console.log("radio button change");
  }

  return (
    <>
    
      <h2 className="text-white pt-9 text-2xl">Simple Question 1</h2>

      <ul className="">
        <li className="pt-9 ">
          <input className="  flex-row  "
            type="radio"
            value={checked}
            name="options"
            id="q1-option"
            onChange={onSelect}
            
          />

          <label className="text-white px-2" htmlFor="q1-option ">
            Option
          </label>
          <div className="check checked"></div>
        </li>
      </ul>
    </>
  );
};

export default Question;
