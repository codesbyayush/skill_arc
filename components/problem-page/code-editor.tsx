"use client";

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { java } from "@codemirror/lang-java";

import { EditorView } from "@codemirror/view";
import { copilot } from "@uiw/codemirror-theme-copilot";
import { Button } from "@/components/ui/button";
import { submitCode } from "@/actions/problem/submit-code";
import { useEditorStore, useResultStore } from '@/store/zustand'


function CodeEditor() {

  const {code, update } = useEditorStore();
  const {updateError, updateResult} = useResultStore();


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
          onChange={update}
          className="w-full scrollbar-hide overflow-y-scroll h-full text-wrap font-medium"
        />
        <div className="absolute bottom-0 right-0 flex gap-2 flex-wrap py-1 px-1">
          <Button className="bg-lightGray hover:bg-backgroundBlack/50" onClick={async () => {
            let res = await submitCode(code, 'twosum');
            console.log(res)
            if(res.result) {
              console.log(res)
              let res1 = await JSON.parse(res?.result)
              if(res.error){
                updateError();
                updateResult(res1.status?.description)
              }
              console.log(res1)
            }
            else console.log(res.error);
          }
          }>
            Run
          </Button>
          {/* <Button className="bg-emerald-500 hover:bg-emerald-800">
            Submit
          </Button> */}
        </div>
    </>
  );
}
export default CodeEditor;
