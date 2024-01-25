import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ProblemStatement from "@/components/problem-page/problem-statement";
import DescriptionFooter from "@/components/problem-page/problem-desc-ui/description-footer";
import CodeEditor from "@/components/problem-page/code-editor";
import { Button } from "@/components/ui/button";
import OpenedTab from "@/components/problem-page/opened-tab-manager";
import { getProblem } from "@/actions/problem/get-problem";

export default async function ProblemsPage() {

  const problem = await getProblem('two-sum', 2);
  
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
          <ProblemStatement />
          {/* <div className="rounded bg-darkGray py-2">
            <DescriptionFooter />
          </div> */}
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
              <div className="h-full w-full bg-darkGray rounded overflow-y-scroll scrollbar-hide relative">
                <CodeEditor />
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle
            withHandle
            className="hover:bg-blue-500 bg-transparent"
          />

          <ResizablePanel defaultSize={20} minSize={6}>
            <div className="flex h-full justify-center flex-col gap-y-1 rounded overflow-hidden min-h-0">
              <OpenedTab testcase={problem?.testcase || ''}/>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
