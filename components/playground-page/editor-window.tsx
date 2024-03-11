"use client";

import { Button } from "@/components/ui/button";
import { usePlaygroundStore, useResultStore } from "@/store/zustand";
import { toast } from "sonner";
import { getSubmissionResult } from "@/actions/submission/playground";
import CompleteEditor from "../editor";

function CodeEditorWindow() {
  const { code, updateCode, language } = usePlaygroundStore();
  const { testcases, updateError, updateResult } = useResultStore();

  const onSubmit = async () => {
    updateError(false);
    // updateResult("Execute the code to see the result");
    let res = await getSubmissionResult(code, testcases, language);
    if (res.success) {
      toast.success("Congratulations", {
        description: "Submission seems good check the result",
      });

      return updateResult(res.success);
    } else {
      toast.error("OOPS!!!", {
        description: "Something doesn't seems right, check the result!",
      });

      updateError(true);
      updateResult(res.error);
    }
  };

  const persistCode = (codes?: string) => {
    if (codes) {
      updateCode(codes, language);
    }
  };

  return (
    <>
      <CompleteEditor code={code} persistCode={persistCode} />
      <div className="absolute bottom-0 right-0 flex gap-2 flex-wrap py-1 px-1">
        <Button
          className="dark:bg-lightGray bg-backgroundBlack/50 dark:text-white text-black"
          onClick={onSubmit}
        >
          Run
        </Button>
        <Button
          className="bg-emerald-500/70 text-black dark:bg-emerald-600 dark:text-white"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </div>
    </>
  );
}
export default CodeEditorWindow;
