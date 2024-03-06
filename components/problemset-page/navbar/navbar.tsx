import LogoButton from "@/components/problem-page/navbar/logo-button";
import { Button } from "@/components/ui/button";
import UserProfileButton from "../user-profile-button";

function ProblemSetPageNavbar() {
  return (
    <div className="flex items-center justify-between  text-white px-2 max-w-[1800px] w-full mx-auto">
      <div className="flex items-center">
        <LogoButton />
        <Button className="bg-trnsparent hover:bg-white/15">Problems</Button>
        <Button className="bg-trnsparent hover:bg-white/15">Discuss</Button>
      </div>
      <div className="flex items-center justify-between gap-1">
        <div className="w-9 aspect-square place-content-center flex">
          <UserProfileButton />
        </div>
      </div>
    </div>
  );
}

export default ProblemSetPageNavbar;
