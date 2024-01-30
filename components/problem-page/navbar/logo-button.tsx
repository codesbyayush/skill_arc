import { SiLeetcode } from "react-icons/si";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function LogoButton() {
  return (
    <Link href={'/'}>
      <Button className="bg-transparent">
        <SiLeetcode className="h-5 w-5 hover:scale-105" />
      </Button>
    </Link>
  );
}

export default LogoButton;
