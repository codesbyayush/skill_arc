import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import OpenedTab from "@/components/problem-page/opened-tab-manager";

import Editor from "@/components/playground-page/editor-window";
import { Button } from "@/components/ui/button";

export default function Playground() {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="gap-y-1.5 bg-custom-secondary-950 border-4 border-custom-secondary-950 text-white"
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

      <ResizableHandle
        withHandle
        className="hover:bg-blue-500 bg-transparent"
      />

      <ResizablePanel defaultSize={10} minSize={6}>
        <div className="flex h-full justify-center flex-col gap-y-1 rounded overflow-hidden min-h-0">
          <OpenedTab testcase={""} />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
