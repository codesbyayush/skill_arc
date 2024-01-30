import LogoButton from "@/components/problem-page/navbar/logo-button";
import { UserButton } from "@/components/auth/user-button";
import SettingsButton from "@/components/settings-button";
import ThemeChanger from "@/components/theme-changer";
import TimerAndNotes from "@/components/problem-page/navbar/timer-notes";
import StreakButton from "@/components/problem-page/navbar/streak-button";
import { ProblemsSidebar } from "@/components/problem-page/navbar/problem-sidebar/problem-sidebar";
import UserProfileButton from "@/components/problemset-page/user-profile-button";

function ProblemPageNavbar() {
  return (
    <div className="flex items-center justify-between  text-white px-2 ">
      <div className="flex items-center">
        <LogoButton />
        <ProblemsSidebar />
      </div>
      {/* <div className="flex items-center">
        <TimerAndNotes />
      </div> */}
      <div className="flex items-center justify-between gap-1">
        <SettingsButton />
        {/* <StreakButton /> */}
        {/* <ThemeChanger /> */}
        <div className="w-9 aspect-square place-content-center flex">
          <UserProfileButton />
        </div>
      </div>
    </div>
  );
}

export default ProblemPageNavbar;
