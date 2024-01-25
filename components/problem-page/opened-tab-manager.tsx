"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import CodeEditor from "@/components/problem-page/code-editor";
import SubmissionResult from "./submission-result";
import Testcases from "./problem-desc-ui/testcases";

function OpenedTab({ testcase }: { testcase: string }) {
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);
  return (
    <>
      <div className="px-2 py-1 bg-lightGray rounded flex gap-2">
        <Button
          className="font-semibold px-4 py-1.5 bg-darkGray rounded w-min"
          onClick={() => setIsResultDisplayed(false)}
        >
          Testcases
        </Button>
        <Button
          className="font-semibold px-4 py-1.5 bg-darkGray rounded w-min"
          onClick={() => setIsResultDisplayed(true)}
        >
          Result
        </Button>
      </div>
      <div className="h-full w-full px-4 bg-darkGray rounded overflow-y-scroll scrollbar-hide min-h-0">
        {isResultDisplayed ? (
          <SubmissionResult />
        ) : (
          <Testcases testcase={testcase} />
        )}
      </div>
    </>
  );
}

export default OpenedTab;
