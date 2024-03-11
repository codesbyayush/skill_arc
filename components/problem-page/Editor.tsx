"use client";

import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { submitCode } from "@/actions/problem/submit-code";
import { useEditorStore, useResultStore } from "@/store/zustand";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import CompleteEditor from "../editor";

function CodeEditorWindow() {
  const { code, update } = useEditorStore();
  const { testcases, updateError, updateResult } = useResultStore();

  const params = useParams();

  const onSubmit = async () => {
    updateError(false);
    let res = await submitCode(code, "twosum", testcases);
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

  const persistCode = (code: string | undefined) => {
    if (params.id && code) {
      update(code, params.id as any);
    }
  };

  return (
    <>
      <CompleteEditor code={code} persistCode={persistCode} />
      <div className="absolute bottom-0 right-0 flex gap-2 flex-wrap py-1 px-1">
        <Button
          className="bg-lightGray hover:bg-backgroundBlack/50"
          onClick={onSubmit}
        >
          Run
        </Button>
        <Button
          className="bg-emerald-500 hover:bg-emerald-800"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </div>
    </>
  );
}
export default CodeEditorWindow;
