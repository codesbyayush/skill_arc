"use client";

import { Textarea } from "@/components/ui/textarea";
import { useResultStore } from "@/store/zustand";
import { useEffect } from "react";

function Testcases({ testcase } : {testcase? : string}) {
  
  const { testcases, updateTestcases} = useResultStore();
  useEffect(() => {
    updateTestcases(testcase || '')
  },[])

  return (
    <>
      <div className=" rounded-lg py-4">
        <p className="py-4 font-semibold text-xl">✒️ Input &nbsp;:</p>
        <Textarea
          placeholder="Enter your custom input here"
          className="resize-y min-h-40 text-lg font-medium px-6 py-4 dark:border-white/15 dark:focus:border-white"
          value={testcases}
          rows={5}
          onChange={(e) => updateTestcases(e.target.value)}
        />
      </div>

      
    </>
  );
}

export default Testcases;


  /* <div className="flex gap-2 flex-wrap py-6">
        <Button className="bg-lightGray brightness-125 hover:brightness-90 hover:bg-lightGray">
          Case 1
        </Button>
        <Button className="bg-lightGray brightness-125 hover:brightness-90 hover:bg-lightGray">
          Case 2
        </Button>
        <Button className="bg-lightGray brightness-125 hover:brightness-90 hover:bg-lightGray">
          Case 3
        </Button>
      </div>
      <div>
        <div className="py-3 flex flex-col gap-2 text-sm">
          <p>nums</p>
          <p className="bg-lightGray px-4 py-1.5 rounded">
            [ 2 , 7 , 11 , 15 ]
          </p>
        </div>

        <div className="py-3 flex flex-col gap-2 text-sm">
          <p>target</p>
          <p className="bg-lightGray px-4 py-1.5 rounded">9</p>
        </div>
      </div> */