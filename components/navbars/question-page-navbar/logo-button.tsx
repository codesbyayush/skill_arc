import { SiLeetcode } from "react-icons/si";
import { Button } from "@/components/ui/button";

function LogoButton() {
  return (
    <Button className="bg-transparent">
      <SiLeetcode className="h-5 w-5 hover:scale-105" />
    </Button>
  );
}

export default LogoButton;
