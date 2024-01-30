"use client";

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { java } from "@codemirror/lang-java";

import { EditorView } from "@codemirror/view";
import { copilot } from "@uiw/codemirror-theme-copilot";
import { Button } from "@/components/ui/button";
import { submitCode } from "@/actions/problem/submit-code";
import { starterCode, useEditorStore, useResultStore } from "@/store/zustand";
import { useParams } from "next/navigation";
import { toast } from "sonner";

function CodeEditor() {
  const { code, update, question, resetCode } = useEditorStore();
  const { testcases, updateError, updateResult } = useResultStore();

  const params = useParams();

  const onSubmit = async () => {
    updateError(false);
    let res = await submitCode(code, "twosum", testcases);


     
    if (res.success) {
      
      toast.success("Congratulations", {
        description: "Submission seems good check the result",
        // action: {
        //   label: "Undo",
        //   onClick: () => console.log("Undo"),
        // },
      });

      return updateResult(res.success);
    } else {

      toast.error("OOPS!!!", {
        description: "Something doesn't seems right, check the result!",
        // action: {
        //   label: "",
        //   onClick: () => console.log("Undo"),
        // },
      });

      updateError(true);
      updateResult(res.error)
    }
  };

  const persistCode = (code: string) => {
    if(params.id){
      update(code, params.id as any)
    }
  }
if (params.id !== question) {
  update(starterCode, params.id);
} else 
  return (
    <>
      <CodeMirror
        value={code}
        theme={[copilot]}
        height="100%"
        maxHeight="100%"
        width="100%"
        maxWidth="100%"
        extensions={[java(), EditorView.lineWrapping]}
        indentWithTab
        onChange={persistCode}
        className="w-full scrollbar-hide overflow-y-scroll h-full text-wrap font-medium text-base"
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
export default CodeEditor;
