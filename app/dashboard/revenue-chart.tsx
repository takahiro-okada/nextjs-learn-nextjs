// import { generateYAxis } from "@/app/lib/utils";
import { fetchRevenue } from "@/app/lib/data";

export default async function RevenueChart() {
  const revenue = await fetchRevenue();

  // const chartHeight = 350;
  // const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return <div>sample</div>;
}
