import { Button } from "@/components/ui/button";
import React from "react";
import { AiOutlineFire } from "react-icons/ai";

function StreakButton() {
  return (
    <Button className="">
      <AiOutlineFire className="h-5 w-5 hover:scale-125" />
    </Button>
  );
}

export default StreakButton;
