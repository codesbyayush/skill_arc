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
        className=" bg-custom-secondary-950 border-4 border-custom-secondary-950 text-white"
      >
        <ResizablePanel defaultSize={90}>
          <div className="flex h-full justify-center  flex-col gap-y-1 rounded overflow-hidden">
            <div className="px-2 py-1 bg-lightGray rounded flex gap-2">
              <Button className="font-semibold px-4 py-1.5 bg-darkGray rounded w-min">
                Code
              </Button>
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
          className="bg-lightGray hover:bg-backgroundBlack/50 absolute bottom-3.5 left-2.5"
          onClick={() => consoleSize()}
        >
          Console
        </Button>
      )}
    </>
  );
}
