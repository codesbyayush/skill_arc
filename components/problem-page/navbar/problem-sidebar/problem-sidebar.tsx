import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RiArrowDropRightLine } from "react-icons/ri";
import ProblemsList from "./problem-list";
import { Separator } from "@/components/ui/separator";

export function ProblemsSidebar() {
  return (
    <>
      <Sheet key="left">
        <SheetTrigger asChild>
          <Button className="text-base bg-transparent">
            <span>
              <AiOutlineMenuUnfold className="h-6 w-6 pr-2" />
            </span>
            <span> Problems List</span>
          </Button>
        </SheetTrigger>

        <SheetContent
          side={"left"}
          className="bg-darkGray text-white flex flex-col px-0 min-w-[50%] h-full pb-8"
        >
          <SheetHeader>
            <SheetTitle className="text-white px-6">
              Problem List{" "}
              <RiArrowDropRightLine className="inline h-7 w-7 align-top" />
            </SheetTitle>
          </SheetHeader>
          <Separator />
          <div className="px-6 pb-8 pt-2 w-full h-full">
            <ProblemsList />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
