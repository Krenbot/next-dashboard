import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { jost } from '@/app/ui/fonts';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart() {
  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${jost.className} mb-4 text-xl md:text-2xl`}>
        Add/Edit Projects
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="flex items-center pb-2 pt-6">
          <PlusCircleIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Add A Project</h3>
        </div>
      </div>
    </div>
  );
}
