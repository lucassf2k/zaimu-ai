import { doneHttpLoaderRequest, startHttpLoaderRequest } from "./http-loader";

export const fetchWithLoader = async (
  input: RequestInfo | URL,
  init?: RequestInit,
) => {
  startHttpLoaderRequest();
  try {
    const response = await fetch(input, init);
    return response;
  } finally {
    doneHttpLoaderRequest();
  }
};
