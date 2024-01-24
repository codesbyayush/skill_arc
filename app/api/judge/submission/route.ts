import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {
  const url = "http://localhost:2358/submissions/?fields=*&wait=true";
  const dataObj = {
    language_id: 62,
    source_code: "class Main { public static void main(String[] args) { System.out.println(2*4); }}"
}
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataObj)
  };

  let response;
  let result;
  try {
    response = await fetch(url, options);
    result = await response.text();
    console.log("result :", result);
  } catch (error) {
    console.error("error : ", error);
  }

  return NextResponse.json(
    {
      result
    },
    { status: 200 }
  );
}

export async function GET(req: NextApiRequest) {
  const url = "http://localhost:2358/languages";
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
    },
  };

  let response;
  try {
    response = await fetch(url, options);
    const result = await response.text();
    response = result;
  } catch (error) {
    console.error("error : ", error);
  }

  return NextResponse.json(
    {
      response,
    },
    { status: 200 }
  );
}
