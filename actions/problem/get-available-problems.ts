"use server";

import { allProblems } from "@/testdata/all-problems";

export const getAvailableProblems = async () => {
  const arr: problemDetails = [];
  allProblems.problems.map(problem => {
    arr.push({
        title: problem.title,
        id: problem.id
    })
  })
  return { success: true, result: arr };
};


type problemDetails = {
    id: string;
    title: string;
} | any
