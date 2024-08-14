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
    <main className="mx-auto w-[90%]">
      <div className="flex">
        {/* Dashboard section */}
        <section className="w-4/5 border-r">
          <h1 className="text-xl py-4 font-bold">Dashboard</h1>
          <hr />

          <div className="flex justify-between py-4 px-4">
            <div className="flex place-items-center gap-2">
              <div className="border-b-custom-blue border-b-4 flex gap-2 place-items-center">
                <img className="h-6" src="/png.png" alt="" />
                {/* <p className="text-gray-600 text-sm"></p> */}
                <input
                  type="text"
                  name=""
                  className="text-gray-600 text-sm"
                  placeholder="Search by reg. no"
                  id=""
                />
              </div>

              <Button className="bg-custom-blue text-white px-2 rounded-md">
                Go track
              </Button>
            </div>
            <div className=" flex place-items-center gap-2 text-xs border border-nav-bg p-1 rounded">
              {"28 / 05 / 2022"}
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
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-custom-white rounded-lg">
              <DonutChart1 />
            </div>
            <div className="bg-custom-white rounded-lg">
              <FleetMileage />
            </div>
            <div className="bg-custom-white rounded-lg">
              <TotalViolations />
            </div>
          </div>

          <div className="my-8">
            <div className="flex justify-between mx-auto w-[95%] place-items-center my-4">
              <h2 className="text-custom-blue text-xl font-bold">Fleet</h2>

              <div className=" flex place-items-center gap-2 text-xs border border-nav-bg p-1 rounded">
                {"18/05/2022"}
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

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-custom-white rounded-lg">
                <Licenses />
              </div>
              <div className="bg-custom-white rounded-lg">
                <AlertSummary />
              </div>
              <div className="bg-custom-white rounded-lg">
                <AssetsService />
              </div>

              <div className="bg-custom-white rounded-lg">
                <CurveChart />
              </div>
            </div>
          </div>
        </section>

        {/* Profile section */}
        <div className="w-1/5">
          <Profile />
        </div>
      </div>
    </main>
  );
};
export default Home;
