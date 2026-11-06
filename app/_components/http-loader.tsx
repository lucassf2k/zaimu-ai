"use client";

import { useTopLoader } from "nextjs-toploader";
import { useEffect } from "react";
import { registerHttpLoader } from "../_lib/http-loader";

export const HttpLoader = () => {
  const loader = useTopLoader();

  useEffect(() => {
    return registerHttpLoader({
      start: () => loader.start(),
      done: () => loader.done(),
    });
  }, [loader]);

  return null;
};
