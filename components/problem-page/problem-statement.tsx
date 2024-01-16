import React from "react";
import Examples from "@/components/problem-page/examples";
import Constraints from "@/components/problem-page/constraints";
import AboutProblem from "./problem-about-section";
import { Badge } from "../ui/badge";

type Props = {};

function ProblemStatement({}: Props) {
  return (
    <div className="h-full w-full px-4 py-5 bg-backgroundLeetcode rounded overflow-y-scroll scrollbar-hide flex flex-col gap-5">
      <h3 className="text-xl font-semibold">
        <span>1. </span> Two Sum
      </h3>
      <div className="flex gap-2 flex-wrap">
        <Badge className="text-emerald-300">Easy</Badge>
        <Badge>Topics</Badge>
        <Badge>Companies</Badge>
        <Badge>Hint</Badge>
      </div>
      <div className="flex flex-col gap-2">
        Given an array of integers nums and an integer target, return indices of
        the two numbers such that they add up to target.
        <p></p>
        You may assume that each input would have exactly one solution, and you
        may not use the same element twice.
        <p></p>
        You can return the answer in any order.
      </div>
      <Examples />
      <Constraints />
      <p className="text-sm">
        <span className="font-semibold text-base">Follow-up :</span>
        &nbsp;&nbsp; Can you come up with an algorithm that is less than O(n<sup>2</sup>)
        time complexity?
      </p>
      <p />
      <hr />
      <AboutProblem />
    </div>
  );
}

export default ProblemStatement;
