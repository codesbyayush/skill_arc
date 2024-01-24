import LogoButton from "@/components/navbars/question-page-navbar/logo-button";
import { UserButton } from "@/components/auth/user-button";
import StreakButton from "@/components/navbars/question-page-navbar/streak-button";
import SettingsButton from "@/components/problem-page/settingsButton";
import { Button } from '@/components/ui/button'

function ProblemSetPageNavbar() {
  return (
    <div className="flex items-center justify-between  text-white px-2 ">
      <div className="flex items-center">
        <LogoButton />
        <Button className="bg-trnsparent hover:bg-white/15">Explore</Button>
        <Button className="bg-trnsparent hover:bg-white/15">Problems</Button>
        <Button className="bg-trnsparent hover:bg-white/15">Contest</Button>
        <Button className="bg-trnsparent hover:bg-white/15">Discuss</Button>
      </div>
      <div className="flex items-center justify-between gap-1">
        <SettingsButton />
        <StreakButton />
        <div className="w-9 aspect-square place-content-center flex">
          <UserButton />
        </div>
      </div>
    </div>
  );
}

export default ProblemSetPageNavbar;
