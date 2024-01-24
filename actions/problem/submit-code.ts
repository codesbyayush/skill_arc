"use server";

import { currentUserRole } from "@/lib/current-user-role";

export const submitCode = async ( code : string, problem: string, language?: string) => {

    const url =  process.env.CODE_ENGINE_URL! + "/submissions/?fields=*&wait=true";
    const dataObj = {
      language_id: 62,
      source_code: code,
      stdin: '5 10 5 2 5 2'
    };
    console.log('running')
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    };

    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result)
      // console.log(result.status);
      if(result.status?.id === 6) return  {
        error: 'Compilation Error',
        ...result
      } 
      return { success: true, ...result }
    } catch (error) {
      return { error: 'Error from our side' };
    }
};
