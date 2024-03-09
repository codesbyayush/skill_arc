"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import OpenedTab from "@/components/problem-page/opened-tab-manager";

import Editor from "@/components/playground-page/editor-window";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LanguageSelector } from "@/components/test-components/language-selector";
import EditorSettings from "@/components/test-components/editor-settings";

export default function Playground() {
  const [collapsed, setCollapsed] = useState(false);
  const [collapsedSize, setCollapsedSize] = useState(0);

  function consoleSize(val = 40) {
    if (val <= 0) {
      setCollapsed(true);
      setCollapsedSize(0);
    } else {
      setCollapsed(false);
      setCollapsedSize(val);
    }
  }
  return (
    <>
      <ResizablePanelGroup
        direction="vertical"
        className=" dark:bg-darkGray bg-white border-4  text-white"
      >
        <ResizablePanel defaultSize={90} minSize={40}>
          <div className="flex h-full justify-center  flex-col gap-y-1 rounded overflow-hidden">
            <div className="px-2 py-1 dark:bg-lightGray bg-gray-200 rounded flex gap-2 justify-between">
              <LanguageSelector />
              <EditorSettings />
            </div>
            <div className="h-full w-full bg-darkGray rounded overflow-y-scroll relative">
              <Editor />
            </div>
          </div>
        </ResizablePanel>

        <div className="relative h-2">
          <ResizableHandle className="hover:bg-blue-500 bg-gray-700 hover:min-h-2 absolute top-1/2 hover:top-0" />
        </div>

        <ResizablePanel
          defaultSize={10}
          onResize={(val) => consoleSize(val)}
          collapsible
          collapsedSize={collapsedSize}
        >
          <div className="flex h-full justify-center flex-col gap-y-1 rounded overflow-hidden min-h-0">
            <OpenedTab testcase={""} />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      {collapsed && (
        <Button
          className="dark:bg-lightGray bg-backgroundBlack/50 absolute bottom-4 left-2.5 text-black dark:text-white"
          onClick={() => consoleSize()}
        >
          Console
        </Button>
      )}
    </>
  );
}
