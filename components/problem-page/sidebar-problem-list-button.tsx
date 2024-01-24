import { Button } from "@/components/ui/button";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { ProblemsSidebar } from "@/components/navbars/question-page-navbar/problem-sidebar/problem-sidebar";


function ProblemListSidebarButton() {
  return (
    <>
      <ProblemsSidebar />
      {/* <Button className="bg-transparent">
        <GrFormPrevious />
      </Button>
      <Button className="bg-transparent">
        <GrFormNext />
      </Button> */}
    </>
  );
}

export default ProblemListSidebarButton;
