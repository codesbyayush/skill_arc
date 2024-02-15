"use client"

import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { usePlaygroundStore, useResultStore } from "@/store/zustand";
import { toast } from "sonner";
import { getSubmissionResult } from "@/actions/submission/playground";

function CodeEditorWindow() {
  const { code, update, language } = usePlaygroundStore();
  const { testcases, updateError, updateResult } = useResultStore();

  const onSubmit = async () => {
    updateError(false);
    let res = await getSubmissionResult(code, testcases, 62);
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
      update(codes, language);
    }
  };

  return (
    <>
      <Editor
        language={"java"}
        theme={"vs-dark"}
        defaultValue="// some comment"
        value={code}
        height="100%"
        width="100%"
        onChange={(codes) => persistCode(codes)}
        options={{
          cursorStyle: 'line-thin',
          automaticLayout: true,
          scrollbar: {
            verticalScrollbarSize: 5,
            verticalSliderSize: 5
          },
          minimap: {
            autohide: true,
          },
          fontSize:18
        }}
        onMount={(editor) => editor.focus()}
        className="h-[100vh]"
      />
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
