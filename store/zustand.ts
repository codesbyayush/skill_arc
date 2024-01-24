import { create } from "zustand";
import { persist } from "zustand/middleware";

type EditorStore = {
  code: string;
  update: (code: string) => void;
};

export const useEditorStore = create<EditorStore>()(
    persist((set) => ({
      code: `class Main {
        public static void main(String[] args) {
            System.out.println(2*4);
        }
    }`,
      update: (codes) => set(() => ( {code: codes} )),
    }), { name: 'previousCode'})
);

type ResultStore = {
    codeExecuted: boolean,
    testResult: string,
    updateResult: (result: string) => void,
    error: boolean,
    updateError: () => void
}

export const useResultStore = create<ResultStore>()((set) => ({
  codeExecuted: false,
  testResult: "Execute the code to see the result",
  updateResult: (result) =>
    set(() => ({ codeExecuted: true, testResult: result })),
  error: false,
  updateError: () =>
    set((state) => ({ error: !state.error })),
}));

