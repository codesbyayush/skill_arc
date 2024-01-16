import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RxAvatar } from "react-icons/rx";

type Props = {};

function UserButton({}: Props) {
  return (
    <Button className="">
      <RxAvatar className="h-5 w-5 hover:scale-125" />
    </Button>
  );
}

export default UserButton;
