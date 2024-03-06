import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from '@/components/icons/logo'

function LogoButton() {
  return (
    <Link href={'/'}>
      <Button className="bg-transparent rounded">
        <Logo />
      </Button>
    </Link>
  );
}

export default LogoButton;
