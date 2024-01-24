import LogoButton from "@/components/navbars/question-page-navbar/logo-button";
import ProblemListSidebarButton from "@/components/problem-page/sidebar-problem-list-button";
import TimerAndNotes from "@/components/navbars/question-page-navbar/timer-notes";
import {UserButton} from "@/components/auth/user-button";
import StreakButton from "@/components/navbars/question-page-navbar/streak-button";
import SettingsButton from "@/components/problem-page/settingsButton";

function ProblemPageNavbar() {
  return (
    <div className="flex items-center justify-between  text-white px-2 ">
      <div className="flex items-center">
        <LogoButton />
        <ProblemListSidebarButton />
      </div>
      {/* <div className="flex items-center">
        <TimerAndNotes />
      </div> */}
      <div className="flex items-center justify-between gap-1">
        <SettingsButton />
        {/* <StreakButton /> */}
        <div className="w-9 aspect-square place-content-center flex">
          <UserButton />
        </div>
      </div>
    </div>
  );
}

export default ProblemPageNavbar;
