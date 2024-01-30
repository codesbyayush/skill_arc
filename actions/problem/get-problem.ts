"use server";

const fs = require('fs');

import { twoSum } from "@/testdata/two-sum";
import { allProblems } from "@/testdata/corrected-examples";


export const getProblem = async (
  slug: string,
) => {
    if(slug !== 'two-sum')return { error: true, message: 'Problem not available at the moment'};
    return { success: true, ...twoSum };
};


export const getProblemById = async (id: string) => {

  // correctIndent()

  const problem = allProblems.problems.find(problem => problem.id === id);
  if ( !problem )
    return { error: true, message: "Problem not available at the moment" };
  return { success: true, ...problem };
} 


// const correctIndent = () => {
// const newProblems = allProblems.problems.map((problem) => {
//   let exampless = problem.examples;
//   let j = 0;
//   let newExamples = [];
//   for (let i = 0; i < exampless.length; i++) {
//     const temp = {
//       input: "",
//       output: "",
//       explanation: "",
//     };
//     temp.input = exampless[i++]?.substring(6);
//     temp.output = exampless[i++]?.substring(6);
//     if (i < exampless.length) {
//       if (exampless[i].startsWith("Explanation")) {
//         temp.explanation = exampless[i++]?.substring(11);
//       }
//     }
//     newExamples.push(temp);
//     i--;
//   }
//   return { ...problem, examples: newExamples };
// });
 
// const data =JSON.stringify({ problems: newProblems })
// fs.writeFileSync('testdata/corrected-examples.ts', data)
// }