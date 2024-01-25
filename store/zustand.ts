import { create } from "zustand";
import { persist } from "zustand/middleware";

type EditorStore = {
  code: string;
  update: (code: string) => void;
};

export const useEditorStore = create<EditorStore>()(
  persist(
    (set) => ({
      code: `import java.util.*;
import java.lang.*;
import java.io.*;

class Main {
  public static void main(String[] args) {

          //Enter your code here
    }
}`,
      update: (codes) => set(() => ({ code: codes })),
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
  testcases: '',
  updateTestcases: (testcase) =>
    set(() => ({ testcases: testcase })),
  updateResult: (result) =>
    set(() => ({ codeExecuted: true, testResult: result })),
  error: false,
  updateError: (currentState) =>
    set(() => ({ error: currentState })),
}));

