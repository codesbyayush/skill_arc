import React from "react";
import Examples from "@/components/problem-page/problem-desc-ui/examples";
import Constraints from "@/components/problem-page/problem-desc-ui/constraints";
import { getProblem } from "@/actions/problem/get-problem";
import { problems } from "@/testdata/all-problems";

type Props = { problem: problems }

async function ProblemStatement({ problem }: Props ) {
  return (
    <div className="h-full w-full px-4 py-5 bg-darkGray rounded overflow-y-scroll scrollbar-hide flex flex-col gap-5">
      <h3 className="text-xl font-semibold">{problem?.title || "Some Inconsistency found in data"}</h3>
      <div
        className="flex flex-col gap-2"
        dangerouslySetInnerHTML={{
          __html: problem?.problemStatement
            .split("\n")
            .map((line) => `<p> ${line} </p>`)
            .join(''),
        }}
      ></div>
      <Examples examples={problem?.examples}/>
      <Constraints />
      {/* <p className="text-sm">
        <span className="font-semibold text-base">Follow-up :</span>
        &nbsp;&nbsp; Can you come up with an algorithm that is less than O(n
        <sup>2</sup>) time complexity?
      </p> */}
      <p />
      {/* <hr /> */}
      {/* <AboutProblem /> */}
    </div>
  );
}

export default ProblemStatement;
