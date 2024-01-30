import { Button } from "@/components/ui/button";
import { IoSettingsOutline } from "react-icons/io5";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";


import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SettingsForm from "@/app/(protected)/_component/settings-form";

function SettingsButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-transparent px-2 py-0">
          <IoSettingsOutline className="h-6 w-6 hover:scale-125" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md" >
        <Card>
          <CardHeader>
            <h1 className="text-center w-full text-2xl font-bold">
              ⚙️ Settings
            </h1>
          </CardHeader>
          <CardContent>
            <SettingsForm />
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}

export default SettingsButton;
