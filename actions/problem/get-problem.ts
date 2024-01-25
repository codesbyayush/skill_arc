"use server";

import { twoSum } from "@/testdata/two-sum";


export const getProblem = async (
  slug: string,
  id?: number,
) => {
    if(slug !== 'two-sum')return { error: true, message: 'Problem not available at the moment'};
    return { success: true, ...twoSum };
};
