import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Main() {
  const inputRef = useRef(null);

  return (
    <>
      <section className="h-screen flex justify-center flex-col   items-center  ">
        <h2 className="text-5xl pb-10  text-white">Quiz Application</h2>

        <ul className="list-decimal pt-9 text-white font-medium  ">
          <li>You will be asked 10 Question one after another.</li>
          <li>10 points is awarded for the correct answer.</li>
          <li>Each question have three options.</li>
          <li>You can review and change answers before the quiz finish.</li>
          <li>The result will be declared at the end of the quiz.</li>
        </ul>

        <form className="pt-9  " id="form">
          <input
            className="w-80 pl-2 pr-4  h-10 rounded-md outline-none text-slate-600  "
            ref={inputRef}
            type="text"
            placeholder="Username*"
          />
        </form>

        <div className="mt-9 p-">
          <Link
            className=" px-7 py-3 rounded-full  bg-slate-600 text-white cursor-pointer  border-none hover:shadow-xl  "
            to={"quiz"}>
            Start Quiz
          </Link>
        </div>
      </section>
    </>
  );
}

export default Main;
