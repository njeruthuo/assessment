import {
  AlertSummary,
  AssetsService,
  CurveChart,
  DonutChart1,
  FleetMileage,
  Licenses,
  Profile,
  TotalViolations,
} from "@/components/custom";
import { Button } from "@/components/ui/button";

const Home = () => {
  // const date = "28/05/2022"; // this can be fetched from an API
  return (
    <main className="mx-4">
      <div className="flex">
        {/* Dashboard section */}
        <section className="md:w-4/5 md:border-r">
          <h1 className="text-xl py-4 font-bold">Dashboard</h1>
          <hr />

          <div className="flex justify-between py-4 md:px-4">
            <div className="flex place-items-end gap-2">
              <div className="border-b-custom-blue border-b-4 flex gap-2 items-center">
                <img className="h-6" src="/png.png" alt="" />
                {/* <p className="text-gray-600 text-sm"></p> */}
                <input
                  type="text"
                  name=""
                  className="text-gray-700 w-[100px] md:w-auto placeholder:text-gray-400 focus:text-lg transition-all duration-300 ease-in-out focus:outline-none"
                  placeholder="Search by reg. no"
                  id=""
                />
              </div>

              <Button className="bg-custom-blue text-white md:px-2 rounded-md">
                Go track
              </Button>
            </div>
            <div className=" flex place-items-center gap-2 text-xs border border-nav-bg p-2 rounded">
              <p className="md:pt-1 pt-1.5">28/05/2022</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="blue"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-4">
            <div className="flex flex-col justify-between rounded-lg min-h-[400px]">
              <DonutChart1 />
            </div>
            <div className="flex flex-col justify-between rounded-lg min-h-[400px]">
              <FleetMileage />
            </div>
            <div className="flex flex-col justify-between rounded-lg min-h-[400px]">
              <TotalViolations />
            </div>
          </div>

          <div className="">
            <div className="flex justify-between mx-auto w-[95%] items-center my-4">
              <h2 className="text-custom-blue text-xl font-bold">Fleet</h2>

              <div className=" flex flex-row items-center gap-2 text-xs border border-custom-blue p-2 rounded">
                <p className="mt-1">18/05/2022</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="blue"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4">
              <div className=" rounded-lg">
                <Licenses />
              </div>
              <div className="rounded-lg">
                <AlertSummary />
              </div>
              <div className="rounded-lg">
                <AssetsService />
              </div>

              <div className="rounded-lg">
                <CurveChart />
              </div>
            </div>
          </div>
        </section>

        {/* Profile section */}
        <div className="hidden md:block w-1/5">
          <Profile />
        </div>
      </div>
    </main>
  );
};
export default Home;
