import { Article } from "../types";

const fetchLocation =
  process.env.NODE_ENV === "production"
    ? "https://whispering-everglades-07308.herokuapp.com"
    : "http://192.168.1.238:2718";

/*
 * The idea here is that if success is true, the value must be of type output.
 * Otherwise, it must be of type string for the error.
 */
interface ResultBase<Success, Output> {
  success: Success;
  value: Success extends true ? Output : string;
}

export type Result<Output> =
  | ResultBase<true, Output>
  | ResultBase<false, Output>;
/**
 * Fetches from the server using a POST request.
 * @param Output expected output on success
 * @param url url to fetch from
 * @param data body of the POST request
 * @returns A promise returning a Result of type Output or string.
 * It is guaranteed that result.value is of type Output when result.success is true,
 * and result.value is of type string when result.success is false.
 */
export async function post<Output>(
  url: string,
  data: object,
): Promise<Result<Output>> {

  const attempt = await fetch(`${fetchLocation}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const value: string = await attempt.text();
  let output: Output;
  let result: Result<Output> = { success: false, value };

  const success = attempt.status >= 200 && attempt.status < 300;

  try {
    output = JSON.parse(value);

    if (success) {
      result = { success: true, value: output };
    }
  } catch (_) {
    /*
     Assume that the serverside response is in the correct format i.e. 
     if it returns success, and we cannot parse it to JSON it must be 
     a string. Similarly, we must also assume that the clientside 
     function call is valid, i.e. that the given Output type is a 
     subtype of string
     there doesn't seem to be a good way to implement a check for this
    */
    if (success) {
      result = { success: true, value: value as unknown as Output };
    }
  } finally {
    return result;
  }
}

export const getAdvice = async () => {
  return await post<{ name: string, adv: string, time: number }>(
    "public/getAdvice",
    {}
  );
};

export const submitAdvice = async (name: string, adv: string) => {
  return await post<string>("public/submitAdvice", { name, adv });
};

export const getArticles = async () => {
  return await post<{ articles: Article[] }> (
    "public/getArticles",
    {}
  );
}