"use server";

export const getSubmissionResult = async (
  code: string,
  input?: string,
  language?: string
) => {
  const url = process.env.RAPID_API_URL! + "/submissions/?wait=true";
  const dataObj = {
    language_id: language || "62",
    source_code: code,
    stdin: input,
  };
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": process.env.RAPID_API_KEY!,
      "X-RapidAPI-Host": process.env.RAPID_API_HOST!,
    },
    body: JSON.stringify(dataObj),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result);

    if (result?.compile_output)
      return { error: result.compile_output, ...result };
    if (result?.stderr) return { error: result.stderr, ...result };
    if (result?.status.description !== "Accepted") {
      return { error: result.status.description, ...result };
    }
    return { success: result.stdout, ...result };
  } catch (error) {
    return { error: "Sorry for the Inconvenience, some error from our side" };
  }
};
