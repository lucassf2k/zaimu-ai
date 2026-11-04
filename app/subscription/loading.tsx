import { Skeleton } from "@/app/_components/skeleton";

const Loading = () => {
  return (
    <>
      {/* Navbar */}
      <div className="h-16 border-b px-6 flex items-center justify-between">
        <Skeleton className="h-8 w-32" />

        <div className="flex items-center gap-4">
          <Skeleton className="h-9 w-9 rounded-full" />
          <Skeleton className="h-9 w-24 rounded-md" />
        </div>
      </div>

      <div className="space-y-6 p-8">
        {/* Page Header */}
        <Skeleton className="h-8 w-40" />

        {/* Subscription Plans */}
        <div className="flex flex-wrap gap-6">
          {/* Basic Plan */}
          <div className="w-[450px] rounded-xl border">
            {/* Card Header */}
            <div className="space-y-5 border-b py-8">
              <div className="flex justify-center">
                <Skeleton className="h-7 w-36" />
              </div>

              {/* Price */}
              <div className="flex items-center justify-center gap-3">
                <Skeleton className="h-10 w-8" />
                <Skeleton className="h-16 w-20" />
                <Skeleton className="h-7 w-16" />
              </div>
            </div>

            {/* Card Content */}
            <div className="space-y-6 px-6 py-8">
              {/* Benefit 1 */}
              <div className="flex items-center gap-3">
                <Skeleton className="size-5 rounded-full" />
                <Skeleton className="h-4 w-64" />
              </div>

              {/* Benefit 2 */}
              <div className="flex items-center gap-3">
                <Skeleton className="size-5 rounded-full" />
                <Skeleton className="h-4 w-36" />
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="w-[450px] rounded-xl border">
            {/* Card Header */}
            <div className="relative space-y-5 border-b py-8">
              {/* Active Badge */}
              <div className="absolute left-4 top-4">
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>

              <div className="flex justify-center">
                <Skeleton className="h-7 w-40" />
              </div>

              {/* Price */}
              <div className="flex items-center justify-center gap-3">
                <Skeleton className="h-10 w-8" />
                <Skeleton className="h-16 w-24" />
                <Skeleton className="h-7 w-16" />
              </div>
            </div>

            {/* Card Content */}
            <div className="space-y-6 px-6 py-8">
              {/* Benefit 1 */}
              <div className="flex items-center gap-3">
                <Skeleton className="size-5 rounded-full" />
                <Skeleton className="h-4 w-40" />
              </div>

              {/* Benefit 2 */}
              <div className="flex items-center gap-3">
                <Skeleton className="size-5 rounded-full" />
                <Skeleton className="h-4 w-48" />
              </div>

              {/* Acquire Plan Button */}
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
