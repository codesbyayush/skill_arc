import React from "react";
import { Button } from "@/components/ui/button";


function Testcases() {
  return (
    <>
      <div className="flex gap-2 flex-wrap py-6">
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
      </div>
    </>
  );
}

export default Testcases;
