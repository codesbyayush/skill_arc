import { Button } from "@/components/ui/button";
import Link from "next/link";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getAvailableProblems } from "@/actions/problem/get-available-problems";
import { problems } from "@/testdata/corrected-examples";

async function ProblemsList() {
  const problems = (await getAvailableProblems()).result.filter((_: problems, ind:number) => ind < 50 );
  return (
    <ScrollArea className="h-full w-full rounded-md border dark:border-white/70 ">
      {problems.map((problem: problems, i: number) => {
          return (
            <>
              <Link
                href={`/problems/${problem.id}`}
                className="border-b-white/5"
                key={problem.id}
              >
                <Button asChild className="flex items-center">
                  <div
                    className={`flex justify-between w-full items-center rounded-none hover:bg-white/50 gap-4 py-6 text-sm ${
                      i === 0 ? "bg-white/25" : "bg-transparent"
                    }`}
                  >
                    <span className="truncate text-xs max-w-[60%] text-black dark:text-white">
                      {i + 1}. {problem.title}
                    </span>
                    <span className="text-emerald-500">Easy</span>
                  </div>
                </Button>
              </Link>
              <Separator className="bg-white/15" />
            </>
          );
      })}
    </ScrollArea>
  );
}

export default ProblemsList;
