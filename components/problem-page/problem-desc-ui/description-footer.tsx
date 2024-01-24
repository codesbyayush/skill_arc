import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineFeedback } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";

function DescriptionFooter() {
  return (
    <>
      <div className="flex items-center justify-evenly h-full gap-1 px-2 overflow-x-scroll scrollbar-hide">
        <AiOutlineLike className="h-5 w-5 hover:scale-125" />
        <AiOutlineDislike className="h-5 w-5 hover:scale-125" />
        <FaRegComment className="h-5 w-5 hover:scale-125" />
        <FaRegStar className="h-5 w-5 hover:scale-125" />
        <FiExternalLink className="h-5 w-5 hover:scale-125" />
        <MdOutlineFeedback className="h-5 w-5 hover:scale-125" />
      </div>
    </>
  );
}

export default DescriptionFooter;
