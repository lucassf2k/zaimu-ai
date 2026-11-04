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

      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <Skeleton className="h-8 w-36" />

          <div className="flex items-center gap-3">
            <Skeleton className="h-9 w-32 rounded-md" />
            <Skeleton className="h-9 w-36 rounded-md" />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          {/* Main Content */}
          <div className="flex flex-col gap-6 overflow-hidden">
            {/* Summary Cards */}
            <div className="grid grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="rounded-xl border p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-8 w-8 rounded-md" />
                  </div>

                  <Skeleton className="h-8 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-3 grid-rows-1 gap-6">
              {/* Transactions Pie Chart */}
              <div className="col-span-1 rounded-xl border p-5 space-y-5">
                <Skeleton className="h-5 w-36" />

                <div className="flex justify-center py-4">
                  <Skeleton className="size-40 rounded-full" />
                </div>

                <div className="space-y-3">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Skeleton className="size-3 rounded-full" />
                      <Skeleton className="h-3 w-24" />
                      <Skeleton className="h-3 w-12 ml-auto" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Expenses Per Category */}
              <div className="col-span-2 rounded-xl border p-5 space-y-5">
                <Skeleton className="h-5 w-48" />

                <div className="space-y-5 pt-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <Skeleton className="h-3 w-28" />
                        <Skeleton className="h-3 w-16" />
                      </div>
                      <Skeleton className="h-3 w-full rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Last Transactions */}
          <div className="rounded-xl border p-5 space-y-5">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-36" />
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>

            <div className="space-y-5">
              {Array.from({ length: 7 }).map((_, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full shrink-0" />

                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-3 w-28" />
                    <Skeleton className="h-3 w-20" />
                  </div>

                  <Skeleton className="h-4 w-16" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
