"use client";

import Editor from "@monaco-editor/react";
import { useEditorSettingStore } from "@/store/zustand";
import { useTheme } from "next-themes";
import { availableLanguages } from "@/testdata/langs-available";

function CompleteEditor({
  persistCode,
  code,
}: {
  persistCode: (a: string | undefined) => void;
  code: string;
}) {
  const { fontsize, tabsize, language } = useEditorSettingStore();
  const { theme } = useTheme();

  const currentLang = availableLanguages
    .filter((lang) => lang.id === Number(language))[0]
    ?.name.split(" ")[0]
    .toLowerCase();

  return (
    <Editor
      language={currentLang !== "c++" ? currentLang : "cpp"}
      theme={theme === "light" ? "vs" : "vs-dark"}
      defaultValue="// some comment"
      value={code}
      height="100%"
      width="100%"
      onChange={(codes) => persistCode(codes)}
      options={{
        cursorStyle: "line-thin",
        automaticLayout: true,
        scrollbar: {
          verticalScrollbarSize: 5,
          verticalSliderSize: 5,
        },
        minimap: {
          autohide: true,
        },
        fontSize: fontsize,
        tabSize: tabsize,
        dragAndDrop: true,
        formatOnPaste: true,
        wordBasedSuggestions: "currentDocument",
        wordWrap: "on",
      }}
      onMount={(editor) => editor.focus()}
      className="h-[100vh]"
    />
  );
}

export default CompleteEditor;
