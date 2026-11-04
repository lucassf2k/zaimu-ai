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

      <div className="p-6 space-y-6 overflow-hidden">
        {/* Header */}
        <div className="flex w-full items-center justify-between">
          <Skeleton className="h-8 w-40" />

          {/* Add Transaction Button */}
          <Skeleton className="h-10 w-44 rounded-md" />
        </div>

        {/* DataTable */}
        <div className="w-full rounded-md border">
          {/* Table Header */}
          <div className="flex items-center gap-4 border-b p-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex-1">
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>

          {/* Table Rows */}
          <div className="divide-y">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="flex items-center gap-4 p-4">
                {/* Description */}
                <div className="flex-1 flex items-center gap-3">
                  <Skeleton className="size-9 rounded-full shrink-0" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>

                {/* Category */}
                <div className="flex-1">
                  <Skeleton className="h-5 w-24 rounded-full" />
                </div>

                {/* Date */}
                <div className="flex-1">
                  <Skeleton className="h-4 w-24" />
                </div>

                {/* Type */}
                <div className="flex-1">
                  <Skeleton className="h-4 w-16" />
                </div>

                {/* Amount */}
                <div className="flex-1 flex justify-end">
                  <Skeleton className="h-4 w-20" />
                </div>

                {/* Actions */}
                <div className="w-8 flex justify-end">
                  <Skeleton className="size-8 rounded-md" />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t p-4">
            <Skeleton className="h-4 w-32" />

            <div className="flex gap-2">
              <Skeleton className="h-8 w-8 rounded-md" />
              <Skeleton className="h-8 w-8 rounded-md" />
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
