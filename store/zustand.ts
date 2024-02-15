import { create } from "zustand";
import { persist } from "zustand/middleware";

export const starterCode = `import java.util.*;
import java.lang.*;
import java.io.*;

class Main {
  public static void main(String[] args) {
      //Enter your code here
    }
}`;

type EditorStore = {
  code: string;
  question: string;
  resetCode: () => void;
  update: (code: string, id?: string) => void;
};

export const useEditorStore = create<EditorStore>()(
  persist(
    (set) => ({
      code: starterCode,
      question: "0",
      resetCode: () => set(() => ({ code: starterCode })),
      update: (codes, id) => set(() => ({ code: codes, question: id })),
    }),
    { name: "previousCode" }
  )
);

type ResultStore = {
  codeExecuted: boolean;
  testResult: string;
  testcases?: string;
  updateTestcases: (testcase: string) => void;
  updateResult: (result: string) => void;
  error: boolean;
  updateError: (currentState: boolean) => void;
};

export const useResultStore = create<ResultStore>()((set) => ({
  codeExecuted: false,
  testResult: "Execute the code to see the result",
  testcases: "",
  updateTestcases: (testcase) => set(() => ({ testcases: testcase })),
  updateResult: (result) =>
    set(() => ({ codeExecuted: true, testResult: result })),
  error: false,
  updateError: (currentState) => set(() => ({ error: currentState })),
}));



type PlaygroundStore = {
  code: string;
  language: string;
  update: (code: string, lang?: string) => void;
};

export const usePlaygroundStore = create<PlaygroundStore>()(
  persist(
    (set) => ({
      code: starterCode,
      language: "java",
      update: (codes, lang) => set(() => ({ code: codes, language: lang })),
    }),
    { name: "playgroundCode" }
  )
);
