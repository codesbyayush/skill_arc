
import { SiLeetcode } from "react-icons/si";
import { Button } from "@/components/ui/button";

function LogoButton() {
  return (
    <Button>
      <SiLeetcode className="h-5 w-5 hover:scale-125" />
    </Button>
  );
}

export default LogoButton;
