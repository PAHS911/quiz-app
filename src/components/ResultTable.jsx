import React from "react";

const ResultTable = () => {
  return (
    <div className="text-white pt-10">
    <table className="table-auto w-full">
      <thead className="text-center px-4">
        <tr className="border">
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Attempts</th>
          <th className="border px-4 py-2">Earn Points</th>
          <th className="border px-4 py-2">Result</th>
        </tr>
      </thead>
      <tbody className="">
        <tr className="">
          <td className="border px-4 py-2">PAHS</td>
          <td className="border px-4 text-center py-2">03</td>
          <td className="border px-4 text-center py-2">20</td>
          <td className="border px-4 py-2">Passed</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default ResultTable;
