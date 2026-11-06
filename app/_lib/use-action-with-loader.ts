"use client";

import { useTopLoader } from "nextjs-toploader";
import { useCallback } from "react";

export const useActionWithLoader = () => {
  const loader = useTopLoader();

  return useCallback(
    async <T>(action: () => Promise<T>): Promise<T> => {
      loader.start();
      try {
        return await action();
      } finally {
        loader.done();
      }
    },
    [loader],
  );
};
