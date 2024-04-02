import React from "react";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";

const Result = () => {
  function onRestart() {
    console.log("restart");
  }
  return (
    <>
      <section className="h-screen  flex w-full justify-center flex-col   items-center  ">
        <h2 className="text-5xl pb-10  text-white border-b">
          Quiz Application
        </h2>

        <div className="text-white pt-10 pb-9 w-[350.250px]   ">
          <div className=" flex  justify-between">
            <span className="">Username</span>
            <span className="">PAHS</span>
          </div>
          <div className="flex  justify-between">
            <span className="">Total Quiz Points :</span>
            <span className="flex  justify-between">50</span>
          </div>
          <div className="flex  justify-between">
            <span className="">Total Questions :</span>
            <span className="">05</span>
          </div>
          <div className="flex  justify-between">
            <span className="">Total Attempts :</span>
            <span className="">03</span>
          </div>
          <div className="flex  justify-between">
            <span className="">Total Earn Points :</span>
            <span className="">03</span>
          </div>
          <div className="flex  justify-between">
            <span className="">Quiz Result</span>
            <span className="">Passed</span>
          </div>
        </div>

        <div className="">
          <Link
            onClick={onRestart}
            to={"/"}
            className="   px-7 py-3 rounded-full  bg-white text-black cursor-pointer  border-none">
            Restart
          </Link>
        </div>

        {/**result table */}
        <ResultTable />
      </section>
    </>
  );
};

export default Result;
