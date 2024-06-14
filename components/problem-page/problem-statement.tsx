import React from "react";
import Examples from "@/components/problem-page/problem-desc-ui/examples";
import Constraints from "@/components/problem-page/problem-desc-ui/constraints";
import { problems } from "@/testdata/corrected-examples";

type Props = { problem: problems };

function ProblemStatement({ problem }: Props) {
  return (
    <div className="h-full w-full px-4 py-5 dark:bg-darkGray bg-white rounded overflow-y-scroll flex flex-col gap-5 text-black dark:text-white">
      <h3 className="text-xl font-semibold">
        {problem?.title || "Some Inconsistency found in data"}
      </h3>
      <div
        className="flex flex-col gap-2"
        dangerouslySetInnerHTML={{
          __html: problem?.problemStatement
            .split("\n")
            .map((line) => `<p> ${line} </p>`)
            .join(""),
        }}
      ></div>
      <Examples examples={problem?.examples} />
      {/* <Constraints /> */}
    </div>
  );
}

export default ProblemStatement;
