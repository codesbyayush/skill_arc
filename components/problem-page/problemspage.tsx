import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ProblemStatement from "@/components/problem-page/problem-statement";
import DescriptionFooter from "./description-footer";
import CodePresenter from "./code-presenter";
import Testcases from "./testcases";
import { Button } from "../ui/button";

export default function ProblemsPage() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded text-white pt-2 pb-1 gap-2"
    >
      <ResizablePanel defaultSize={35}>
        <div className="flex h-full justify-center  flex-col gap-y-1 rounded">
          <p className="px-2 py-2.5 bg-lightBlackLeetcode rounded">
            <span className="font-semibold px-4 py-2 bg-backgroundLeetcode rounded w-min">
              Description
            </span>
          </p>
          <ProblemStatement />
          <div className="rounded bg-backgroundLeetcode py-2">
            <DescriptionFooter />
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={65}>
        <ResizablePanelGroup direction="vertical" className="gap-2 ">
          <ResizablePanel defaultSize={80}>
            <div className="flex h-full justify-center  flex-col gap-y-1 rounded overflow-hidden">
              <p className="px-2 py-2.5 bg-lightBlackLeetcode rounded">
                <span className="font-semibold px-4 py-2 bg-backgroundLeetcode rounded w-min">
                  Code
                </span>
              </p>
              <div className="h-full w-full bg-backgroundLeetcode rounded overflow-y-scroll scrollbar-hide relative">
                <CodePresenter />
                <div className="absolute bottom-0 right-0 flex gap-2 flex-wrap py-1 px-1">
                  <Button className="bg-lightBlackLeetcode hover:bg-blackLeetcode/50">Run</Button>
                  <Button className="bg-emerald-500 hover:bg-emerald-800">Submit</Button>
                </div>
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle />

          <ResizablePanel defaultSize={20}>
            <div className="flex h-full justify-center  flex-col gap-y-1 rounded overflow-hidden">
              <p className="px-2 py-2.5 bg-lightBlackLeetcode rounded">
                <span className="font-semibold px-4 py-2 bg-backgroundLeetcode rounded w-min">
                  Testcases
                </span>
              </p>
              <div className="h-full w-full px-4 py-6 bg-backgroundLeetcode rounded overflow-y-scroll scrollbar-hide min-h-0">
                <Testcases />
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
