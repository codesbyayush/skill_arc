import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import ProblemStatement from "@/components/problem-page/problem-statement";
import { problems } from "@/testdata/corrected-examples";
import EditorPresenter from "../editor-presenter";

export default async function ProblemsPage({ problem }: { problem: problems }) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded text-white pt-2 pb-1"
    >
      <ResizablePanel defaultSize={35}>
        <div className="flex h-full justify-center  flex-col gap-y-1 rounded">
          <p className="px-2 py-1 dark:bg-lightGray bg-darkGray/25 rounded">
            <Button className="font-semibold px-4 py-1.5 dark:bg-darkGray bg-white text-black dark:text-white rounded w-min">
              Description
            </Button>
          </p>
          <ProblemStatement problem={problem} />
        </div>
      </ResizablePanel>
      <div className="h-full w-2 relative">
        <ResizableHandle className="hover:bg-blue-500 bg-gray-700  h-full hover:w-2 left-1/2 hover:left-0 absolute" />
      </div>
      <ResizablePanel defaultSize={65} className="relative">
        <EditorPresenter />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
