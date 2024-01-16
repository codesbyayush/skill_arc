import { Button } from "@/components/ui/button";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { ProblemsSidebar } from "../navbars/question-page-navbar/problem-sidebar/problem-sidebar";

type Props = {};

function ProblemListSidebarButton({}: Props) {
  return (
    <>
      <ProblemsSidebar />
      <Button>
        <GrFormPrevious />
      </Button>
      <Button>
        <GrFormNext />
      </Button>
    </>
  );
}

export default ProblemListSidebarButton;
