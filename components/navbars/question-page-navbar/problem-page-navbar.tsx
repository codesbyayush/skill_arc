import LogoButton from "@/components/navbars/question-page-navbar/logo-button";
import ProblemListSidebarButton from "@/components/problem-page/sidebar-problem-list-button";
import TimerAndNotes from "@/components/navbars/question-page-navbar/timer-notes";
import UserButton from "@/components/navbars/question-page-navbar/userButton";
import StreakButton from "@/components/navbars/question-page-navbar/streak-button";
import SettingsButton from "@/components/problem-page/settingsButton";

function ProblemPageNavbar() {
  return (
    <div className="flex items-center justify-between  text-white px-2">
      <div className="flex items-center">
        <LogoButton />
        <ProblemListSidebarButton />
      </div>
      <div>
        <TimerAndNotes />
      </div>
      <div className="flex items-center justify-between gap-1">
        <SettingsButton />
        <UserButton />
        <StreakButton />
      </div>
    </div>
  );
}

export default ProblemPageNavbar;
