import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

function ProblemsList() {
  return (
    <>
      {/* <div className="w-full h-full overflow-y-scroll scrollbar-hide rounded-lg border border-white/15 shadow-sm flex flex-col gap-0.5 "> */}
      <Problems />
      {/* </div> */}
    </>
  );
}

export default ProblemsList;

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export function Problems() {
  return (
    <ScrollArea className="h-full w-full rounded-md border">
      {tags.map((tag, i) => (
        <>
          <Link href={"/problems/twosum"} className="border-b-white/5" key={tag+i}>
            <Button asChild className="flex items-center">
              <div className={`flex justify-between w-full items-center rounded-none hover:bg-white/50 gap-4 py-6 text-sm ${i === 0 ? 'bg-white/25' : 'bg-transparent'}`}>
                <span className='truncate text-xs max-w-[60%]'>
                  {i + 1}. Two Sum
                </span>
                <span>Easy</span>
              </div>
            </Button>
          </Link>
          <Separator className="bg-white/15" />
        </>
      ))}
    </ScrollArea>
  );
}
