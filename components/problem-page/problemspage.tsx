import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import ProblemStatement from "@/components/problem-page/problem-statement";
import OpenedTab from "@/components/problem-page/opened-tab-manager";
import { problems } from "@/testdata/all-problems";
import Editor from "@/components/problem-page/Editor";

export default async function ProblemsPage({ problem }: { problem: problems }) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded text-white pt-2 pb-1 gap-x-1.5"
    >
      <ResizablePanel defaultSize={35}>
        <div className="flex h-full justify-center  flex-col gap-y-1 rounded">
          <p className="px-2 py-1 bg-lightGray rounded">
            <Button className="font-semibold px-4 py-1.5 bg-darkGray rounded w-min">
              Description
            </Button>
          </p>
          <ProblemStatement problem={problem} />
        </div>
      </ResizablePanel>
      <ResizableHandle
        withHandle
        className="hover:bg-blue-500 bg-transparent"
      />
      <ResizablePanel defaultSize={65}>
        <ResizablePanelGroup direction="vertical" className="gap-y-1.5">
          <ResizablePanel defaultSize={80}>
            <div className="flex h-full justify-center  flex-col gap-y-1 rounded overflow-hidden">
              <div className="px-2 py-1 bg-lightGray rounded flex gap-2">
                <Button className="font-semibold px-4 py-1.5 bg-darkGray rounded w-min">
                  Code
                </Button>
              </div>
              <div className="h-full w-full bg-darkGray rounded overflow-y-scroll   relative">
                <Editor />
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle
            withHandle
            className="hover:bg-blue-500 bg-transparent"
          />

          <ResizablePanel defaultSize={20} minSize={6}>
            <div className="flex h-full justify-center flex-col gap-y-1 rounded overflow-hidden min-h-0">
              <OpenedTab testcase={""} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
