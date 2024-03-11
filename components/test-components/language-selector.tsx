"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEditorSettingStore, usePlaygroundStore } from "@/store/zustand";

import { availableLanguages } from "@/testdata/langs-available";

export function LanguageSelector() {
  const { updateLang, language } = usePlaygroundStore();
  const { updateLang: editorLang } = useEditorSettingStore();

  function changeSeen(lang: string) {
    updateLang(lang);
    editorLang(lang);
  }

  return (
    <Select onValueChange={(lang) => changeSeen(lang)} defaultValue={language}>
      <SelectTrigger className="w-[180px] dark:bg-darkGray border-gray-700 dark:text-white bg-white capitalize text-black">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent className="dark:bg-darkGray dark:text-white">
        <SelectGroup>
          {availableLanguages.map(({ id, name }) => (
            <SelectItem value={String(id)} className="capitalize" key={id}>
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
