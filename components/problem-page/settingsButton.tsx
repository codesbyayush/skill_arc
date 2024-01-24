import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoSettingsOutline } from "react-icons/io5";

type Props = {};

function SettingsButton({}: Props) {
  return (
    <Button className="bg-transparent">
      <IoSettingsOutline className="h-5 w-5 hover:scale-125" />
    </Button>
  );
}

export default SettingsButton;
