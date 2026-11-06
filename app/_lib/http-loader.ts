type LoaderController = {
  start: () => void;
  done: () => void;
};

let loader: LoaderController | null = null;
let pendingRequests = 0;

export const registerHttpLoader = (controller: LoaderController) => {
  loader = controller;
  return () => {
    loader = null;
  };
};

export const startHttpLoaderRequest = () => {
  if (pendingRequests === 0) {
    loader?.start();
  }
  pendingRequests++;
};

export const doneHttpLoaderRequest = () => {
  pendingRequests = Math.max(0, pendingRequests - 1);
  if (pendingRequests === 0) {
    loader?.done();
  }
};
