"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useEditorSettingStore } from "@/store/zustand";
import { IoSettingsOutline } from "react-icons/io5";
import ThemeChanger from "@/components/theme-changer";
import ResetCode from "./reset-code";

const availFontsizes = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const availTabsizes = [2, 3, 4];

function EditorSettings() {
  const { fontsize, tabsize, updateEditorSettings } = useEditorSettingStore();

  return (
    <div className="dark:bg-darkGray bg-white flex h-full items-center rounded overflow-hidden">
      <ResetCode />
      <div className="dark:bg-darkGray bg-white gap-4 flex h-full items-center rounded">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="dark:bg-transparent bg-white outline-none border-0 rounded-none"
            >
              <IoSettingsOutline className="h-5 w-5 text-black dark:text-white" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] dark:bg-lightGray dark:text-white">
            <DialogHeader>
              <DialogTitle>Editor Settings</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex justify-between items-center gap-4">
                <Label htmlFor="fontsize" className="text-right">
                  Font Size
                </Label>
                <Select
                  key={"fontsize"}
                  onValueChange={(font) =>
                    updateEditorSettings(Number(font), tabsize)
                  }
                  defaultValue={String(fontsize)}
                >
                  <SelectTrigger className="w-[180px] dark:bg-darkGray border-gray-700 dark:text-white">
                    <SelectValue placeholder="Select a font size" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-darkGray dark:text-white">
                    <SelectGroup>
                      {availFontsizes.map((font) => (
                        <SelectItem value={String(font)} key={font}>
                          {font}px
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-between items-center gap-4">
                <Label htmlFor="tabsize" className="text-right">
                  Tab Size
                </Label>
                <Select
                  key={"tabsize"}
                  onValueChange={(tab) =>
                    updateEditorSettings(fontsize, Number(tab))
                  }
                  defaultValue={String(tabsize)}
                >
                  <SelectTrigger className="w-[180px] dark:bg-darkGray border-gray-700 dark:text-white">
                    <SelectValue placeholder="Select tab size" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-darkGray dark:text-white">
                    <SelectGroup>
                      {availTabsizes.map((tab) => (
                        <SelectItem value={String(tab)} key={tab}>
                          {tab}px
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <ThemeChanger />
    </div>
  );
}

export default EditorSettings;
