"use client";

import { useEditorSettingStore } from "@/store/zustand";
import { ResetIcon } from "@radix-ui/react-icons";
import { usePlaygroundStore } from "@/store/zustand";
import { stcode } from "@/testdata/starterCode";
import { Button } from "@/components/ui/button";

function ResetCode({ resetCode }: { resetCode: () => void }) {
  return (
    <Button
      variant="outline"
      className="dark:bg-transparent bg-white outline-none border-0 rounded-none"
      onClick={() => resetCode()}
    >
      <ResetIcon className="h-5 w-5 text-black dark:text-white" />
    </Button>
  );
}

export default ResetCode;
