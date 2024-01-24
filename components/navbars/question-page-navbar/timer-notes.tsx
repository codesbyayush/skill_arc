import { LuTimer } from "react-icons/lu";
import { FaRegNoteSticky } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

type Props = {};

function TimerAndNotes({}: Props) {
  return (
    <div className="flex">
      <Button className="bg-transparent">
        <LuTimer className="h-5 w-5 hover:scale-125" />
      </Button>
      <Button className="bg-transparent">
        <FaRegNoteSticky className="h-5 w-5 hover:scale-125" />
      </Button>
    </div>
  );
}

export default TimerAndNotes;
