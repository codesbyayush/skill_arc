import React from "react";

type Props = {};

function Constraints({}: Props) {
  return (
    <div>
      <p className="font-semibold">Constraints :</p>
        <ol className="flex flex-col gap-3 list-disc px-4 py-3 text-sm text-white/50">
          <li>
            <span className="bg-lightBlackLeetcode rounded px-2 py-1">
              {" "}
              2 {" <= "} nums.length {" <= "} 10<sup className="text-xs">4</sup>
            </span>
          </li>
          <li>
            <span className="bg-lightBlackLeetcode rounded px-2 py-1">
              {" "}
              2 {" <= "} nums.length {" <= "} 10<sup className="text-xs">4</sup>
            </span>
          </li>
          <li>
            <span className="bg-lightBlackLeetcode rounded px-2 py-1">
              {" "}
              2 {" <= "} nums.length {" <= "} 10<sup className="text-xs">4</sup>
            </span>
          </li>
          <li>
            <span className="bg-lightBlackLeetcode rounded px-2 py-1">
              {" "}
              2 {" <= "} nums.length {" <= "} 10<sup className="text-xs">4</sup>
            </span>
          </li>
        </ol>
    </div>
  );
}

export default Constraints;
