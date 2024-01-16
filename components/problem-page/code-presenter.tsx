"use client";

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { java } from "@codemirror/lang-java";

import { EditorView } from "@codemirror/view";
import { copilot } from "@uiw/codemirror-theme-copilot";

let myTheme = EditorView.theme(
  {
    "&": {
      backgroundColor: "#242424",
    },
    "&.cm-focused .cm-cursor": {
      borderLeftColor: "#242424",
    },
    "&.cm-focused .cm-selectionBackground, ::selection": {
      backgroundColor: "#242424",
    },
    ".cm-gutters": {
      backgroundColor: "#242424",
      border: "none",
    },
  },
  { dark: true }
);

function CodePresenter() {
  const [value, setValue] = React.useState(`class Solution{
    public int[] twoSum(int[] nums, int target) {
    
    }
}`);
  const onChange = React.useCallback((val: string, viewUpdate: any) => {
    console.log("val:", val);
    console.log(viewUpdate);
    setValue(val);
  }, []);
  return (
    <CodeMirror
      value={value}
      theme={[copilot]}
      height="100%"
      width="100%"
      maxWidth="100%"
      extensions={[java(), EditorView.lineWrapping]}
      indentWithTab
      onChange={onChange}
      className="w-full scrollbar-hide h-full text-wrap font-medium"
    />
  );
}
export default CodePresenter;
