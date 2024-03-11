import LogoButton from "@/components/problem-page/navbar/logo-button";
import { Button } from "@/components/ui/button";
import UserProfileButton from "../user-profile-button";
import ThemeChanger from "@/components/theme-changer";

function ProblemSetPageNavbar() {
  return (
    <div className="flex items-center justify-between  text-white px-2 max-w-[1800px] w-full mx-auto ">
      <div className="flex items-center gap-2">
        <LogoButton />
        <Button className="dark:bg-transparent hover:bg-white/15 text-black dark:text-white bg-white">Problems</Button>
        <Button className="dark:bg-transparent hover:bg-white/15 text-black dark:text-white bg-white">Discuss</Button>
      </div>
      <div className="flex items-center justify-between gap-1">
          <ThemeChanger />
        <div className="w-9 aspect-square place-content-center flex">
          <UserProfileButton />
        </div>
      </div>
    </div>
  );
}

export default ProblemSetPageNavbar;
