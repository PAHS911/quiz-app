import React from "react";
import './Question'
import Question from "./Question";

const Quiz = () => {
  function onNext(){
    console.log('next')
  }
  
  function onPrev(){
    console.log('prev')
  }
  return (
    <section className="h-screen flex justify-center flex-col   items-center  ">
      <h2 className="text-5xl pb-10  text-white">Quiz Application</h2>


      <Question/>


      <div className="w-80 flex justify-between">
        <button className="" onClick={onPrev}>Prev</button>
        <button className="" onClick={onNext}>Next</button>
      </div>
    </section>
  );
};

export default Quiz;
