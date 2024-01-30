import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export type FeaturedCardProps = {
  cardTitle?: string;
  cardDesc?: string;
  redirectUrl?: string;
};

function FeaturedCourseCard({
  cardTitle = "Leetcode's Interview Crash Course:",
  cardDesc = "System Design for Interviews and Beyond",
  redirectUrl = "/",
}: FeaturedCardProps) {
  return (
    <Link href={redirectUrl}>
      <div className="bg-emerald-700 aspect-[16/7] flex flex-col justify-between p-6 gap-2 rounded-xl">
        <div>
          <h3 className="text-xl font-bold text-white"> {cardTitle} </h3>
          <p className=" font-medium text-white/80">{cardDesc}</p>
        </div>
        <Button className="w-min"> Start Learning</Button>
      </div>
    </Link>
  );
}

export default FeaturedCourseCard;
