import Link from "next/link";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import SettingsForm from "../../components/settings-form";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "@radix-ui/react-icons";
import { currentUser } from "@/lib/current-user-server";
import { FaUser } from "react-icons/fa";
import LogoutButton from "@/components/auth/logout-button";

export default async function ProfilePage() {
    const user = await currentUser();

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen py-6 relative">
      <Link
        className="fixed right-4 bottom-4 flex items-center justify-center h-12 w-12 rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800 transition-colors duration-200 ease-in-out animate-pulse"
        href="/"
      >
        <HomeIcon className="h-6 w-6" />
      </Link>
      <main className="flex-1 overflow-y-auto px-6">
        <section className="w-full max-w-2xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>User Information</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
              <Avatar className="w-24 h-24">
                <AvatarImage alt="User Avatar" src={user?.image || ""} />
                <AvatarFallback>
                  <FaUser className="h-full w-full rounded-[50%] p-6" />
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <h3 className="text-xl font-bold capitalize">{user?.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  FullStack Developer
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Coding Stats</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 grid-cols-3">
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold">120</p>
                <p className="text-gray-500 dark:text-gray-400">
                  Total Projects
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold">5</p>
                <p className="text-gray-500 dark:text-gray-400">
                  Languages Used
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold">20</p>
                <p className="text-gray-500 dark:text-gray-400">
                  Badges Earned
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <SettingsForm />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Checkbox defaultChecked id="email-notifications" />
                <Label htmlFor="email-notifications">Email Notifications</Label>
              </div>
              <div className="flex items-center gap-2" />
            </CardContent>
          </Card>
        </section>
        <div className="w-full px-6 pt-6">
          <LogoutButton>
            <Button>Log out</Button>
          </LogoutButton>
        </div>
      </main>
    </div>
  );
}
