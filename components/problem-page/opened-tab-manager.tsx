"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import SubmissionResult from "./submission-result";
import Testcases from "./problem-desc-ui/testcases";
import { cn } from "@/lib/utils";

function OpenedTab({ testcase }: { testcase: string }) {
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);
  return (
    <>
      <div className="px-2 py-1 dark:bg-lightGray bg-darkGray/25 rounded flex gap-2">
        <Button
          variant={"outline"}
          className={cn(
            "font-semibold px-4 py-1.5 dark:bg-darkGray text-black dark:text-white w-min ",
            !isResultDisplayed && "ring-1 ring-gray-500"
          )}
          onClick={() => setIsResultDisplayed(false)}
        >
          Input
        </Button>
        <Button
          variant={"outline"}
          className={cn(
            "font-semibold px-4 py-1.5 dark:bg-darkGray text-black dark:text-white w-min ",
            isResultDisplayed && "ring-1 ring-gray-500"
          )}
          onClick={() => setIsResultDisplayed(true)}
        >
          Result
        </Button>
      </div>
      <div className="h-full w-full px-4 dark:bg-darkGray bg-white rounded overflow-y-scroll text-black dark:text-white   min-h-0">
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
