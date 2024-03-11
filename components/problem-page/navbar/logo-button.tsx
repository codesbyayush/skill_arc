import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from '@/components/icons/logo'

function LogoButton() {
  return (
    <Link href={'/'} >
      <Button className="dark:bg-transparent dark:hover:bg-transparent hover:bg-white rounded bg-white">
        <Logo />
      </Button>
    </Link>
  );
}

export default LogoButton;
