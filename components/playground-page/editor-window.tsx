"use client"

import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { useEditorSettingStore, usePlaygroundStore, useResultStore } from "@/store/zustand";
import { toast } from "sonner";
import { getSubmissionResult } from "@/actions/submission/playground";
import { useTheme } from "next-themes";
import { availableLanguages } from "@/testdata/langs-available";

function CodeEditorWindow() {
  const { code, updateCode, language } = usePlaygroundStore();
  const { testcases, updateError, updateResult, codeExecuted } = useResultStore();
  const { fontsize, tabsize } = useEditorSettingStore();

  const { theme } = useTheme();

  const currentLang = (availableLanguages.filter(lang => lang.id === Number(language))[0]?.name.split(' ')[0].toLowerCase());


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
      <Editor
        language={currentLang !== 'c++' ? currentLang : 'cpp'}
        theme={theme === 'light' ? 'vs' : 'vs-dark'}
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
          fontSize: fontsize,
          tabSize: tabsize,
          dragAndDrop: true,
          formatOnPaste: true,
          wordBasedSuggestions: 'currentDocument',
          wordWrap: 'on'
        }}
        onMount={(editor) => editor.focus()}
        className="h-[100vh]"
      />
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
