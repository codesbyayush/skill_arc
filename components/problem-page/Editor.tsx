"use client";

import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { submitCode } from "@/actions/problem/submit-code";
import {
  starterCode,
  useEditorStore,
  useResultStore,
} from "@/store/zustand";
import { useParams } from "next/navigation";
import { toast } from "sonner";

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

  const persistCode = (code: string|undefined) => {
    if (params.id && code) {
      update(code, params.id as any);
    }
  };

 
  
  

  return (
    <>
      <Editor
        language={"java"}
        theme={'vs-dark'}
        defaultValue="// some comment"
        value={code}
        height="100%"
        width="100%"
        onChange={persistCode}
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
        className=""
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
