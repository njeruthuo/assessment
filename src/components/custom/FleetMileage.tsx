// import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";
// import { Button } from "../ui/button";
// // import { DatePickerWithRange } from "./DatePicker";

// const chartData = [
//   { day: "", desktop: 186, mobile: 80 },
//   { day: "", desktop: 305, mobile: 200 },
//   { day: "Day", desktop: 237, mobile: 120 },
//   { day: "", desktop: 73, mobile: 190 },
//   { day: "", desktop: 209, mobile: 130 },
//   { day: "", desktop: 214, mobile: 140 },
// ];

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "hsl(var(--chart-1))",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "hsl(var(--chart-2))",
//   },
// } satisfies ChartConfig;

// const FleetMileage = () => {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle className="text-custom-blue">Fleet Mileage</CardTitle>
//         <CardDescription className="w-full flex justify-end">
//           {/* <DatePickerWithRange /> */}
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={chartConfig}>
//           <AreaChart
//             accessibilityLayer
//             data={chartData}
//             margin={{
//               left: 12,
//               right: 12,
//             }}
//           >
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="day"
//               label={{
//                 value: "Days",
//                 position: "insideBottomRight",
//                 offset: -10,
//               }}
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//               tickFormatter={(value) => value.slice(0, 3)}
//             />
//             <YAxis
//               label={{
//                 value: "Mileage (kms)",
//                 angle: -90,
//                 position: "insideLeft",
//               }}
//             />
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent indicator="dot" />}
//             />
//             <Area
//               dataKey="mobile"
//               type="natural"
//               fill="var(--color-mobile)"
//               fillOpacity={0.4}
//               stroke="var(--color-mobile)"
//               stackId="a"
//             />
//             <Area
//               dataKey="desktop"
//               type="natural"
//               fill="var(--color-desktop)"
//               fillOpacity={0.4}
//               stroke="var(--color-desktop)"
//               stackId="a"
//             />
//           </AreaChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter>
//         <div className="flex font-medium leading-none justify-end w-full">
//           <Button className="bg-custom-blue text-white">
//             <div className="flex place-items-center space-x-1">
//               <p>Movement</p>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="size-4"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M13.5 4.5L21 12m0 0-7.5 7.5M21 12H3"
//                 />
//               </svg>
//             </div>
//           </Button>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// };

// export default FleetMileage;

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "../ui/button";
import  DatePicker  from "./DatePicker";
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

function FleetMileage() {
  return (
    <Card className="bg-custom-white">
      <CardHeader>
        <CardTitle className="text-custom-blue">Fleet Mileage</CardTitle>
        <CardDescription className="flex justify-end py-1.5">
          <DatePicker />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex font-medium leading-none justify-end w-full">
          <Button className="bg-custom-blue text-white">
            <div className="flex place-items-center space-x-1">
              <p>Movement</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
export default FleetMileage;
