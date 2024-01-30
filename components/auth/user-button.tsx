"use client";

import { useCurrentUser } from "@/hooks/use-current-session";
import { AvatarImage, Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { FaUser } from "react-icons/fa";
import LogoutButton from "./logout-button";
import { Button } from "../ui/button";
import { ExitIcon } from "@radix-ui/react-icons";

export const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={user?.image || ""} className="rounded" />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="h-8 w-8 bg-sky-500/30 rounded-[50%] p-2" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="py-6 px-6 z-50 bg-custom-secondary-950 rounded"
      >
        <DropdownMenuLabel className="">{user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>👨‍💼 Profile </DropdownMenuItem>
        <DropdownMenuItem>📞 Contact </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogoutButton>
            <Button
              variant="outline"
              className="flex gap-2 shadow-sm border bg-backgroundBlack font-semibold w-full"
            >
              <ExitIcon /> <span>Logout </span>
            </Button>
          </LogoutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
